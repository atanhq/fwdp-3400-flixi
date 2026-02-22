import isFav from "../assets/icons/favourited.svg";
import notFav from "../assets/icons/not-favourited.svg";

function FavHeart({ movie, remove, handleFavClick }) {

    function handleAddFav(){
        handleFavClick(true, movie);
    }

    function handleRemoveFav(){
        handleFavClick(false, movie);
    }

    return (
        <>
            {   remove === false ?
                <div onClick={handleAddFav}>
                    <img src={notFav} alt="not favourited" className="heart-svg"/>
                </div>
                :
                <div onClick={handleRemoveFav}>
                    <img src={isFav} alt="is favourited" className="heart-svg"/>
                </div>
            }
        </>
    );
}

FavHeart.defaultProps = {
    remove: false
}

export default FavHeart;