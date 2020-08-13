<template>
  <div class="loading-block">
    <ul class="text-button_loading_yellow-color">
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<style lang="scss">
  .loading-block {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      font-size: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 70%;
      max-width: 70px;
      height: 20px;

      li {
        margin: 0;
        height: 5px;
        width: 5px;
        border: 2px solid #fff;
        background: #fff;
        border-radius: 50%;
        animation: SUPPORT_LOADING 2s infinite;
        box-sizing: initial;
      }
      li:nth-child(1n) {
        left: -20px;
        animation-delay: 0s;
      }

      li:nth-child(2n) {
        left: 0;
        animation-delay: 0.2s;
      }

      li:nth-child(3n) {
        left: 20px;
        animation-delay: 0.4s;
      }
    }
  }


  @keyframes SUPPORT_LOADING {
    0% {
      transform: scale(1);
      background: #fff;
    }
    50% {
      transform: scale(1.6);
      background: rgba(0, 0, 0, 0);
    }
    100% {
      transform: scale(1);
      background: #fff;
    }
  }
</style>
