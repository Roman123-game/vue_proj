<template>
  <input 
  class="input" 
  type="text" 
  :value="modelValue" 
  @input="updateInput">
</template>

<script>
  export default {
    name: 'MYInput',
    props:{
    modelValue :[String,Number]
    },
    methods:{
      updateInput(event){
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
</script>

<style lang="css" scoped>
.input {
  padding: 5px;
  width: 25%;
  border: 1px solid lightgreen;
  margin-top: 15px;
  border-radius: 50px;
}
</style>