<template>
  <div v-show="posts.length>0">
    <h4>Post List</h4>
  <PostItem 
  v-for="post in posts" 
  v-bind:key="post.id"
  :post="post"
  @remove="$emit('remove',post)"
  />
 
</div>
<h1 v-show ="posts.length ===  0">
  Post List empty
</h1>
</template>

<script>
import PostItem from './PostItem.vue';
  export default {
    props:{
      posts:{
        type: Array,
        required: true
      }
    },
    components:{PostItem}
  }
</script>

<style lang="css" scoped>



</style>