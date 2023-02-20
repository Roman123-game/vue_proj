<template>
<PostForm @listenToPost="createPost"/>
<PostList v-bind:posts="posts"/>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';

export default {
  components:{PostForm,PostList},
 data(){
  return {
    posts:[
      {id :1, name : "javascript", description : "post about javascript"},
      {id :2, name : "javascript", description : "post about javascript2"},
      {id :3, name : "javascript", description : "post about javascript3"}
    ],
  };

 },
 methods:{
  createPost(post){
    this.posts.push(post)

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