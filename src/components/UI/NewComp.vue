<template>
  <div>newcompoennt
<input type="checkbox" v-model="vmodel" :disabled="boolean"/>
</div>
</template>

<script>
  export default {
    data(){
      return {
vmodel:'',
boolean: false
      }
    },
  name: 'NewComponent'

  }
</script>

<style lang="css" scoped>

</style>