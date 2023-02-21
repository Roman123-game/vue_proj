<template>
  <h2>Post List</h2>
  <MYButton @clcick="showDialog">Crete Post</MYButton>
  <MYDialog v-model:show="dialogVisible ">
    <PostForm @create="createPost"/>
  </MYDialog>
<PostList v-bind:posts="posts" @remove="removePost"/>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import MYButton from './components/UI/MYButton.vue';
import MYDialog from './components/UI/MYDialog.vue';

export default {
  components:{ PostForm, PostList, MYDialog, MYButton },
 data(){
  return {
    posts:[
      {id :1, name : "javascript", description : "post about javascript"},
      {id :2, name : "javascript", description : "post about javascript2"},
      {id :3, name : "javascript", description : "post about javascript3"}
    ],
    dialogVisible : false,
  };

 },
 methods:{
  createPost(post){
    this.posts.push(post)

  },
  removePost(post){
    this.posts =this.posts.filter(p=>p.id !== post.id)

  },
  showDialog(){
    this.dialogVisible = true;
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