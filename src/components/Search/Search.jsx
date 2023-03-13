import React from 'react';
import './search.css';
import img1 from '../../img/d1.png';
import img2 from '../../img/d3.png';
import img3 from '../../img/d4.png';
import bg from '../../img//backgraphics.png';

const Search = () => {
    return (
        <div className='search'>
            {/*================== Left Section ==================*/}
            <div className="left">
                <img src={bg} alt="" />
            </div>

            {/*================= Right Section ==================*/}
            <div className="right">
                <input type="text" name="" id="" />
                <div className="img">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Search;