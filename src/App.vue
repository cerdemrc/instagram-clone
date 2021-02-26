<template>
  <div id="app">
    <div class="container">
      <Header />
      <div class="hero-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" >
@import "./style/root.scss";
@font-face {
  font-family: Proxima;
  src: url("assets/font/proxima.otf");
  font-weight: normal;
}
@font-face {
  font-family: Proxima-Thin;
  src: url("assets/font/proxima-thin.otf");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Proxima-Thin;
}
#app {
  background: $gray;
  .container {
    height: 100%;
    width: 100%;

    & .hero-container {
      max-width: 1000px;
      margin: 0 auto;
      margin-top: 60px;
    }
  }
}

@media screen and (max-width: 650px) {
  #app {
    .container .hero-container {
      margin-top: 22px;
    }
  }
}
</style>
