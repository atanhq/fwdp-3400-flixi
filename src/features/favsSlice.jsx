import { createSlice } from '@reduxjs/toolkit';
import { appStorageName } from "../globals/globalVariables";

function getFavs() {

    const favs = localStorage.getItem(appStorageName)

    if( favs === null ){
      // if no favs, return empty array
      return {
        items: []
      }
    }else{
      // else parse into js array
      return {
          items: JSON.parse(favs)
      }
    }
}

// store output in const favsFromStorage
const favsFromStorage = getFavs()

// initial state
const initialState = {
    items: favsFromStorage.items
}

// look into array index and find items that return 'true'
function getIndex(item, arr) {
    return arr.findIndex( arrItem => arrItem.id == item.id);
}

export const favsSlice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    addFav: (state, action) => {
      const newFavs = [...state.items, action.payload];
      localStorage.setItem(appStorageName, JSON.stringify(newFavs));
      state.items = newFavs;
    },
    deleteFav: (state, action) => {
      const itemsCopy = state.items;
      itemsCopy.splice(getIndex(action.payload, state.items), 1);
      localStorage.setItem(appStorageName, JSON.stringify(itemsCopy))
      state.items = itemsCopy;
    }
  },
});

export const { addFav, deleteFav } = favsSlice.actions

export default favsSlice.reducer;


