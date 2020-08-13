<template>
  <div class="pictures">
    <div class="pictures__title">Картины эпохи Возрождения</div>
    <div class="pictures__pictures-block">
      <picture-item
        v-for="(picture, index) in pictures"
        :key="index"
        :picture_data="picture"
      ></picture-item>
    </div>
  </div>
</template>

<script>
    import PictureItem from './picture_item.vue'

    export default {
        components: {
            PictureItem,
        },
        computed: {
            pictures() {
                let search_val = this.$store.getters.getSearchVal.toLocaleLowerCase();
                return this.$store.getters.getPicturesData.filter(i => i.name.toLocaleLowerCase().includes(search_val));
            }
        },
        mounted() {
            this.$store.dispatch('getLS');
        }
    }
</script>

<style lang="scss">
  .pictures {
    .pictures__title {
      color: #343030;
      font-size: 24px;
      font-weight: bold;
    }
    .pictures__pictures-block {
      margin-top: 40px;
      display: -webkit-flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      .picture-item {
        border: 1px solid #E1E1E1;
        max-width: 280px;
        display: inline-block;
      }
    }
  }

  @media (max-width: 590px) {
    .picture-item:nth-child(1n+2) {
      margin-top: 32px;
    }
  }

  @media (min-width: 591px) and (max-width: 883px) {
    .picture-item:not(:nth-child(2n)) {
      margin-right: calc(100% - 280px * 2);
    }
    .picture-item:nth-child(1n+3) {
      margin-top: 32px;
    }
  }

  @media (min-width: 884px) and (max-width: 1166px) {
    .picture-item:not(:nth-child(3n)) {
      margin-right: calc((100% - 280px * 3) / 2);
    }
    .picture-item:nth-child(1n+4) {
      margin-top: 32px;
    }
  }

  @media (min-width: 1167px) {
    .picture-item:not(:nth-child(4n)) {
      margin-right: calc((100% - 280px * 4) / 3);
    }
    .picture-item:nth-child(1n+5) {
      margin-top: 32px;
    }
  }

</style>
