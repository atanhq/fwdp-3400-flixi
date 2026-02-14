import isFav from '../assets/icons/favourited.svg';
import notFav from '../assets/icons/not-favourited.svg';

function FavHeart({ movie, remove = false, handleFavClick }) {

    console.log({ remove })

    // function to add to favourites
    function handleAddFav(){
        console.log('add')
        handleFavClick(movie, false);
    }

    // function to remove from favourites
    function handleRemoveFav(){
        handleFavClick(movie, true);
    }

    return (
        <>
            {   remove === false ?
                <div onClick={handleAddFav}>
                    <img src={isFav} alt="is favourited"/>
                </div>
                :
                <div onClick={handleRemoveFav}>
                    <img src={notFav} alt="not favourited"/>
                </div>
            }
        </>
    );

}

export default FavHeart;