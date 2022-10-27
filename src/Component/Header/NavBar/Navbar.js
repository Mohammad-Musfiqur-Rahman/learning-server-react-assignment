import Nav from 'react-bootstrap/Nav';

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
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Dark or Light</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Navbar;