import React from 'react';
import './CenterMenu.css';

const CenterMenu = () => {
    const listStyle = "mr-[3rem] hover:cursor-pointer"
    return (
        <div className="menu flex ">
            <ul className='flex justify-between w-[100%] text-white'>
                <li className={listStyle}>Home</li>
                <li className={listStyle}>About</li>
                <li className={listStyle}>Performer</li>
                <li className={listStyle}>Event Schedule</li>
            </ul>
        </div>
    );
};

export default CenterMenu;