import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-1' >
                        <p style={{ fontWeight: 450 }}>SidStore &copy; {currentYear} | All rights reserved</p>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer