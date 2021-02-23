<template>
  <div class="container">
    <div class="left">
      <Story />
      <Posts />
    </div>
    <!-- <div class="right">
      <div class="user">
        <img src="../assets/images/p2.jpg" alt="User" />
        <div class="user-info">
          <h1>cerdemrc</h1>
          <h2>Ceren</h2>
        </div>
      </div>
      <a class="link" href="#">Geçiş Yap</a>
    </div> -->
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
  & .left {
    width: 70%;
    display: flex;
    flex-flow: column;
  }
  // & .right {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   width: 30%;

  //   & .user {
  //     display: flex;
  //     align-items: center;
  //     width: 70%;
  //     & img {
  //       width: 25%;
  //       height: auto;
  //       margin: 0 20px;
  //     }
  //     & h1 {
  //       font-size: 0.8rem;
  //     }
  //     & h2 {
  //       font-size: 0.9rem;
  //       opacity: 0.5;
  //       margin-top: 5px;
  //     }
  //   }
  //   & .link {
  //     color: $blue;
  //     width: 20%;
  //     font-weight: 600;
  //     font-size: 0.72rem;
  //     text-decoration: none;
  //   }
  // }
}
</style>