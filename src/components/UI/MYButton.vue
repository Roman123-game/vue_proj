<template>
  <button >
<slot></slot>
  </button>
</template>

<script>
  export default {
    props:{
      
    }
  }
</script>

<style lang="css" scoped>
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