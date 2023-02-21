<template>
  <h2>Post List</h2>
  <MYButton @clcick="showDialog">Crete Post</MYButton>
  <MYButton @click="fetchPosts">Get posts</MYButton>
  <MYDialog v-model:show="dialogVisible">
    <PostForm @create="createPost" />
  </MYDialog>
  <PostList v-bind:posts="posts" @remove="removePost" />
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import MYButton from './components/UI/MYButton.vue';
import MYDialog from './components/UI/MYDialog.vue';
import axios from 'axios';

export default {
  components: { PostForm, PostList, MYDialog, MYButton },
  data() {
    return {
      posts: [],
      dialogVisible: false,
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
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.posts =responce.data
      } catch (e) {
        alert(e)

      }
    }
  }

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