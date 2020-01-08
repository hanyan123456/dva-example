/*
 * @Author: 寒嫣
 * @Date: 2019-12-27 10:04:30
 * @Description: file content
 */
export default {

  namespace: 'add',

  state: {
    count: 100
  },

  effects: {
    *addCount(action,{call ,put}){
      console.log(action)
      // yield call(delay, 1000);
      yield put({ type: 'increase' });
    },
    *reduceCount(action,{call ,put}){
      console.log(action)
      // yield call(delay, 1000);
      yield put({ type: 'reduce' });
    }
  },

  reducers: {
    'increase'(state) {
      console.log(state)
      return {
        count: state.count + 1
      }
    },

    'reduce'(state) {
      return {
        count: state.count - 1
      }
    }
  },

};
