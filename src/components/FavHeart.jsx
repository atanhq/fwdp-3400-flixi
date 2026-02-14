import isFav from '../assets/icons/favourited.svg';
import notFav from '../assets/icons/not-favourited.svg';

function FavHeart({ movie, remove, handleFavClick }) {

    // function to add to favourites
    function handleAddFav(){
        console.log('add')
        handleFavClick(true, movie);
    }

    // function to remove from favourites
    function handleRemoveFav(){
        handleFavClick(false, movie);
    }

    return (
        <>
            {   remove === false ?
                <div onClick={handleAddFav}>
                    <img src={isFav} alt="is favourited" className="heart-svg"/>
                </div>
                :
                <div onClick={handleRemoveFav}>
                    <img src={notFav} alt="not favourited" className="heart-svg"/>
                </div>
            }
        </>
    );

}


export default FavHeart;