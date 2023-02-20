<template>
    <form @submit.prevent>
    <h4>Create Post</h4>
    <input v-model="post.title" class="input" type="text" placeholder="name">
    <input  v-model="post.description" class="input" type="text" placeholder="description">
    <button class="btn" >Create</button>
  </form>
 
</template>

<script>
  export default {
    data(){
      return{
        post:{
          title:'',
          description: ''
        }
      }
    }
  }
</script>

<style lang="css" scoped>
.input{
  width: 25%;
  border: 1px  solid lightgreen;
  margin-top: 15px;
  border-radius: 50px;
}
.btn{
  align-self: flex-start;
  background: none;
  color:blueviolet;
  padding: 5px;
  border-radius: 1px solid grey;
  border-radius: 50px;
}

</style>