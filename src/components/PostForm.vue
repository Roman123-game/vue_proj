<template>
     <form @submit.prevent>
      <h5>Posts create</h5>
      <input class="input" 
      v-model="post.title"
      type="text" 
      placeholder="name">
      <input 
      class="input" 
      v-model="post.body"
       type="text" 
       placeholder="description">
      <button
      @click="createPost" 
      class="btn"> Create post</button>
    </form>
</template>

<script>
  export default {
    data(){
      return{
        post:{
          title:'',
          body:''
        }

      }
    },
    methods:{
      createPost(){
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post={
              title:'',
              body:''
            }
      }

    }
  }
</script>

<style lang="css" scoped>
.input {
  border: 1px solid lightgreen;
  width: 100%;
  padding: 5px;
  border-radius: 50px;
  margin-top: 5px;
}

form {
  display: flex;
  flex-direction: column;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
  background: none;
  border: 1px solid lightsalmon;
  border-radius: 50px;
  padding: 5px;
  color: lightskyblue
}
</style>