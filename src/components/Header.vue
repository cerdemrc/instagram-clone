<template>
  <div class="header">
    <div class="navbar">
      <div class="mobile-top">
        <a class="new-story"><i class="fas fa-camera"></i></a>
        <img
          @click="goHome"
          class="logo"
          src="../assets/images/logo.png"
          alt="Logo"
        />
        <a class="direct"><i class="fab fa-facebook-messenger"></i></a>
      </div>
      <div class="mobile-bottom">
        <ul>
          <li>
            <a><i class="fas fa-home"></i></a>
          </li>
          <li>
            <a><i class="fas fa-search"></i></a>
          </li>
          <li>
            <a><i class="far fa-plus-square"></i></a>
          </li>
          <li>
            <a><i class="far fa-heart"></i></a>
          </li>
          <li>
            <a class="user"><img src="../assets/images/p2.jpg" /></a>
          </li>
        </ul>
      </div>
      <div class="main-header">
        <img
          @click="goHome"
          class="logo"
          src="../assets/images/logo.png"
          alt="Logo"
        />
        <div class="search">
          <input type="text" autocomplete="none" placeholder="Ara" />
        </div>
        <div class="nav">
          <ul class="nav-items">
            <li>
              <router-link to="/" tag="a"
                ><i class="fas fa-home"></i
              ></router-link>
            </li>
            <li>
              <router-link to="/direct" tag="a"
                ><i class="fab fa-facebook-messenger"></i
              ></router-link>
            </li>
            <li>
              <router-link to="/explore" tag="a"
                ><i class="far fa-compass"></i
              ></router-link>
            </li>
            <li>
              <a href="#"><i class="far fa-heart"></i></a>
            </li>
            <li class="user">
              <a href="#"><img src="../assets/images/p2.jpg" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid rgb(216, 216, 216);
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  & .navbar {
    width: 100%;
    overflow: hidden;
    & .mobile-top,
    .mobile-bottom {
      display: none;
    }
    & .main-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1000px;
      margin: 0 auto;
      height: 8vh;
      margin-top: 3px;

      & .logo {
        max-width: 100%;
        width: 120px;
        height: auto;
        cursor: pointer;
      }
      & .search input {
        border: 1px solid gray;
        outline: none;
        height: 28px;
        width: 215px;
        padding: 7px;
        border-radius: 3px;
        opacity: 0.6;

        &::placeholder {
          text-align: center;
        }
        &:focus::placeholder {
          text-align: left;
        }
      }
      & .nav {
        & .nav-items {
          display: flex;
          list-style: none;
          font-size: 1.5rem;
          & li {
            margin: 0 10px;
            & a {
              text-decoration: none;
              color: black;

              & :active {
                opacity: 0.4;
              }
            }
          }
          & .user img {
            width: 25px;
            height: auto;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .header {
    & .navbar {
      & .mobile-top {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 45px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid rgb(216, 216, 216);
        background: white;

        & .logo {
          width: 80px;
        }
        & a {
          font-size: 1.2rem;
        }
      }
      & .mobile-bottom {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 45px;
        display: flex;
        background: white;
        & ul {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          margin: 0 20px;
          & li {
            list-style: none;
            & a {
              font-size: 1.2rem;
            }
            & .user img {
              width: 20px;
              height: auto;
            }
          }
        }
      }
      & .main-header {
        display: none;
      }
    }
  }
}
</style>