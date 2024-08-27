import React, { FC } from 'react';

const AppWrap = (Component: FC, idName: string, classNames?: string) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <div className='app__wrapper app__flex'>
                <Component />
                <div className='copyright'>
                    <p className='p-text'>@2024 Ronaz Farahmand</p>
                    <p className='p-text'>All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default AppWrap