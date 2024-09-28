"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Form from "react-bootstrap/Form";

const Inventory = () => {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <h4 className="page-title">Inventory</h4>
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
            <button className="theme-btn theme-light">Export</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Inventory;
