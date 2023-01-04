import React from 'react';
import appStore from '../../img/App Store.png';
import playStore from '../../img/Google Play.png';

const DownloadAds = () => {
    const downloadImgStyle = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem] mr-[1.8rem]'
    return (
        <div className='download'>
            <div className="download_images flex">
                <img src={appStore} alt="" className={downloadImgStyle}/>
                <img src={playStore} alt="" className={downloadImgStyle}/>
            </div>
        </div>
    );
};

export default DownloadAds;