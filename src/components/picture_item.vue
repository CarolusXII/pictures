<template>
  <div class="picture-item" :class="{ 'picture-item--not-active' : !picture_data.active }">
    <div class="picture-item__img">
      <img :src="picture_data.img">
    </div>
    <div class="picture-item__main-info">
      <div class="picture-item__name"> &#171;{{ picture_data.name }}&#187;</div>
      <div class="picture-item__author">{{ picture_data.author }}</div>
      <div class="picture-item__action-block">
        <template v-if="picture_data.active">
          <div class="picture-item__price-block">
            <span v-if="picture_data.old_price" class="picture-item__price--old">{{ picture_data.old_price | filterMoney }} $</span>
            <span class="picture-item__price">{{ picture_data.price | filterMoney }} $</span>
          </div>
          <button
            v-if="!selectedPictures.map(i => i.id).includes(picture_data.id)"
            class="picture-item__action-button"
            :disabled="loading_button"
            @click="addPictureInBasket">
            <template v-if="!loading_button">Купить</template>
            <loader v-else></loader>
          </button>
          <button
            v-else
            class="picture-item__action-button picture-item__action-button--selected"
            :disabled="loading_button"
            @click="removePictureFromBasket">
            <template v-if="!loading_button">
              <img src="static/img/done_icon.png" alt="">В корзине
            </template>
            <loader v-else></loader>
          </button>
        </template>
        <span v-else class="picture-item__price-block--not-active">Продана на аукционе</span>
      </div>
    </div>
  </div>
</template>

<script>
    import Loader from './loader.vue'

    export default {
        props: ['picture_data'],
        components: {
            Loader
        },
        data() {
            return {
                loading_button: false
            }
        },
        methods: {
            async addPictureInBasket() {
                this.loading_button = true;
                await this.$store.dispatch('addPictureInBasket', this.picture_data);
                this.loading_button = false;
            },
            async removePictureFromBasket() {
                this.loading_button = true;
                await this.$store.dispatch('removePictureFromBasket', this.picture_data);
                this.loading_button = false;
            }
        },
        filters: {
            filterMoney(x) {
                if (!x) {
                    return 0;
                }
                var parts = x.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                return parts.join(".");
            }
        },
        computed: {
            selectedPictures() {
                return this.$store.getters.getSelectedPictures;
            }
        }
    }
</script>

<style lang="scss">
  $main-color: #343030;

  .picture-item--not-active:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, .4);
    user-select: none;
  }

  .picture-item {
    position: relative;

    .picture-item__img {
      max-width: 100%;
      max-height: 164px;
      overflow: hidden;
    }

    .picture-item__main-info {
      padding: 20px 24px;

      .picture-item__name, .picture-item__author {
        color: $main-color;
        font-size: 18px;
        font-weight: 600;
      }

      .picture-item__action-block {
        height: 48px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        .picture-item__price-block {
          display: flex;
          flex-direction: column;

          .picture-item__price--old {
            font-size: 14px;
            color: #A0A0A0;
            text-decoration: line-through;
          }

          .picture-item__price {
            color: $main-color;
            font-size: 16px;
            font-weight: 600;
          }
        }

        .picture-item__price-block--not-active {
          color: $main-color;
          font-size: 16px;
          font-weight: 600;
        }

        .picture-item__action-button {
          position: relative;
          outline: none;
          background: #382E2B;
          color: #F4F6F9;
          width: 118px;
          height: 48px;
          border: none;
          font-size: 14px;
          cursor: pointer;
          transition: 150ms;
        }

        .picture-item__action-button:not(:disabled):hover {
          background: #776763;
        }
        .picture-item__action-button--selected {
          background: #5B3A32;
          img {
            margin-right: 5px;
          }
        }
        .picture-item__action-button:disabled {
          background: #C1B4B1;
        }
      }
    }
  }
</style>
