<template>
  <div class="container">
    <div class="main">
      <Story />
      <Posts />
    </div>
  </div>
</template>

<script>
import Story from "../components/Story";
import Posts from "../components/Posts";
export default {
  components: {
    Story,
    Posts,
  },
};
</script>

<style lang="scss" scoped>
@import "../style/root.scss";
.container {
  display: flex;
  justify-content: center;
  & .main {
    width: 70%;
    display: flex;
    flex-flow: column;
  }
}
@media screen and (max-width: 650px) {
  .container .main {
    width: 100%;
  }
}
</style>