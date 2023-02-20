<template>
  <div class="post" >
    <div>
   <div><Strong>Name:</Strong>{{post.title}}</div>
   <div><Strong>Description:</Strong>{{post.description}}</div>
  </div>
  <div>
    <MYButton class="btn">RemovePost</MYButton>
  </div>
  </div>

</template>

<script>
import MYButton from './UI/MYButton.vue';
  export default {
    props:{
      post:{
        type: Object ,
        required:true
      }
    },
    components:{MYButton}
  }
</script>

<style lang="css" scoped>
.post{
  padding: 15px;
  margin-top: 15px;
  border-radius: 50px;
  border: 1px  solid grey
}
.btn {
  margin-top: 3px;
  align-self: flex-start;
  background: none;
  color: blueviolet;
  padding: 5px;
  border-radius: 1px solid grey;
  border-radius: 50px;
}

</style>