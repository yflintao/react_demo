import './index.scss'
import React from 'react';
import { Empty } from 'antd';

const Nofound = () => {
    return (
        <div className='pageBox'>
            <Empty imageStyle={{
                       height: 170,
                   }}
                   description={
                       <span className='size_16 c-666'>
                        页面去火星了，有急事请吼叫~
                      </span>
                   }>
            </Empty>
        </div>
    )
}

export default Nofound