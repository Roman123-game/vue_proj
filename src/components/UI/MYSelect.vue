<template>
  <select class="select" v-bind:value="modelValue" @changeOption="changeOption">
    <option disabled value="">Select from list </option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'MYSelect',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(ev) {
      this.$emiit('update:modelValue', ev.target.value)

    }
  }
}
</script>

<style lang="css" scoped>

.select{
  padding: 5px;
  width: 25%;
  border: 1px solid lightgray;
  margin-top: 15px;
  border-radius: 50px;
}
</style>