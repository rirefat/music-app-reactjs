import React from 'react';
import DownloadAds from '../DownloadAds/DownloadAds';

const HeroSection = () => {
    return (
        <div className='wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative'>
            {/*==================== left side ====================*/}
            <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
                <span>Experience The</span>
                <span>
                    <b>Best Quality Music</b>
                </span>
                <span className="text-[15px] text-[#525D6E]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas <br />
                    ipsam iure obcaecati sapiente, debitis omnis?
                </span>

                {/*================ Download Ads ================*/}
                <div>
                    <span className="text-[13px]">
                        Download now on IOS and Android
                        <DownloadAds></DownloadAds>
                    </span>
                </div>
            </div>

            {/*==================== right side ====================*/}
            <div className="images relative w-[50%]">
                <img src={require('../../img/backgraphics.png')} alt="" className='mockup absolute top-[-8rem] left-[19rem]'/>

                <img src={require('../../img/p 1.png')} alt="" className='absolute top-[-15rem] left-[13rem] h-[34rem]'/>

                <img src={require('../../img/p 2.png')} alt="" className='absolute top-[94px] left-[235px] w-[175px]'/>

                <img src={require('../../img/p 3.png')} alt="" className='absolute top-[12rem] left-[13rem] w-[5rem]'/>

                <img src={require('../../img/p 4.png')} alt="" className='absolute top-[12rem] left-[12.5rem] w-[5rem]'/>

            </div>
        </div>
    );
};

export default HeroSection;