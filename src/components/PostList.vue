<template>
  <div>
    <h4>Post List</h4>
  <PostItem 
  v-for="post in posts" 
  v-bind:key="post.id"
  :post="post"/>
 
</div>
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