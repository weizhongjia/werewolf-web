import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    seats: [
      {no: 1, role: 'werewolf', alive: true, uid: 1, headImg: 'http://img4.imgtn.bdimg.com/it/u=3169580764,676396808&fm=214&gp=0.jpg'},
      {no: 2, role: 'werewolf', alive: true, uid: 2, headImg: 'http://img4.imgtn.bdimg.com/it/u=3169580764,676396808&fm=214&gp=0.jpg'},
      {no: 3, role: 'werewolf', alive: true, uid: 3, headImg: 'http://img4.imgtn.bdimg.com/it/u=3169580764,676396808&fm=214&gp=0.jpg'},
      {no: 4, role: 'werewolf', alive: true, uid: 4, headImg: 'http://img4.imgtn.bdimg.com/it/u=3169580764,676396808&fm=214&gp=0.jpg'},
      {no: 5, role: 'villager', alive: true, uid: 5, headImg: 'http://img4.imgtn.bdimg.com/it/u=3169580764,676396808&fm=214&gp=0.jpg'},
      {no: 6, role: 'villager', alive: true, uid: 6, headImg: 'http://img4.imgtn.bdimg.com/it/u=3169580764,676396808&fm=214&gp=0.jpg'},
      {no: 7, role: 'villager', alive: true, uid: 7, headImg: 'http://img4.imgtn.bdimg.com/it/u=3169580764,676396808&fm=214&gp=0.jpg'},
      {no: 8, role: 'villager', alive: true, uid: 8, headImg: 'http://img4.imgtn.bdimg.com/it/u=3169580764,676396808&fm=214&gp=0.jpg'},
      {no: 9, role: 'seer', alive: true, uid: 9, headImg: 'http://img4.imgtn.bdimg.com/it/u=3169580764,676396808&fm=214&gp=0.jpg'},
      {no: 10, role: 'witch', alive: true, uid: 10, headImg: 'http://img4.imgtn.bdimg.com/it/u=3169580764,676396808&fm=214&gp=0.jpg'},
      {no: 11, role: 'hunter', alive: true, uid: 11, headImg: 'http://img4.imgtn.bdimg.com/it/u=3169580764,676396808&fm=214&gp=0.jpg'},
      {no: 12, role: 'moron', alive: true, uid: 12, headImg: 'http://img4.imgtn.bdimg.com/it/u=3169580764,676396808&fm=214&gp=0.jpg'}
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
