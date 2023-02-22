<template>
  <div v-show="posts.length>0">
    <h4>Post List</h4>
    <TransitionGroup name="list">
  <PostItem 
  v-for="post in posts" 
  v-bind:key="post.id"
  :post="post"
  @remove="$emit('remove',post)"
  />
</TransitionGroup>
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

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

</style>