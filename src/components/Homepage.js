import React, {useState} from 'react'
import './Homepage.css'
function Homepage() {

    const [headerText, setHeaderText] = useState('Where to?');
    const [searchText, setSearchText] = useState("Places to go, things to do, hotels...");

    const handleHeaderText = (htext, stext) => () => {
        setHeaderText(htext);
        setSearchText(stext);
    };
    
    return (
        <div>
            <div className='header my-4'>{headerText}</div>
            <div className='items'>
                <div className='item mx-4' onClick={handleHeaderText("Where to?", "Places to go, things to do, hotels...")}><i className="fa-solid fa-house mx-2"></i>Search All</div>
                <div className='item mx-4' onClick={handleHeaderText("Stay somewhere great", 'Hotel name or destination')}><i className="fa-solid fa-hotel mx-2"></i>Hotels</div>
                <div className='item mx-4' onClick={handleHeaderText("Do something fun", 'Activity, attraction or destination')}><i className="fa-solid fa-calendar-days mx-2"></i>Things to do</div>
                <div className='item mx-4' onClick={handleHeaderText("Find places to eat", 'Restaurant name or destination')}><i className="fa-solid fa-utensils mx-2"></i>Restaurants</div>
            </div>
            <div className='search-bar my-4'>
                <input type="text" className="search-input" placeholder= {searchText}/>
                <button className='search-button'><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
    )
}

export default Homepage
