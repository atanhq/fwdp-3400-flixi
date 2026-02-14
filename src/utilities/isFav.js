function isFav(arr, id){

    if(arr.length === 0){
      return false;
    }
    
    return arr.some((obj) => obj.id === id);

}

export default isFav;