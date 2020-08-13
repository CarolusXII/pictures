import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pictures: [
      {
        id: 0,
        img: 'static/img/painting-63186_1280 1.png',
        name: 'Рождение Венеры',
        author: 'Сандро Боттичелли',
        old_price: 2000000,
        price: 1000000,
        active: true
      },
      {
        id: 1,
        img: 'static/img/ae973f6678e037cd297053384aa7dca0 1.png',
        name: 'Тайная вечеря',
        author: 'Леонардо да Винчи',
        old_price: '',
        price: 3000000,
        active: true
      },
      {
        id: 2,
        img: 'static/img/image-19 1.png',
        name: 'Сотворение Адама',
        author: 'Микеланджело',
        old_price: 6000000,
        price: 5000000,
        active: true
      },
      {
        id: 3,
        img: 'static/img/20152310142330 1.png',
        name: 'Урок анатомии',
        author: 'Рембрандт',
        old_price: 2000000,
        price: 1000000,
        active: false
      }
    ],
    search_val: '',
    selected_pictures: []
  },
  mutations: {
    setSearchVal(state, val) {
      state.search_val = val;
    }
  },
  actions: {
    setLS: ({state}) => {
      localStorage.setItem('selected_pictures', JSON.stringify(state.selected_pictures));
    },
    getLS: ({state}) => {
      return new Promise(resolve => {
        let data_from_ls = JSON.parse(localStorage.getItem('selected_pictures'));
        if (data_from_ls && data_from_ls.length) {
          state.selected_pictures = data_from_ls;
        }
        resolve(state.selected_pictures);
      })
    },
    addPictureInBasket: async ({dispatch, state}, picture_data) => {
      await dispatch('fakeRequest')
        .then(() => {
          state.selected_pictures.push(picture_data);
          dispatch('setLS');
        })
        .catch(() => {

        })
    },
    removePictureFromBasket: async ({dispatch, state}, picture_data) => {
      await dispatch('fakeRequest')
        .then(() => {
          state.selected_pictures = state.selected_pictures.filter(i => i.id !== picture_data.id);
          dispatch('setLS');
        })
        .catch(() => {

        })
    },
    fakeRequest: () => {
      return new Promise((resolve, reject) => {
        axios.get('https://reqres.in/api/products/3')
          .then(response => {
            if (response.data.data) {
              setTimeout(() => {
                resolve(response.data.data);
              }, 1500)
            } else {
              reject('Данные отсутствуют');
            }
          })
          .catch(e => {
            reject(e);
          })
      })
    }
  },
  getters: {
    getPicturesData: (state) => {
      return state.pictures;
    },
    getSearchVal: (state) => {
      return state.search_val;
    },
    getSelectedPictures: (state) => {
      return state.selected_pictures;
    }
  }
})
