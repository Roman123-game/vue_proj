<template>
    <Navbar></Navbar>
  <div class="app">
    <NewComp/>
    <RouterView></RouterView>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import NewComp from './components/UI/NewComp.vue';
  export default {
    components: { Navbar,NewComp}
}
</script>


<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

</style>