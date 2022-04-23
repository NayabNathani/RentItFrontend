import React, { useState } from 'react';
import './SearchResult.css';
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import StarIcon from "@material-ui/icons/Star";
// import { useHistory } from 'react-router-dom';

function SearchResult({
    id,
    img,
    location,
    title,
    description,
    hearts,
    price,
    total,
}) {
    // const history = useHistory();
    const [state, setState] = useState({
        id: id,
        img: img,
        location: location,
        title: title,
        description: description, 
        hearts: hearts,
        price: price,
        total: total
    })
    console.log(id);
    // const handleOnSubmit = () => {
    //     console.log(history);
    //     history.push('/booking/' + id);
    //     console.log(id);
    //     // '/booking/' + id
    // };
    return (
        <>
        <div class='divBoxPos'>
                <div className='searchResult' >
            {/* onClick = {handleOnSubmit} */}
            <img src={img} alt="" />
            {/* onClick = {handleOnSubmit} */}
            {/* <div className="searchResult__hearts">
                <FavoriteBorderIcon className='searchResult_heart' />
                <p>
                    <strong>{5}</strong>
                </p>
            </div>     */}
            

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    {/* <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div> */}
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>

    )
}

export default SearchResult