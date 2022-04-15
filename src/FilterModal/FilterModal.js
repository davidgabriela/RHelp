import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

export default function FilterModal(props) {
    const [typePlace, setTypePlace] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [aidingfacilities, setAidingfacilities] = useState([]);

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
                            <spam>
                                <b>Type of place</b>
                            </spam>
                        </Form.Label>
                        <Row>
                            <Col>
                                <Form.Check
                                    type='checkbox'
                                    label='Entire place'
                                />
                                <Form.Check
                                    type='checkbox'
                                    label='Hotel room'
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    type='checkbox'
                                    label='Private room'
                                />
                                <Form.Check
                                    type='checkbox'
                                    label='Shared room'
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='formBasicCheckbox'>
                        <Form.Label>
                            <spam>
                                <b>Amenities</b>
                            </spam>
                        </Form.Label>
                        <Row>
                            <Col>
                                <Form.Check type='checkbox' label='Kitchen' />
                                <Form.Check
                                    type='checkbox'
                                    label='Air conditioning'
                                />
                                <Form.Check type='checkbox' label='Wi-fi' />
                                <Form.Check type='checkbox' label='TV' />
                            </Col>
                            <Col>
                                <Form.Check type='checkbox' label='Washer' />
                                <Form.Check type='checkbox' label='Iron' />
                                <Form.Check type='checkbox' label='Dryer' />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='formBasicCheckbox'>
                        <Form.Label>
                            <spam>
                                <b>Aiding services</b>
                            </spam>
                        </Form.Label>
                        <Row>
                            <Col>
                                <Form.Check type='checkbox' label='Kitchen' />
                                <Form.Check
                                    type='checkbox'
                                    label='Medical care'
                                />
                            </Col>
                            <Col>
                                <Form.Check type='checkbox' label='Food' />
                                <Form.Check type='checkbox' label='Transport' />
                                <Form.Check
                                    type='checkbox'
                                    label='Psychological support'
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button>Show results</Button>
            </Modal.Footer>
        </Modal>
    );
}
