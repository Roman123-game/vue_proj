eslint-disable 
<template>
  <div>
    <h4>List of Posts</h4>
     <PostItemVue class="post" v-for="post in posts" v-bind:key="post.id"/>
  </div>
 
</template>

<script>
import PostItemVue from './PostItem.vue';
  export default {
    components:{PostItemVue},
    props:{
      post:{
        type:Object,
        required:true,
      }
    }
    
  }
</script>

<style lang="css" scoped>

.post {
  width: 80%;
  padding: 10px;
  border: 1px solid lightslategray;
  border-radius: 50px;
  margin-top: 15px;
}

</style>
