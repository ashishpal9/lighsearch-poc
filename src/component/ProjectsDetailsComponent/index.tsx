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
import icnBack from "../../assets/images/icons/icn-light-back.svg";
import icnProject from "../../assets/images/icons/icn-project.png";
import icnLightCalendar from "../../assets/images/icons/icn-light-calendar.svg";
import icnLightEdit from "../../assets/images/icons/icn-light-edit.svg";
import icnSearch from "../../assets/images/icons/icn-search.png";
import icnMenu from "../../assets/images/icons/icn-menu.svg";
import icnLightDropdown from "../../assets/images/icons/icn-select-drodown.png";
import icnLightPlus from "../../assets/images/icons/icn-light-plus.svg";


const ProjectsDetails = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [canvasShow, setCanvasShow] = useState(false);
    const handleCloseCanvas = () => setCanvasShow(false);
    const handleCanvasShow = () => setCanvasShow(true);

    return (
        <>

            <div className='top-bar'>
                <Link href="/projects" className='back-link'>
                    <Image src={icnBack} alt="user_avtar" />
                </Link>
                <h4 className='page-title'>Project Detail</h4>
                <div className='blank-wrp'></div>
            </div>
            <div className='pt-4'>
                <div className='card site-card mb-3'>
                    <div className='card-body'>
                        <div className='dark-card mb-2'>
                            <div className='info-wrapper'>
                                <div className='info-left'>
                                    <h5 className='mb-2'>Advanced Cardio Study 2025</h5>
                                    <div className='info-title-value'><span className='info-title text-white-o6'>Project ID:</span> <span className='info-value'>002</span></div>
                                </div>
                                <div className='info-middle'>
                                    <button className='theme-btn theme-gray'>Regulated Project</button>
                                    <button className='theme-btn theme-gray inline-flex items-center'>
                                        <Image src={icnLightCalendar} alt='icnLightCalendar' /> <span className='info-title text-white-o6'>Created Date:</span> <span className='info-value'>October 1, 2024</span>
                                    </button>
                                </div>
                                <div className='info-right'>
                                    <button className='theme-btn theme-gray inline-flex items-center'>
                                        <Image src={icnLightEdit} alt='icnLightEdit' /> Edit
                                    </button>

                                </div>
                            </div>
                        </div>
                        <Row className='mb-2'>
                            <Col md="6">
                                <div className='info-title-value info-border'>
                                    <span className='info-title text-white-o6'>Visit ID:</span>
                                    <span className='info-value text-white-o6'>PreOp, PostOp, 3 Months</span>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className='info-title-value info-border'>
                                    <span className='info-title text-white-o6'>Exam:</span>
                                    <span className='info-value text-white-o6'>X-Ray, CT, MRI</span>
                                </div>
                            </Col>
                        </Row>
                        <Row className='mb-2'>
                            <Col md="12">
                                <div className='info-title-value info-border'>
                                    <span className='info-title text-white-o6'>Analysis:</span>
                                    <span className='info-value text-white-o6'> Left-Right Bending X-Ray Analysis, Lateral Time-based X-Ray Analysis, AP Time-based X-Ray Analysis</span>
                                </div>
                            </Col>
                        </Row>

                        <div className='info-list-btns'>
                            <button className='theme-btn theme-dark radius-6'>
                                <span className='info-title text-white-o6'>Group:</span> <span className='info-value'>Control</span>
                            </button>
                            <button className='theme-btn theme-dark radius-6'>
                                <span className='info-title text-white-o6'>Anatomy: </span> <span className='info-value'>Cervical Spine</span>
                            </button>
                            <button className='theme-btn theme-dark radius-6'>
                                <span className='info-title text-white-o6'>Index Location: </span> <span className='info-value'>C1, C2, C4-C5</span>
                            </button>
                            <button className='theme-btn theme-dark radius-6'>
                                <span className='info-title text-white-o6'>Object type: </span> <span className='info-value'>Vertebra</span>
                            </button>
                        </div>
                    </div>
                </div>
                <h6 className='mb-3'>Sites</h6>
                <div className='card site-card'>
                    <div className='card-body'>
                        <div className='upload-wrapp'>
                            <div className='icon-wrapper'>
                                <Image src={icnProject} alt='Icn Project' />
                            </div>
                            <button className='theme-btn theme-dark' onClick={handleShow}> Create Your First Project</button>
                        </div>
                    </div>
                </div>
                <div className='fitler-wrapper'>
                    <div className='inline-filter-wrapper'>
                        <h6 className='mb-0'>Sites</h6>
                        <div className='search-wrapper'>
                            <span className='search-icon'>
                                <Image src={icnSearch} alt="user_avtar" />
                            </span>
                            <input className='site-input' type='search' placeholder="Search" />
                        </div>
                    </div>
                    <div className='inline-filter-wrapper'>

                        <Dropdown className='site-dropdown'>
                            <Dropdown.Toggle id="Active" className='theme-btn theme-gray'>
                                Active <Image src={icnLightDropdown} alt='Icon Menu' />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <a href='#' className='theme-link text-white ml-2'>
                            <Image src={icnLightPlus} alt="icn-light-export.svg" /> Create Site
                        </a>
                    </div>
                </div>
                <Table responsive className='site-table text-nowrap'>
                    <thead>
                        <tr>
                            <th>Project ID</th>
                            <th>Title</th>
                            <th>No of Subjects</th>
                            <th>Site PI</th>
                            <th>Created Date</th>
                            <th className='th-w-50'>&nbsp;</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>PlusMed</td>
                            <td>03</td>
                            <td>Dr. Jose Doe</td>
                            <td>01/01/2024</td>

                            <td>
                                <Dropdown className='site-dropdown'>
                                    <Dropdown.Toggle id="dropdown-basic" variant='link'>
                                        <Image src={icnMenu} alt='Icon Menu' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">View details</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Deactivate</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Create Subject</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>PlusMed</td>
                            <td>03</td>
                            <td>Dr. Jose Doe</td>
                            <td>01/01/2024</td>

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
                            <td>001</td>
                            <td>PlusMed</td>
                            <td>03</td>
                            <td>Dr. Jose Doe</td>
                            <td>01/01/2024</td>

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
                <div className="pagination-container">
                    <div className="per-page-container">
                        <label htmlFor="per-page">No of item</label>
                        <select id="per-page">
                            <option value="5">5</option>
                            <option value="10" selected>10</option>
                            <option value="20">20</option>
                        </select>
                        <label htmlFor="per-page">Per page:</label>

                    </div>
                    <ul className="pagination">
                        <li className="prev">Prev</li>
                        <li className="page-number active">1</li>
                        <li className="page-number">2</li>
                        <li className="page-number">3</li>
                        <li className="page-number">4</li>
                        <li className="next">Next</li>
                    </ul>
                </div>
                <Button variant="primary" onClick={handleCanvasShow} className="me-2">
                    Nick Furry Offcanvas
                </Button>
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

export default ProjectsDetails;
