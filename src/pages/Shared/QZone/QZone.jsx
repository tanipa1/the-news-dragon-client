import React from 'react';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div>
            <h4 className='text-secondary'>Q-Zone</h4>
            <img width={220} src={qzone1} alt="" />
            <img width={220} src={qzone2} alt="" />
            <img width={220} src={qzone3} alt="" />
        </div>
    );
};

export default QZone;