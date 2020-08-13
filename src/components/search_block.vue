<template>
  <div class="search-block">
    <input
      type="text"
      v-model="search_value"
      class="search-block__text-field"
      :placeholder="placeholder"
      @keydown.enter="search()"
    >
    <button class="search-block__button" @click="search()">Найти</button>
  </div>
</template>

<script>
  export default {
      props: ['placeholder'],
      data() {
          return {
              search_value: ''
          }
      },
      methods: {
          search() {
              this.$emit('change-search', this.search_value);
          }
      },
      watch: {
          search_value(val, old_val) {
              if (old_val !== '' && val === '') {
                  this.$emit('change-search', this.search_value);
              }
          }
      }
  }
</script>

<style lang="scss">
  .search-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 48px;
    .search-block__text-field, .search-block__button {
      height: 100%;
    }
    .search-block__text-field {
      border: 1px solid #E1E1E1;
      outline: none;
      padding-left: 12px;
      flex: 1 1 auto;
      font-weight: 600;
    }
    .search-block__button {
      background: #403432;
      cursor: pointer;
      padding: 0px 36px;
      outline: none;
      border: 0;
      color: #fff;
    }
  }
</style>
