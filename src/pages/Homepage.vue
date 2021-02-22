<template>
  <div class="container">
    <div class="left">
      <Story />
    </div>
    <div class="right">
      <div class="user">
        <a href="#"><i class="fas fa-user-circle"></i></a>
        <div class="user-info">
          <h1>cerdemrc</h1>
          <h2>Ceren</h2>
        </div>
      </div>
      <a class="link" href="#">Geçiş Yap</a>
    </div>
  </div>
</template>

<script>
import Story from "../components/Story";
export default {
  components: {
    Story,
  },
};
</script>

<style lang="scss" scoped>
@import "../style/root.scss";
.container {
  display: flex;
  & .left {
    width: 70%;
  }
  & .right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;

    & .user {
      display: flex;
      align-items: center;
      & i {
        font-size: 3.5rem;
        margin: 0 20px;
      }
      & h1 {
        font-size: 0.8rem;
      }
      & h2 {
        font-size: 0.9rem;
        opacity: 0.5;
        margin-top: 5px;
      }
    }
    & .link {
      color: $blue;
      font-weight: 600;
      font-size: 0.72rem;
      text-decoration: none;
    }
  }
}
</style>