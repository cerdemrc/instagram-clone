<template>
  <div class="header">
    <div class="navbar">
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

@media screen and (max-width: 650px) {
  .header {
    & .navbar {
      & .logo {
        width: 90px;
        margin-left: 10px;
      }
      & .search input {
        display: none;
      }
      & .nav {
        & .nav-items {
          display: flex;
          align-items: center;
          font-size: 1.3rem;
          & li {
            margin: 0 6px;
          }
          & .user img {
            width: 21px;
          }
        }
      }
    }
  }
}
</style>