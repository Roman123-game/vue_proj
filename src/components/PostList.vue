<template>
  <div class="post" v-for="post in posts" v-bind:key="post.id">
   <div><Strong>Name:</Strong>{{post.name}}</div>
   <div><Strong>Description:</Strong>{{post.description}}</div>
  </div>
</template>

<script>
  export default {
    props:{
      posts:{
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="css" scoped>

.post{
  padding: 15px;
  margin-top: 15px;
  border-radius: 50px;
  border: 1px  solid grey
}


</style>