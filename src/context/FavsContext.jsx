import { appStorageName } from "../globals/globalVariables";

function getFavs() {

    const storageFavs = localStorage.getItem(appStorageName)

    // if no favs in local storage
    if( storageFavs === null ) {
        // return empty array
        return {
            items: []
        }
    }else {
        // else parse into js obj
        return {
            items: JSON.parse(storageFavs)
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
function getIndex(item, arr ) {
    return arr.findIndex( arrItem => arrItem.id == item.id);
}

