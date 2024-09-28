"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import icnBack from "../../assets/images/icons/icn-light-back.svg";
import icnProject from "../../assets/images/icons/icn-project.png";
import icnLightEdit from "../../assets/images/icons/icn-light-edit.svg";
import Form from "react-bootstrap/Form";
import Table from 'react-bootstrap/Table';
import icnSearch from "../../assets/images/icons/icn-search.png";
import Dropdown from 'react-bootstrap/Dropdown';
import icnMenu from "../../assets/images/icons/icn-menu.svg";
import icnLightDropdown from "../../assets/images/icons/icn-select-drodown.png";
import icnLightPlus from "../../assets/images/icons/icn-light-plus.svg";
import icnLightCalendar from "../../assets/images/icons/icn-light-calendar.svg";

const ProjectDetailSiteDetail = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="top-bar">
        <Link href="/projects" className="back-link">
          <Image src={icnBack} alt="user_avtar" />
        </Link>
        <h4 className="page-title">Project Detail (Site Detail)</h4>
        <div className="blank-wrp"></div>
      </div>
      <div className="pt-4">
        <div className="card site-card mb-3">
          <div className="card-body">
            <div className="dark-card mb-2">
              <div className="info-wrapper">
                <div className="info-left">
                  <h5 className="mb-1">PlusMed</h5>
                  <div className="info-title-value">
                    <span className="info-title text-white-o6">Site</span>
                  </div>
                </div>
                <div className="info-middle">
                  <button className="theme-btn theme-gray">
                    <span className="info-title text-white-o6">
                      Dr. Jose Doe
                    </span>
                  </button>
                  <button className="theme-btn theme-gray">
                    <span className="info-title text-white-o6">01/01/2024</span>
                  </button>
                  <button className="theme-btn theme-gray">
                    <span className="info-title text-white-o6">001</span>
                  </button>
                </div>
                <div className="info-right">
                  <button className="theme-btn theme-gray">
                    <Image src={icnLightEdit} alt="icn-light-calendar" /> Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h6 className="mb-3">Subject</h6>
        <div className="card site-card">
          <div className="card-body">
            <div className="upload-wrapp">
              <div className="icon-wrapper">
                <Image src={icnProject} alt="Icn Project" />
              </div>
              <Button className="theme-btn theme-dark" onClick={handleShow}>
                Create Your First Subject
              </Button>
            </div>
          </div>
        </div>
        <div className='fitler-wrapper'>
          <div className='inline-filter-wrapper'>
            <h6 className='mb-0'>Subject</h6>
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
              <Image src={icnLightPlus} alt="icn-light-export.svg" /> Create Subject
            </a>
          </div>
        </div>
        <Table responsive className='site-table text-nowrap'>
          <thead>
            <tr>
              <th>Subject ID</th>
              <th>Group</th>
              <th>Index Location</th>
              <th>No of visits</th>
              <th>Last updated visit</th>
              <th>Created Date</th>
              <th className='th-w-50'>&nbsp;</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jason Clark</td>
              <td>Control</td>
              <td>C1</td>
              <td>03</td>
              <td>04/20/2024</td>
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
                    <Dropdown.Item href="#/action-3">Create new visit</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Perform lateral time-based analysis</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Perform AP time-based analysis</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr className="bg-inactive">
              <td>Nick Furry</td>
              <td>Control</td>
              <td>C4-C5</td>
              <td>03</td>
              <td>04/20/2024</td>
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
                    <Dropdown.Item href="#/action-3">Create new visit</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Perform lateral time-based analysis</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Perform AP time-based analysis</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>Jason Clark</td>
              <td>Control</td>
              <td>C1</td>
              <td>03</td>
              <td>04/20/2024</td>
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
                    <Dropdown.Item href="#/action-3">Create new visit</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Perform lateral time-based analysis</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Perform AP time-based analysis</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>Jason Clark</td>
              <td>Control</td>
              <td>C1</td>
              <td>03</td>
              <td>04/20/2024</td>
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
                    <Dropdown.Item href="#/action-3">Create new visit</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Perform lateral time-based analysis</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Perform AP time-based analysis</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>Jason Clark</td>
              <td>Control</td>
              <td>C1</td>
              <td>03</td>
              <td>04/20/2024</td>
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
                    <Dropdown.Item href="#/action-3">Create new visit</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Perform lateral time-based analysis</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Perform AP time-based analysis</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>


          </tbody>
        </Table>
        <div className='dark-card mb-2 mt-5'>
          <div className='info-wrapper dark100-card mb-2'>
            <div className='info-left'>
              <h5 className='mb-2'>Nick Furry 03-5</h5>
              <div className='info-title-value'><span className='info-title text-white-o6'>Subject</span></div>
            </div>
            <div className='info-middle'>
              <button className='theme-btn theme-gray'>Image analyst: Mike Smith</button>
              <button className='theme-btn theme-gray'>Control</button>
              <button className='theme-btn theme-gray'>L4-L5</button>

            </div>
            <div className='info-right'>
              <button className='theme-btn theme-gray inline-flex items-center'>
                Assign
              </button>

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
                <td>PreOp</td>
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
                      <Dropdown.Item href="#/action-1">View details</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Deactivate</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Create new visit</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Perform lateral time-based analysis</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Perform AP time-based analysis</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>PreOp</td>
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
                      <Dropdown.Item href="#/action-1">View details</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Deactivate</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Create new visit</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Perform lateral time-based analysis</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Perform AP time-based analysis</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>PreOp</td>
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
                      <Dropdown.Item href="#/action-1">View details</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Deactivate</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Create new visit</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Perform lateral time-based analysis</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Perform AP time-based analysis</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>PreOp</td>
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
                      <Dropdown.Item href="#/action-1">View details</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Deactivate</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Create new visit</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Perform lateral time-based analysis</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Perform AP time-based analysis</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>


            </tbody>
          </Table>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        size="lg"
        className="site-modal time_basedpopup">
        <Modal.Header closeButton>
          <Modal.Title>Create New Subject</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <Form>
            <div className="xr_exam">
              <ul className="info-list-border">
                <li className="xr_examflex">
                  <div className="exam_head_left text-white">

                    <div className="info-title-value"><span className="info-title text-white-o6">Site Name: </span> <span className="info-value">PlusMed</span></div>
                  </div>
                  <div className="exam_head_right">
                    <div className="info-right">
                      <button className="theme-btn theme-gray ">001</button>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
            <Form.Group className="site-input-group">
              <Form.Label className="site-label">Subject ID*</Form.Label>
              <Form.Control className="site-input" placeholder="Subject ID">

              </Form.Control>
            </Form.Group>
            <Form.Group className="site-input-group">
              <Form.Label className="site-label">Group</Form.Label>
              <Form.Control className="site-input" placeholder="Group">

              </Form.Control>
            </Form.Group>
            <Form.Group className="site-input-group">
              <Form.Label className="site-label">Index Location</Form.Label>
              <Form.Select className="site-input" aria-label="Default select">
                <option>Please select</option>
                <option value="1">C1</option>
                <option value="2">C1</option>
                <option value="3">C1</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="theme-btn theme-gray"
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            className="theme-btn theme-light"
          >
            Create Subject
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectDetailSiteDetail;
