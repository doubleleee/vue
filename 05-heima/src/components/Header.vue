<template>
  <div class="header">
    <span>&lt; 返回</span>
    dabao的Vue项目
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  height: 49px;
  background-color: #0190ff;
  line-height: 49px;
  color: #fff;
  text-align: center;
  font-size: 16px;
}
span {
  position: absolute;
  left: 5px;
}
</style>
