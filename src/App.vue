<template>
  <div class="app">
    <h2>Post List</h2>
    <div>
      <MYInput v-model="searchQuery" placeholder="Search ..." />
      <MYButton @clcick="showDialog">Crete Post</MYButton>
      <MYSelect v-model="selectedSort" :options="sortOptions" />
    </div>

    <MYDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MYDialog>
    <PostList v-bind:posts="sortedAndSearched" @remove="removePost" v-if="!isPostLoading" />
    <div v-else>Post Loading ...</div>
    <div class="page_wrapper">
      <div v-for = "pageNumber in totalPage" 
      :key="pageNumber" 
      class="page"
      :class="{'current-page': page === pageNumber }"
      >
      {{ pageNumber }}
    </div>
    </div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import MYButton from './components/UI/MYButton.vue';
import MYDialog from './components/UI/MYDialog.vue';
import axios from 'axios';
import MYSelect from './components/UI/MYSelect.vue';
import MYInput from './components/UI/MYInput.vue';

export default {
  components: { PostForm, PostList, MYDialog, MYButton, MYSelect, MYInput },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: "",
      searchQuery: "",
      pageNumber: 1,
      limit: 10,
      totalPage: 0,
      sortOptions: [
        { value: 'title', name: "about name" },
        { value: 'body', name: "about body" },
      ],
    };

  },
  methods: {
    createPost(post) {
      this.posts.push(post),
        this.dialogVisible = false
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
        await axios.get('https://jsonplaceholder.typicode.com/posts',{
          params:{
            _page : this.page,
            _limit: this.limit
          }
        });
        this.totalPage =Math.ceil(responce.headers['x-total-count'] / this.limit),
        this.posts = responce.data
      } catch (e) {
        alert(e)
      } finally {
        this.isPostLoading = false

      }
    }
  },  
  mounted() {
    this.fetchPosts()
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    sortedAndSearched() {
      return this.sortedPosts.filter(post=>
      post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))

    }
  },
  // watch: {
  //   selectedSort(newValue) {
  //     this.posts.sort((post1,post2)=>{
  //       return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])

  //     })
  //   },

  // }
}

</script>


<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
.page_wrapper{
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
  color:black

}
.page{
  border: 1px solid lightslategray;
  padding: 10px;
}
.current-page{
  border: 2px solid lightcoral;
}
</style>