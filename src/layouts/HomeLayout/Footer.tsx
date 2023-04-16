import React, { FC, PropsWithChildren } from 'react';

const Footer:FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='bg-gray-200 min-h-[80px]'>
            Footer
        </div>
    );
};

export default Footer;