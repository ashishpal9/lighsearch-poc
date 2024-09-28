"use client"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from "next/image";
import icnBack from "../../assets/images/icons/icn-light-back.svg";
import icnLightClose from "../../assets/images/icons/icn-light-close.svg";
import Link from 'next/link';

const CreateVisit = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
            <div className='top-bar'>

                <Link href="/projects" className='back-link'>
                    <Image src={icnBack} alt="user_avtar" />
                </Link>
                <h4 className='page-title'>Create Visit</h4>
                <div className='blank-wrp'></div>



            </div>
            <div className='pt-4 container-md'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className='card site-card mb-4'>
                        <div className='card-body'>
                            <div className='site-form-wrap bg-black'>

                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6">
                                        <Form.Label className='site-label'>Visit ID</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            className='site-input form-select'>
                                            <option>Please select</option>
                                            <option value="1">PostOp</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6">
                                        <Form.Label className='site-label'>Visit Date</Form.Label>
                                        <Form.Control
                                            className='site-input' type='date' placeholder='Visit Date'>
                                        </Form.Control>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12">
                                        <Form.Label className='site-label'>Exam</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            className='site-input form-select'>
                                            <option>Select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row> 

                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6">
                                        <Form.Label className='site-label'>Tag Views</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            className='site-input form-select'>
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className='align-self-end'>
                                        <div className='theme-btn theme-gray justify-content-between w-100 d-flex'>
                                            Exampleimg45.jpg <Image src={icnLightClose} alt='Icon close' className='w-10' />
                                        </div>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6">
                                        <Form.Label className='site-label'>Tag Views</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            className='site-input form-select'>
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className='align-self-end'>
                                        <div className='theme-btn theme-gray justify-content-between w-100 d-flex'>
                                            joint45.jpg <Image src={icnLightClose} alt='Icon close' className='w-10' />
                                        </div>
                                    </Form.Group>
                                </Row>

                            </div>
                        </div>
                    </div>
                    <div className='btn-wrapper justify-content-end'>
                        <Button type="submit" className='theme-btn theme-gray'>Cancel</Button>
                        <Button type="submit" className='theme-btn theme-light'>Create Visit</Button>
                    </div>
                </Form>
            </div>

        </>
    );
};

export default CreateVisit;
