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
  export default {
    props:{
      post:{
        type: Object ,
        required:true
      }
    },
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