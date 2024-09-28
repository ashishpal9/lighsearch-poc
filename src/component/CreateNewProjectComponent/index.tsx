"use client"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from "next/image";
import icnBack from "../../assets/images/icons/icn-light-back.svg";
import Link from 'next/link';

const CreateNewProject = () => {
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
                <h4 className='page-title'>Create New Project</h4>
                <div className='blank-wrp'></div>



            </div>
            <div className='pt-4 container-md'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className='card site-card mb-4'>
                        <div className='card-body'>
                            <div className='site-form-wrap bg-black'>

                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                        <Form.Label className='site-label'>Project ID*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="First name"
                                            defaultValue="Mark"
                                            className='site-input'
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                        <Form.Label className='site-label'>Project Name*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last name"
                                            defaultValue="Otto"
                                            className='site-input'
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                        <Form.Label className='site-label'>Account Name*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last name"
                                            defaultValue="Otto"
                                            className='site-input'
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                        <div className='inline-field'>
                                            <Form.Label className='site-label text-white mb-0'>Regulated Project</Form.Label>
                                            <div className='inline-radio-checkbox'>
                                                <Form.Check
                                                    type="radio"
                                                    id="yes"
                                                    label="Yes"
                                                    name="radioGroup"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    id="no"
                                                    label="No"
                                                    name="radioGroup"
                                                />
                                            </div>
                                        </div>

                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12">
                                        <Form.Label className='site-label'>Visit IDs</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            className='site-input form-select'>
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12">
                                        <Form.Label className='site-label'>Exam</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            className='site-input form-select'>
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6">
                                        <Form.Label className='site-label'>Group</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            className='site-input form-select'>
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6">
                                        <Form.Label className='site-label'>Anatomy</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            className='site-input form-select'>
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12">
                                        <Form.Label className='site-label'>Index Location</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            className='site-input form-select'>
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12">
                                        <Form.Label className='site-label'>Object type</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            className='site-input form-select'>
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12">
                                        <Form.Label className='site-label'>Analysis</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            className='site-input form-select'>
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>


                            </div>
                        </div>
                    </div>
                    <div className='btn-wrapper justify-content-end'>
                        <Button type="submit" className='theme-btn theme-gray'>Cancel</Button>
                        <Button type="submit" className='theme-btn theme-light'>Create Project</Button>
                    </div>
                </Form>
            </div>

        </>
    );
};

export default CreateNewProject;
