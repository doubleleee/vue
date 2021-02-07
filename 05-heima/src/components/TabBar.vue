<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {};
  },
};
</script>

<style scoped>
.tabbar {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>
