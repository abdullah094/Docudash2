import {createSlice} from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todo',

  initialState: {
    _name: 'abdullah',
    accessToken: '',
    testing: 'testing',
    docs: [],
    wishList: [],
  },

  reducers: {
    addItem(state = null, action) {
      const value = action.payload;

      state.docs.push(value);
      //    console.log(state.docs)
    },
    getItem(state = null, action) {
      console.log('getItem');
    },
  },
});

export const {addItem, getItem} = todosSlice.actions;
export default todosSlice.reducer;
