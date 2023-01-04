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
            <div className="images">
                images
            </div>
        </div>
    );
};

export default HeroSection;