import Nav from 'react-bootstrap/Nav';
import ToggleButtonExample from '../../Button/Button';

function Navbar() {
    return (
        <div className='fs-4'>
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/login">login</Nav.Link>
                </Nav.Item>
            </Nav>
            <ToggleButtonExample></ToggleButtonExample>
        </div>
    );
}

export default Navbar;