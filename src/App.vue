<template>
  <div id="app">
    <div class="nav nav--header">
      <div class="nav__container">
        <navbar :light="true"></navbar>
        <search-block
          placeholder="Поиск по названию картины"
          @change-search="search"
        ></search-block>
      </div>
    </div>
    <div class="main-container">
      <pictures></pictures>
    </div>
    <div class="nav nav--footer">
      <div class="nav__container">
        <navbar :light="false"></navbar>
        <div class="nav--footer__contacts">
          <div class="nav--footer__phone">
            <img src="static/img/phone.png">
            <span>+7 (495) 555-55-55</span>
          </div>
          <div class="nav--footer__address">
            <img src="static/img/address.png">
            <span>г. Москва, ул. Расплетина, 24</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Pictures from './components/pictures.vue'
    import Navbar from './components/navbar.vue'
    import SearchBlock from './components/search_block.vue'

    export default {
        name: 'App',
        components: {
            Pictures,
            Navbar,
            SearchBlock
        },
        methods: {
            search(search_value) {
                console.log('search()', search_value);
                this.$store.commit('setSearchVal', search_value);
            }
        }
    }
</script>

<style lang="scss">
  @font-face {
    font-family: "Merriweather";
    src: url('./fonts/Merriweather/Merriweather-Light.ttf'); /* IE9 Compat Modes */
    src: url('./fonts/Merriweather/Merriweather-Light.ttf') format('embedded-opentype'), /* IE6-IE8 */
    url('./fonts/Merriweather/Merriweather-Light.ttf') format('woff'), /* Pretty Modern Browsers */
    url('./fonts/Merriweather/Merriweather-Light.ttf')  format('truetype'), /* Safari, Android, iOS */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Merriweather";
  }

  body {
    background: #F6F3F3;
  }


  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    .main-container {
      margin: 40px auto 0px;
      max-width: 100%;
      width: 1248px;
      padding: 0px 16px;
      flex: 1 0 auto;
    }
    .nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 24px 0px;
      .nav__container {
        margin: 0 auto;
        max-width: 100%;
        width: 1248px;
        padding: 0px 16px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        .search-block {
          input {
            background: #F6F3F3;
          }
        }
        .navbar {
          width: 600px;
        }
        .search-block {
          width: 400px;
        }
      }
    }

    .nav--header {
      border-bottom: 1px solid #E1E1E1;
    }
    .nav--footer {
      background: #ECEAEA;
      flex: 0 0 auto;
      margin-top: 24px;
      .nav__container {
        .nav--footer__contacts {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-wrap: wrap;
          color: #555555;
          .nav--footer__phone {
            margin-right: 50px;
          }
          .nav--footer__phone, .nav--footer__address {
            color: #555555;
            font-size: 14px;
            display: flex;
            flex-direction: row;
            align-items: center;
            font-weight: 600;
            img {
              margin-right: 5px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1031px) {
    .search-block {
      margin-top: 24px;
    }
  }

  @media (max-width: 1064px) {
    .nav--footer__contacts {
      margin-top: 24px;
    }
  }
</style>
