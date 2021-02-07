<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  // App中父组件的 path 传给子组件
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#0190ff",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  height: 49px;
  text-align: center;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin: 2px 0;
}
</style>
