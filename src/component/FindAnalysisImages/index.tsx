"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icnSearch from "../../assets/images/icons/icn-search.png";
import icnLightEdit from "../../assets/images/icons/icn-light-edit.svg";
import uploadIcn from  "../../assets/images/icons/upload_icn.svg";
import dropcancel from "../../assets/images/icons/dropcancel.svg";

const FindAnalysisImages = () => {
  const [showuploadimg, setShowuploadimg] = useState(false);
  const handleCloseuplpad = () => setShowuploadimg(false);
  const handleShowupload = () => setShowuploadimg(true);
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <h4 className="page-title">Find Analysis / Images</h4>
          <div className="search-wrapper">
            <span className="search-icon">
              <Image src={icnSearch} alt="user_avtar" />
            </span>
            <input
              className="site-input"
              type="search"
              placeholder="Search here"
            />
          </div>
        </div>
        <div className="top-bar-right select_findanalysis">
          <div className="site-flex inline-input">
            <select className="site-input bg-gray form-select">
              <option>Find analysis</option>
              <option>Active</option>
              <option>Deactive</option>
            </select>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <section className="find_filter">
          <div className="find_filcol">
            <Form.Group className="site-input-group">
              <Form.Label className="site-label">Project ID</Form.Label>
              <Form.Select className="site-input" aria-label="Default select">
                <option value="1">Project demo</option>
                <option value="2">Project demo</option>
                <option value="3">Project demo</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="find_filcol">
            <Form.Group className="site-input-group">
              <Form.Label className="site-label">Site ID</Form.Label>
              <Form.Select className="site-input" aria-label="Default select">
                <option value="1">Site demo</option>
                <option value="2">Site demo</option>
                <option value="3">Site demo</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="find_filcol">
            <Form.Group className="site-input-group">
              <Form.Label className="site-label">Subject ID</Form.Label>
              <Form.Select className="site-input" aria-label="Default select">
                <option value="1">Subject demo</option>
                <option value="2">Subject demo</option>
                <option value="3">Subject demo</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="find_filcol">
            <Form.Group className="site-input-group">
              <Form.Label className="site-label">Visit ID</Form.Label>
              <Form.Select className="site-input" aria-label="Default select">
                <option value="1">Visit demo</option>
                <option value="2">Visit demo</option>
                <option value="3">Visit demo</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="find_filcol">
            <Form.Group className="site-input-group">
              <Form.Label className="site-label">Exam</Form.Label>
              <Form.Select className="site-input" aria-label="Default select">
                <option value="1">Exam demo</option>
                <option value="2">Exam demo</option>
                <option value="3">Exam demo</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="find_filbtn">
            <label className="site-label">&nbsp;</label>
            <button onClick={handleShowupload} className="theme-btn theme-light">Find</button>
          </div>
        </section>
        <section className="xr_exam">
          <ul>
            <li className="xr_examflex">
              <div className="exam_head_left">Flex Ext analysis</div>
              <div className="exam_head_right">
                <div className="examhead_right_block">
                  Last Updated: 17/21/2024
                  <div className="info-right">
                    <button className="theme-btn theme-dark">
                      <Image src={icnLightEdit} alt="icn-light-calendar" /> Edit
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="xr_examflex">
              <div className="exam_head_left">Last Updated: 17/21/2024</div>
              <div className="exam_head_right">
                <div className="info-right">
                  <button className="theme-btn theme-light">Perform</button>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <Modal className='site-modal dropmghere_popup' size="lg" show={showuploadimg} onHide={handleCloseuplpad} centered>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" className="dropyr_herebrowse">
                <Form.Label for="dropYourImageHere">
                  <div className='label_drop'>
                    <div className='label_dropicn'>
                      <Image src={uploadIcn} alt='icons'/>
                    </div>
                    <div className='label_droptext'><span>Drop Your Image Here Or</span> Browse</div>
                  </div>
                  </Form.Label>
                <Form.Control id="dropYourImageHere" className="site-input" type="file" placeholder="First name" />
              </Form.Group>
              <Form.Group as={Col} md="6" className="site-input-group">
                <Form.Label className="site-label">Tag Views</Form.Label>
                <Form.Select className="site-input" aria-label="Default select">
                  <option value="1">Flexion One</option>
                  <option value="2">Flexion Two</option>
                  <option value="3">Flexion Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="6" className="site-input-group tagview_imgline">
                <Form.Label className="site-label">&nbsp;</Form.Label>
                <Form.Control className="site-input" type="text" placeholder="First name" />
                <button className='tagviews_cancel'>
                  <Image src={dropcancel} alt="icons"></Image>
                </button>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div className='tagviews_btns'>
            <button className='theme-btn theme-gray' onClick={handleCloseuplpad}>
              Close
            </button>
            <button className='theme-btn theme-light'>
              Upload Image
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FindAnalysisImages;
