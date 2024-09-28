"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icnSearch from "../../assets/images/icons/icn-search.png";
import flexion from "@/assets/images/thumbnails/flexion.jpg";

const FindAnalysisImages = () => {
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
            <button className="theme-btn theme-light">Find</button>
          </div>
        </section>
      </div>
      <section className="ionflex_block">
        <div className='row'>
          <div className='ionflex_col'>
            <div className='ionflex_block_items'>
              <div className='ionflex_block_img'>
                <Image src={flexion} alt='icons'></Image>
              </div>
              <div className='ionflex_block'><span>Flexion</span>01/01/2024</div>
            </div>
          </div>
          <div className='ionflex_col'>
            <div className='ionflex_block_items'>
              <div className='ionflex_block_img'>
                <Image src={flexion} alt='icons'></Image>
              </div>
              <div className='ionflex_block'><span>Flexion</span>01/01/2024</div>
            </div>
          </div>
          <div className='ionflex_col'>
            <div className='ionflex_block_items'>
              <div className='ionflex_block_img'>
                <Image src={flexion} alt='icons'></Image>
              </div>
              <div className='ionflex_block'><span>Flexion</span>01/01/2024</div>
            </div>
          </div>
          <div className='ionflex_col'>
            <div className='ionflex_block_items'>
              <div className='ionflex_block_img'>
                <Image src={flexion} alt='icons'></Image>
              </div>
              <div className='ionflex_block'><span>Flexion</span>01/01/2024</div>
            </div>
          </div>
          <div className='ionflex_col'>
            <div className='ionflex_block_items'>
              <div className='ionflex_block_img'>
                <Image src={flexion} alt='icons'></Image>
              </div>
              <div className='ionflex_block'><span>Flexion</span>01/01/2024</div>
            </div>
          </div>
          <div className='ionflex_col'>
            <div className='ionflex_block_items'>
              <div className='ionflex_block_img'>
                <Image src={flexion} alt='icons'></Image>
              </div>
              <div className='ionflex_block'><span>Flexion</span>01/01/2024</div>
            </div>
          </div>
          <div className='ionflex_col'>
            <div className='ionflex_block_items'>
              <div className='ionflex_block_img'>
                <Image src={flexion} alt='icons'></Image>
              </div>
              <div className='ionflex_block'><span>Flexion</span>01/01/2024</div>
            </div>
          </div>
          <div className='ionflex_col'>
            <div className='ionflex_block_items'>
              <div className='ionflex_block_img'>
                <Image src={flexion} alt='icons'></Image>
              </div>
              <div className='ionflex_block'><span>Flexion</span>01/01/2024</div>
            </div>
          </div>
          <div className='lg-12'>
            <div className='ionflex_loadmore'>
              <button className='theme-btn theme-light'>Load More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindAnalysisImages;
