<template>
  <h2>Post List</h2>
  <div>
    <MYButton @clcick="showDialog">Crete Post</MYButton>
    <MYSelect v-model="selectedSort" :options="sortOptions" />
  </div>

  <MYDialog v-model:show="dialogVisible">
    <PostForm @create="createPost" />
  </MYDialog>
  <PostList v-bind:posts="posts" @remove="removePost" v-if="!isPostLoading" />
  <div v-else>Post Loading ...</div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import MYButton from './components/UI/MYButton.vue';
import MYDialog from './components/UI/MYDialog.vue';
import axios from 'axios';
import MYSelect from './components/UI/MYSelect.vue';

export default {
  components: { PostForm, PostList, MYDialog, MYButton, MYSelect },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: "",
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
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
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
  computed:{
sortedPosts(){
  return[...this.posts].sort((post1,post2)=>{
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])

      })
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
</style>