import React from 'react';
import './Header.css';
import logo from '../../img/MuzicLogo.png';
import CenterMenu from '../CenterMenu/CenterMenu';

const Header = () => {
    const buttonStyle ="border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px] hover:bg-[#232A4E]"
    return (
        <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[1rem]">
            <img src={logo} alt="logo" className='logo w-[42px] h-[42px]'/>
            <CenterMenu></CenterMenu>

            <div className="buttons flex">
                <button className={`mr-[25px] ` + buttonStyle}>Sign up</button>
                <button className={`bg-[#232A4E] hover:bg-[#081730] ` + buttonStyle}>Log in</button>
            </div>
        </div>
    );
};

export default Header;