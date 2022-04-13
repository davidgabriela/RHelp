import React from "react";
import { Button, Col, FormControl, Row } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

export default function SearchBar() {
    return (
        <>
            <Row>
                <Col md={11}>
                    <InputGroup className='mb-4'>
                        <FormControl
                            placeholder='Destination'
                            aria-label='Destination'
                        />
                        <FormControl
                            placeholder='Check-in'
                            type='date'
                            name='Check-in'
                        />

                        <FormControl
                            placeholder='Check-out'
                            type='date'
                            name='Check-out'
                        />
                        <FormControl placeholder='Guests' aria-label='Guests' />
                        <Button variant='outline-secondary' id='button-addon2'>
                            Search
                        </Button>
                    </InputGroup>
                </Col>
                <Col md={1}>
                    <Button variant='outline-secondary' id='button-addon2'>
                        Filter
                    </Button>
                </Col>
            </Row>
        </>
    );
}
