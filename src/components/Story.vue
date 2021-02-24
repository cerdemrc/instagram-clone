<template>
  <div class="stories">
    <ul>
      <li>
        <img src="../assets/images/p1.jpg" alt="User" /><span>satrayn</span>
      </li>
      <li>
        <img src="../assets/images/p2.jpg" alt="User" /><span>rssllkm</span>
      </li>
      <li>
        <img src="../assets/images/p3.jpg" alt="User" /><span>9geek</span>
      </li>
      <li>
        <img src="../assets/images/p4.jpg" alt="User" /><span>halkekmag</span>
      </li>
      <li>
        <img src="../assets/images/p5.jpg" alt="User" /><span>riannemejer</span>
      </li>
      <li>
        <img src="../assets/images/p6.jpg" alt="User" /><span>zaytung</span>
      </li>
      <li>
        <img src="../assets/images/p6.jpg" alt="User" /><span>zaytung</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../style/root.scss";
.stories {
  border: 1px solid $bg-border;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  & ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    & li {
      font-size: 0.8rem;
      font-family: Proxima-Thin;
      display: flex;
      flex-flow: column;
      align-items: center;
      margin: 0 -50px;
      & :active {
        opacity: 0.6;
      }
      &:hover {
        cursor: pointer;
      }
      & span {
        margin-top: 10px;
      }
      & img {
        width: 40%;
        height: auto;
        border-radius: 100%;
        border: 2.5px solid transparent;
        background: linear-gradient(220deg, $pink, $yellow);
        font-size: 4rem;
      }
    }
  }
}
@media screen and (max-width: 650px) {
  .stories {
    border: none;
    padding: 10px;

    & ul li {
      margin: 0 -30px;
    }
  }
}
</style>