<template>
<div class="post" >
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong>{{ post.body }}</div>
    </div>
</template>

<script>
  export default {
    props:{
      type: Object,
      required:true
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