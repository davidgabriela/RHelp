import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

export default function FilterModal(props) {
    const [typePlace, setTypePlace] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [aidingfacilities, setAidingfacilities] = useState([]);

    const filterResults = () => {
        props.filterData(typePlace, amenities, aidingfacilities);
    };

    const handleChange = (e, state, setter) => {
        if (e.target.checked === true) {
            setter([...state, e.target.value]);
        } else {
            setter(state.filter((item) => item !== e.target.value));
        }
    };

    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    More Filters
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-4' controlId='formBasicCheckbox'>
                        <Form.Label>
                            <span>
                                <b>Type of place</b>
                            </span>
                        </Form.Label>
                        <Row>
                            <Col>
                                <Form.Check
                                    value='Entire space'
                                    onChange={(event) => {
                                        handleChange(
                                            event,
                                            typePlace,
                                            setTypePlace
                                        );
                                    }}
                                    type='checkbox'
                                    label='Entire space'
                                />
                                <Form.Check
                                    value='Hotel room'
                                    onChange={(event) => {
                                        handleChange(
                                            event,
                                            typePlace,
                                            setTypePlace
                                        );
                                    }}
                                    type='checkbox'
                                    label='Hotel room'
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    value='Private room'
                                    onChange={(event) => {
                                        handleChange(
                                            event,
                                            typePlace,
                                            setTypePlace
                                        );
                                    }}
                                    type='checkbox'
                                    label='Private room'
                                />
                                <Form.Check
                                    value='Shared room'
                                    onChange={(event) => {
                                        handleChange(
                                            event,
                                            typePlace,
                                            setTypePlace
                                        );
                                    }}
                                    type='checkbox'
                                    label='Shared room'
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='formBasicCheckbox'>
                        <Form.Label>
                            <span>
                                <b>Amenities</b>
                            </span>
                        </Form.Label>
                        <Row>
                            <Col>
                                <Form.Check
                                    value='Kitchen'
                                    onChange={(event) => {
                                        handleChange(
                                            event,
                                            amenities,
                                            setAmenities
                                        );
                                    }}
                                    type='checkbox'
                                    label='Kitchen'
                                />
                                <Form.Check
                                    value='Air conditioning'
                                    onChange={(event) => {
                                        handleChange(
                                            event,
                                            amenities,
                                            setAmenities
                                        );
                                    }}
                                    type='checkbox'
                                    label='Air conditioning'
                                />
                                <Form.Check
                                    value='Wi-fi'
                                    onChange={(event) => {
                                        handleChange(
                                            event,
                                            amenities,
                                            setAmenities
                                        );
                                    }}
                                    type='checkbox'
                                    label='Wi-fi'
                                />
                                <Form.Check
                                    value='TV'
                                    onChange={(event) => {
                                        handleChange(
                                            event,
                                            amenities,
                                            setAmenities
                                        );
                                    }}
                                    type='checkbox'
                                    label='TV'
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    value='Washer'
                                    onChange={(event) => {
                                        handleChange(
                                            event,
                                            amenities,
                                            setAmenities
                                        );
                                    }}
                                    type='checkbox'
                                    label='Washer'
                                />
                                <Form.Check
                                    value='Iron'
                                    onChange={(event) => {
                                        handleChange(
                                            event,
                                            amenities,
                                            setAmenities
                                        );
                                    }}
                                    type='checkbox'
                                    label='Iron'
                                />
                                <Form.Check
                                    value='Dryer'
                                    onChange={(event) => {
                                        handleChange(
                                            event,
                                            amenities,
                                            setAmenities
                                        );
                                    }}
                                    type='checkbox'
                                    label='Dryer'
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='formBasicCheckbox'>
                        <Form.Label>
                            <span>
                                <b>Aiding services</b>
                            </span>
                        </Form.Label>
                        <Row>
                            <Col>
                                <Form.Check
                                    value='Medical care'
                                    onChange={(event) => {
                                        handleChange(
                                            event,
                                            aidingfacilities,
                                            setAidingfacilities
                                        );
                                    }}
                                    type='checkbox'
                                    label='Medical care'
                                />
                                <Form.Check
                                    value='Food'
                                    onChange={(event) => {
                                        handleChange(
                                            event,
                                            aidingfacilities,
                                            setAidingfacilities
                                        );
                                    }}
                                    type='checkbox'
                                    label='Food'
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    value='Transport'
                                    onChange={(event) => {
                                        handleChange(
                                            event,
                                            aidingfacilities,
                                            setAidingfacilities
                                        );
                                    }}
                                    type='checkbox'
                                    label='Transport'
                                />
                                <Form.Check
                                    value='Psychological support'
                                    onChange={(event) => {
                                        handleChange(
                                            event,
                                            aidingfacilities,
                                            setAidingfacilities
                                        );
                                    }}
                                    type='checkbox'
                                    label='Psychological support'
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={filterResults}>Show results</Button>
            </Modal.Footer>
        </Modal>
    );
}
