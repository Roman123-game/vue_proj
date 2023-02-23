<template>
  <button class="btn" >
<slot></slot>
  </button>
</template>

<script>
  export default {
  name: 'MYButton'
  }
</script>

<style lang="css" scoped>
.btn {
  margin-top: 3px;
  margin-left:3px;
  align-self: flex-start;
  background: none;
  color: blueviolet;
  padding: 5px;
  border-radius: 3px double black;
  border-radius: 50px;
}
</style>