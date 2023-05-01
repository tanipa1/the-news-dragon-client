import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center mt-4'>
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex px-3 py-2 mb-4 bg-light'>
                <Button variant="danger">Latest</Button>{' '}
                <Marquee speed={50} pauseOnHover>
                    I can be a React component, multiple React components, or just some text...|| I can be a React component, multiple React components, or just some text...||
                    I can be a React component, multiple React components, or just some text...|| I can be a React component, multiple React components, or just some text...||
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;