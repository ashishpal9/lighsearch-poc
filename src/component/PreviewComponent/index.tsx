"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
 
import icnMenu from "../../assets/images/icons/icn-menu.svg";
 

const Preview = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [canvasShow, setCanvasShow] = useState(false);
    const handleCloseCanvas = () => setCanvasShow(false);
    const handleCanvasShow = () => setCanvasShow(true);

    return (
        <>
            <div className='top-bar'>
                <h4 className='page-title'>Preview</h4>
            </div>
            <div className='pt-4 container-md w-50'>
                <ul className='preview-list'>
                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/projects" className='back-link'>
                            Projects
                        </Link>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/projects-details" className='back-link'>
                            Projects details
                        </Link>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/project-detail-site-detail" className='back-link'>
                            project detail (site detail)
                        </Link>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/subject-detail" className='back-link' target='_blank'>
                            subject detail
                        </Link>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/time-based-analysis" className='back-link' target='_blank'>
                            Analyst Assigned
                        </Link>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/create-visit" className='back-link' target='_blank'>
                            Create Visit
                        </Link>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/visit-detail" className='back-link' target='_blank'>
                            Visit Detail
                        </Link>
                    </li>

                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/flex-bending-analysis" className='back-link' target='_blank'>
                            flex bending analysis
                        </Link>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/flex-ext-analysis" className='back-link' target='_blank'>
                            flex-ext-analysis
                        </Link>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/perform-bending-analysis" className='back-link' target='_blank'>
                            perform bending analysis
                        </Link>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/time-based-analysis-created" className='back-link' target='_blank'>
                            time based analysis created
                        </Link>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/find-analysis-images" className='back-link' target='_blank'>
                            find analysis images
                        </Link>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/find-analysis-images-two" className='back-link' target='_blank'>
                            find analysis images two
                        </Link>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/user-management" className='back-link' target='_blank'>
                            user management
                        </Link>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/create-new-user" className='back-link' target='_blank'>
                            create new user
                        </Link>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/create-new-project" className='back-link' target='_blank'>
                            create new project
                        </Link>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <Link href="/create-new-user" className='back-link' target='_blank'>
                            inventory
                        </Link>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        Modal
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <button className='theme-btn theme-dark' onClick={handleShow}> Create Your First Project</button>
                    </li>
                    <li className='border-bottom pb-2 mb-3'>
                        <Button variant="primary" onClick={handleCanvasShow} className="me-2">
                            Nick Furry Offcanvas
                        </Button>
                    </li>
                </ul>
            </div>
            <Modal show={show} onHide={handleClose} backdrop="static" centered size="lg" className='site-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Site</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group className='site-input-group'>
                            <Form.Label className='site-label'>Site ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Site ID"
                                className='site-input'
                            />
                        </Form.Group>
                        <Form.Group className='site-input-group'>
                            <Form.Label className='site-label'>Site Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Site Name"
                                className='site-input'
                            />
                        </Form.Group>
                        <Form.Group className='site-input-group'>
                            <Form.Label className='site-label'>Site PI</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Site PI"
                                className='site-input'
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose} className='theme-btn theme-gray'>
                        Cancel
                    </button>
                    <button onClick={handleClose} className='theme-btn theme-light'>
                        Create Site
                    </button>
                </Modal.Footer>
            </Modal>
            <Offcanvas show={canvasShow} onHide={handleCloseCanvas} className="site-offcanvas " placement="end">
                <Offcanvas.Header closeButton className='p-0'>

                </Offcanvas.Header>
                <Offcanvas.Body className='p-0 site-flex-col'>
                    <div className='top-canvas-wrapper'>
                        <div className='card site-card mb-2'>
                            <div className='card-body'>
                                <div className='info-wrapper'>
                                    <div className='info-left'>
                                        <h5 className='mb-0'>Nick Furry 03-5</h5>
                                        <div className='info-title-value'><span className='info-title text-white-o6'>Subject</span></div>
                                    </div>

                                    <div className='info-right'>
                                        <div className='info-list-btns'>
                                            <button className='theme-btn theme-black100 '>
                                                Jose Harrington
                                            </button>
                                            <button className='theme-btn theme-black100'>
                                                Control
                                            </button>
                                            <button className='theme-btn theme-black100'>
                                                L4-L5
                                            </button>
                                            <Dropdown className='site-dropdown'>
                                                <Dropdown.Toggle id="dropdown-basic" variant='link'>
                                                    <Image src={icnMenu} alt='Icon Menu' />
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <Table responsive className='site-table text-nowrap'>
                            <thead>
                                <tr>
                                    <th>Visit ID</th>
                                    <th>Exam</th>
                                    <th>No of images</th>
                                    <th>Last updated</th>
                                    <th>Visit date</th>
                                    <th className='th-w-50'>&nbsp;</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3 Months</td>
                                    <td>XR</td>
                                    <td>03</td>
                                    <td>04/20/2024</td>
                                    <td>12/21/2024</td>
                                    <td>
                                        <Dropdown className='site-dropdown'>
                                            <Dropdown.Toggle id="dropdown-basic" variant='link'>
                                                <Image src={icnMenu} alt='Icon Menu' />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3 Months</td>
                                    <td>XR</td>
                                    <td>03</td>
                                    <td>04/20/2024</td>
                                    <td>12/21/2024</td>
                                    <td>
                                        <Dropdown className='site-dropdown'>
                                            <Dropdown.Toggle id="dropdown-basic" variant='link'>
                                                <Image src={icnMenu} alt='Icon Menu' />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3 Months</td>
                                    <td>XR</td>
                                    <td>03</td>
                                    <td>04/20/2024</td>
                                    <td>12/21/2024</td>
                                    <td>
                                        <Dropdown className='site-dropdown'>
                                            <Dropdown.Toggle id="dropdown-basic" variant='link'>
                                                <Image src={icnMenu} alt='Icon Menu' />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3 Months</td>
                                    <td>XR</td>
                                    <td>03</td>
                                    <td>04/20/2024</td>
                                    <td>12/21/2024</td>
                                    <td>
                                        <Dropdown className='site-dropdown'>
                                            <Dropdown.Toggle id="dropdown-basic" variant='link'>
                                                <Image src={icnMenu} alt='Icon Menu' />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3 Months</td>
                                    <td>XR</td>
                                    <td>03</td>
                                    <td>04/20/2024</td>
                                    <td>12/21/2024</td>
                                    <td>
                                        <Dropdown className='site-dropdown'>
                                            <Dropdown.Toggle id="dropdown-basic" variant='link'>
                                                <Image src={icnMenu} alt='Icon Menu' />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>


                            </tbody>
                        </Table>
                    </div>
                    <div className='bottom-canvas-wrapper'>
                        <div className="card site-card mb-3">
                            <div className="card-body">
                                <div className="info-wrapper">
                                    <div className="info-left">
                                        <h5 className="mb-0">PreOp</h5>
                                        <div className="info-title-value">
                                            <span className="info-title text-white-o6">Visit</span>
                                        </div>
                                    </div>

                                    <div className="info-right">
                                        <button className="theme-btn theme-black100">
                                            <span className="info-title text-white-o6">01/01/2024</span>
                                        </button>
                                        <Dropdown className='site-dropdown'>
                                            <Dropdown.Toggle id="dropdown-basic" variant='link'>
                                                <Image src={icnMenu} alt='Icon Menu' />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="xr_exam">
                            <ul className='info-list-border'>

                                <li className="xr_examflex">
                                    <div className="exam_head_left text-white">Flex Ext analysis</div>
                                    <div className="exam_head_right">
                                        <div className="info-right">
                                            <button className="theme-btn theme-light theme-btn-sm">
                                                Perform
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li className="xr_examflex">
                                    <div className="exam_head_left text-white">L-R Bending analysis</div>
                                    <div className="exam_head_right">
                                        <div className="info-right">
                                            <button className="theme-btn theme-light theme-btn-sm">
                                                Perform
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Preview;
