<template>
  <form @submit.prevent>
    <h4>Create Post</h4>
    <MYInput 
    v-model="post.title"  
    type="text" 
    placeholder="name"/>
    <MYInput 
    v-model="post.description"  
    type="text" 
    placeholder="description"/>
    <MYButton class="btn" @click="createPost">Create</MYButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        description: ''
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
        description: ''
      }
    }
  }
}
</script>

<style lang="css" scoped>



</style>