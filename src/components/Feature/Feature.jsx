import React from 'react';

const Feature = (props) => {
    const {icon, title}=props;
    return (
        <div className='feature'>
            {/* Icon */}
            <div className="icon">
                <img src={require(`../../img/${icon}.png`)} alt="" className='w-[3rem]'/>
            </div>
            <span className="mt-5">{title}</span>
        </div>
    );
};

export default Feature;