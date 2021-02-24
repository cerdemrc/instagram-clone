<template>
  <div class="posts">
    <div class="post">
      <div class="user">
        <div class="user-info">
          <a href="#"><img src="../assets/images/p2.jpg" /></a>
          <h1>ceren</h1>
        </div>
        <a href="#"><i class="fas fa-ellipsis-h"></i></a>
      </div>
      <div class="image">
        <img src="../assets/images/post1.jpg" alt="Post" />
      </div>
      <div class="post-content">
        <div class="icons">
          <div class="left">
            <a href="#"><i class="far fa-heart"></i></a>
            <a href="#"><i class="far fa-comment"></i></a>
            <a href="#"><i class="fab fa-facebook-messenger"></i></a>
          </div>
          <div class="right">
            <a href="#"><i class="far fa-bookmark"></i></a>
          </div>
        </div>
        <div class="likes">
          <h2>1.345 beğenme</h2>
        </div>
        <div class="commend">
          <h3><span>ceren</span>Even for me life had its gleams of sunshine</h3>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="user">
        <div class="user-info">
          <a href="#"><img src="../assets/images/p1.jpg" /></a>
          <h1>harvey</h1>
        </div>
        <a href="#"><i class="fas fa-ellipsis-h"></i></a>
      </div>
      <div class="image">
        <img src="../assets/images/post2.jpg" alt="Post" />
      </div>
      <div class="post-content">
        <div class="icons">
          <div class="left">
            <a href="#"><i class="far fa-heart"></i></a>
            <a href="#"><i class="far fa-comment"></i></a>
            <a href="#"><i class="fab fa-facebook-messenger"></i></a>
          </div>
          <div class="right">
            <a href="#"><i class="far fa-bookmark"></i></a>
          </div>
        </div>
        <div class="likes">
          <h2>23.653 beğenme</h2>
        </div>
        <div class="commend">
          <h3>
            <span>harvey</span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../style/root.scss";
.posts {
  & .post {
    border: 1px solid $bg-border;
    margin-top: 20px;
    & .user {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      & .user-info {
        display: flex;
        align-items: center;
        & img {
          width: 20%;
          height: auto;
          border-radius: 100%;
          border: 2.5px solid transparent;
          background: linear-gradient(220deg, $pink, $yellow);
        }
        & h1 {
          font-size: 0.8rem;
          margin-left: -9.5rem;
          &:active {
            opacity: 0.6;
          }
          &:hover {
            cursor: pointer;
          }
        }
      }
      & i {
        font-size: 1rem;
        color: $black;
      }
    }
    & .image {
      & img {
        width: 100%;
        height: auto;
      }
    }
    & .post-content {
      padding: 10px 20px;
      & .icons {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & i {
          font-size: 1.5rem;
          color: $black;
        }

        & .left a i {
          margin: 0 5px;
        }
      }
      & .likes {
        font-size: 0.6rem;
        margin: 12px 5px;
      }
      & .commend {
        font-size: 0.7rem;
        margin: 10px 5px;
        & span {
          font-family: Proxima;
          margin-right: 5px;
        }
      }
    }
  }
}
@media screen and (max-width: 650px) {
  .posts {
    & .post {
      border: none;
      & .post-content {
        padding: 10px 5px;
        & .likes {
          font-size: 0.55rem;
        }
      }
    }
  }
}
</style>