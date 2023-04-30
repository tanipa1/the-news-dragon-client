import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import './RightNav.css';
import QZone from '../QZone/QZone';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
import bg from '../../../assets/bg1.png';


const RightNav = () => {
    return (
        <div className='mt-5'>
            <div>
                <h4 className='text-secondary-emphasis'>Login With</h4>
                <Button className='' variant="outline-primary"> <FaGoogle /> Login With Google</Button>{' '}
                <Button className='mt-2 px-3' variant="outline-secondary"> <FaGithub /> Login With  Github  </Button>{' '}
            </div>
            <div className='mt-4'>
                <h4 className='text-secondary-emphasis'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-4 qzone'>
                <QZone></QZone>
            </div>
            <div className='mt-4 bg'>
                <img src={bg} alt=""/>
            </div>
        </div>
    );
};

export default RightNav;