<template>
  <form @submit.prevent>
    <h4>Create Post</h4>
    <MYInput 
    v-model="post.title"  
    type="text" 
    placeholder="name"/>
    <MYInput 
    v-model="post.body"  
    type="text" 
    placeholder="description"/>
    <MYButton @click="createPost">Create</MYButton>
  
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputModel: true,
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
     this.id = Date.now()
      this.$emit('listenToPost',this.post)
      this.description = '',
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style lang="css" scoped>



</style>