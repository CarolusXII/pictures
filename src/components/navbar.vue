<template>
  <div class="navbar navbar--light">
    <img :src="light ? 'static/img/Group.png' : 'static/img/Group (1).png'" alt="" class="navbar__img">
    <a
      href=""
      class="navbar__link"
      v-for="(link, index) in navbar_items"
      :key="index"
    >{{ link }}</a>
  </div>
</template>

<script>

  export default {
      props: ['light'],
      data() {
          return {
              navbar_items: [
                  'Каталог', 'Доставка', 'Оплата', 'Контакты', 'О галерее'
              ]
          }
      }
  }
</script>

<style lang="scss">
  .navbar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .navbar__link {
      color: #343030;
      font-size: 14px;
      text-decoration: none;
      font-weight: normal;
      font-weight: 600;
    }
  }
  .navbar--light {
    .navbar__link {
      color: #555555;
    }
  }
</style>
