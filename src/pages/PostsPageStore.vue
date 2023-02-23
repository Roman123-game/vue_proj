<template>
  <div>

    <h2>Post List</h2>
    <div>
      <MYInput @update:model-value='setSearchQuery' :model-value="searchQuery" placeholder="Search ..." />
      <MYSelect @update:model-value="setSelectedSort" :model-value="setSelectedSort" :options="sortOptions" />
      <MYButton @clcick="showDialog">Crete Post</MYButton>
    </div>

    <MYDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MYDialog>
    <PostList v-bind:posts="sortedAndSearched" @remove="removePost" v-if="!isPostLoading" />
    <div v-else>Post Loading ...</div>
    <div class="page_wrapper">
      <div v-for="pageNumber in totalPage" :key="pageNumber" class="page"
        v-bind:class="{ 'current-page': page === pageNumber }" @click="changePages(pageNumber)">
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import MYButton from '@/components/UI/MYButton.vue';
import MYDialog from '@/components/UI/MYDialog.vue';
import axios from 'axios';
import MYSelect from '@/components/UI/MYSelect.vue';
import MYInput from '@/components/UI/MYInput.vue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'


export default {
  components: { PostForm, PostList, MYDialog, MYButton, MYSelect, MYInput },
  data() {
    return {
  
    };

  },
  methods: {
    ...mapMutations({
      setPage: 'post/sePage',
      setSearchQuery:  "post/setSearchQuery",
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)

    },
    showDialog() {
      this.dialogVisible = true;
    },

    async fetchPosts() {
      try {
        this.isPostLoading = true
        const responce =
          await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          });
        this.totalPage = Math.ceil(responce.headers['x-total-count'] / this.limit),
          this.posts = responce.data
      } catch (e) {
        alert(e)
      } finally {
        this.isPostLoading = false

      }
    },
    changePages(pageNumber) {
      this.page = pageNumber
    }
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearched: 'post/sortedAndSearchedPosts'
    }),
    ...mapState({
      posts: state=> state.post.posts,
      dialogVisible:  state=> state.post.dialogVisible,
      isPostLoading:  state=> state.post.isPostLoading,
      selectedSort:  state=> state.post.selectedSort,
      searchQuery:  state=> state.post.searchQuery,
      page:  state=> state.post.page,
      limit:  state=> state.post.limit,
      totalPage: state=> state.post.totalPage,
      sortOptions:  state=> state.post.sortOptions,
    }),
  },
  watch: {
    page() {
      this.fetchPosts()
    }
  }
}

</script>

<style lang="css" scoped>
.page_wrapper {
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
  color: black
}

.page {
  border: 1px solid lightslategray;
  padding: 10px;
  border-radius: 15px;
}

.current-page {
  border: 3px double lightcoral;
  border-radius: 15px;
}

.likes {
  color: lightblue
}
</style>