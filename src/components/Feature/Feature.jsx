import React from 'react';

const Feature = (props) => {
    const {icon, title}=props;
    return (
        <div className='feature flex items-center justify-center flex-col relative text-center mx-12'>
            {/* Icon */}
            <div className="icon bg-[#081730] rounded-2xl p-5">
                <img src={require(`../../img/${icon}.png`)} alt="" className='w-[3rem]'/>
            </div>
            <span className="mt-5">{title}</span>
            <span className="text-[#707070] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, porro minus? ncidunt fugit pariatur eos labore omnis.
            </span>

            <span className="text-[#e600ff] underline mt-[3rem] hover:cursor-pointer">
                Learn More
            </span>
        </div>
    );
};

export default Feature;