<template>
  <div class="dialog" @show="hideDialog" @click="hideDialog">
    <div class="dialog_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixin/toggleMixin';
export default {
  name: 'MYDialog',
mixins:[toggleMixin]
}
</script>

<style lang="css" scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog_content {
  margin: auto;
  background: white;
  border-radius: 10px;
  min-height: 50px;
  min-width: 300px;
  padding: 10px;
}
</style>