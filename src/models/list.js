/*
 * @Author: 寒嫣
 * @Date: 2019-12-27 10:04:30
 * @Description: file content
 */
export default {

  namespace: 'lists',

  state: {
    list:['阿夏']
  },

  effects: {
    *addList({payLoad},{call ,put}){
      // console.log(value)
      // console.log(payLoad)
      yield put({ 
        type: 'add',
        payLoad:payLoad
      });
    }
  },

  reducers: {
    'add'(state,action) {
      // console.log(action)
      return {
        list:[...state.list,action.payLoad],
      }
    }
  },

};


