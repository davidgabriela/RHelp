import React, { useRef, useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FilterModal from "../FilterModal/FilterModal";

export default function SearchBar(props) {
    const locationRef = useRef();
    const checkInRef = useRef();
    const checkOutRef = useRef();
    const guestsRef = useRef();
    const [modalShow, setModalShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSearch(locationRef.current.value, guestsRef.current.value);
    };

    return (
        <>
            <Row>
                <Col md={11}>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className='mb-4'>
                            <FormControl
                                placeholder='Destination'
                                aria-label='Destination'
                                ref={locationRef}
                            />
                            <FormControl
                                placeholder='Check-in'
                                type='date'
                                name='Check-in'
                                ref={checkInRef}
                            />
                            <FormControl
                                placeholder='Check-out'
                                type='date'
                                name='Check-out'
                                ref={checkOutRef}
                            />
                            <FormControl
                                placeholder='Guests'
                                aria-label='Guests'
                                ref={guestsRef}
                            />
                            <Button
                                type='submit'
                                variant='outline-secondary'
                                id='button-addon2'
                            >
                                Search
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
                <Col md={1}>
                    <Button
                        variant='outline-secondary'
                        id='button-addon2'
                        onClick={() => setModalShow(true)}
                    >
                        Filter
                    </Button>
                </Col>
                <FilterModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                ></FilterModal>
            </Row>
        </>
    );
}
