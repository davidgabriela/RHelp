import React, { useRef, useState } from "react";
import { Button, Col, Form, FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FilterModal from "../FilterModal/FilterModal";
import "./SearchBar.css";

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
            <div className='container'>
                <Col md={8}>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className='mb-4'>
                            <FormControl
                                placeholder='Destination'
                                aria-label='Destination'
                                ref={locationRef}
                            />
                            <FormControl
                                placeholder='Guests'
                                aria-label='Guests'
                                ref={guestsRef}
                            />
                            <Button
                                type='submit'
                                variant='outline-primary'
                            >
                                Search
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
                <Col md={1}>
                    <Button
                        variant='outline-primary'
                        id='button-addon2'
                        onClick={() => setModalShow(true)}
                    >
                        Filter
                    </Button>
                </Col>
                <FilterModal
                    filterData={props.filterData}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                ></FilterModal>
            </div>
        </>
    );
}
