"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import icnBack from "../../assets/images/icons/icn-light-back.svg";
import icnProject from "../../assets/images/icons/icn-project.png";
import icnLightCalendar from "../../assets/images/icons/icn-light-calendar.svg";
import icnLightEdit from "../../assets/images/icons/icn-light-edit.svg";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import icnSearch from "../../assets/images/icons/icn-search.png";
import Dropdown from "react-bootstrap/Dropdown";
import icnMenu from "../../assets/images/icons/icn-menu.svg";
import icnLightDropdown from "../../assets/images/icons/icn-select-drodown.png";
import icnLightPlus from "../../assets/images/icons/icn-light-plus.svg";

const TimeBasedAnalysis = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="top-bar">
        <Link href="/projects" className="back-link">
          <Image src={icnBack} alt="user_avtar" />
        </Link>
        <h4 className="page-title">time based analysis</h4> 
        <div className="blank-wrp"></div>
      </div>
      <div className="pt-4">
        <div className="card site-card mb-3">
          <div className="card-body">
            <div className="dark-card mb-2">
              <div className="info-wrapper">
                <div className="info-left">
                  <h5 className="mb-2">Kevin01-5</h5>
                  <div className="info-title-value">
                    <span className="info-title text-white-o6">Subject</span>
                  </div>
                </div>
                <div className="info-middle">
                  <button className="theme-btn theme-gray">
                    <span className="info-title text-white-o6">
                      Image analyst: Mike Smith
                    </span>
                  </button>
                  <button className="theme-btn theme-gray">
                    <span className="info-title text-white-o6">Control</span>
                  </button>
                  <button className="theme-btn theme-gray">
                    <span className="info-title text-white-o6">L4-L5</span>
                  </button>
                </div>
                <div className="info-right">
                  <button className="theme-btn theme-gray">Assign</button>
                  <button className="theme-btn theme-gray">
                    <Image src={icnLightEdit} alt="icn-light-calendar" /> Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="time_basedtble">
          <div className="fitler-wrapper">
            <div className="inline-filter-wrapper">
              <h6 className="mb-0">Visits</h6>
            </div>
            <div className="inline-filter-wrapper">
              <Dropdown className="site-dropdown">
                <Dropdown.Toggle id="Active" className="theme-btn theme-gray">
                  Active <Image src={icnLightDropdown} alt="Icon Menu" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <a href="#" className="theme-link text-white ml-2">
                <Image src={icnLightPlus} alt="icn-light-export.svg" /> Create
                Site
              </a>
            </div>
          </div>
          <Table responsive className="site-table text-nowrap">
            <thead>
              <tr>
                <th>Visit ID</th>
                <th>Exam</th>
                <th>No of images</th>
                <th>Last updated</th>
                <th>Visit date</th>
                <th className="th-w-50">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PreOp</td>
                <td>XR</td>
                <td>03</td>
                <td>04/20/2024</td>
                <td>01/01/2024</td>
                <td>
                  <Dropdown className="site-dropdown">
                    <Dropdown.Toggle id="dropdown-basic" variant="link">
                      <Image src={icnMenu} alt="Icon Menu" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>PreOp</td>
                <td>XR</td>
                <td>03</td>
                <td>04/20/2024</td>
                <td>01/01/2024</td>
                <td>
                  <Dropdown className="site-dropdown">
                    <Dropdown.Toggle id="dropdown-basic" variant="link">
                      <Image src={icnMenu} alt="Icon Menu" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>PreOp</td>
                <td>XR</td>
                <td>03</td>
                <td>04/20/2024</td>
                <td>01/01/2024</td>
                <td>
                  <Dropdown className="site-dropdown">
                    <Dropdown.Toggle id="dropdown-basic" variant="link">
                      <Image src={icnMenu} alt="Icon Menu" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            </tbody>
          </Table>
          {/* <div className="pagination-container">
            <div className="per-page-container">
                <label htmlFor="per-page">No of item</label>
                <select id="per-page">
                <option value="5">5</option>
                <option value="10" selected>
                    10
                </option>
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
            </div> */}
        </div>
        <h6 className="mb-3">Time based Analysis</h6>
        <div className="card site-card">
          <div className="card-body">
            <div className="upload-wrapp">
              <div className="icon-wrapper">
                <Image src={icnProject} alt="Icn Project" />
              </div>
              <Button className="theme-btn theme-dark" onClick={handleShow}>
                {" "}
                Create Your First Project
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        className="site-modal time_basedpopup">
        <Modal.Header closeButton>
          <Modal.Title>Time Based Analysis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="site-input-group">
              <Form.Label className="site-label">Exam</Form.Label>
              <Form.Select className="site-input" aria-label="Default select">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="site-input-group">
              <Form.Label className="site-label">Visit</Form.Label>
              <Form.Select className="site-input" aria-label="Default select">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
            Create Site
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TimeBasedAnalysis;
