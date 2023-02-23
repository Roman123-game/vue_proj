<template>
  <div>
<div class="navbar">
  <MYButton @click="$router.push('/')">MAIN</MYButton>
  <MYButton @click="$router.push('/page')">POSTS</MYButton>
</div>
  </div>
</template>

<script>
import MYButton from './UI/MYButton.vue';

  export default {
    components: { MYButton }
}
</script>

<style lang="css" scoped>
.navbar{
  height: 50px;
  background-color: lightgreen;
  box-shadow: 2px 2px 4px lightgray;
  display: flex;
}

</style>