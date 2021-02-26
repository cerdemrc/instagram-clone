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
        <router-link to="/direct" tag="a"
          ><i class="fab fa-facebook-messenger"></i
        ></router-link>
      </div>
      <div class="mobile-bottom">
        <ul>
          <li>
            <router-link to="/" tag="a"
              ><i class="fas fa-home"></i
            ></router-link>
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
              <div class="user-dropdown">
                <a @click="addClass"><img src="../assets/images/p2.jpg" /></a>
                <div class="dropdown-content" v-if="showDropdown">
                  <ul>
                    <li><i class="far fa-user-circle"></i>Profil</li>
                    <li><i class="far fa-bookmark"></i> Kaydedildi</li>
                    <li><i class="fas fa-cog"></i>Ayarlar</li>
                    <li><i class="fas fa-sync-alt"></i>Hesap Değiştir</li>
                    <hr />
                    <li>Çıkış Yap</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    addClass() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/root.scss";
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
        background: $gray;

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
          & .user {
            &:hover {
              cursor: pointer;
            }
            & .user-dropdown {
              & img {
                width: 25px;
                height: auto;
              }
              & .dropdown-content {
                position: absolute;
                right: 200px;
                min-width: 200px;
                box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                padding: 12px 16px;
                z-index: 1;
                margin-top: 5px;
                background: white;
                & ul {
                  list-style: none;
                  font-size: 0.9rem;
                  letter-spacing: 0.5px;
                  & li {
                    padding: 10px;
                    &:hover {
                      background: $gray;
                    }
                    & i {
                      font-size: 1.2rem;
                      margin-right: 10px;
                    }
                  }
                  & :hover {
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

.dropdown-active {
  display: block;
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
          width: 90px;
        }
        & a {
          font-size: 1.4rem;
          color: black;
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
              font-size: 1.4rem;
              color: black;
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