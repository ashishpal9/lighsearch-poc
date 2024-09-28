"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import icnSearch from "../../assets/images/icons/icn-search.png";
import Dropdown from 'react-bootstrap/Dropdown';
import icnLightDropdown from "../../assets/images/icons/icn-select-drodown.png";
import icnMenu from "../../assets/images/icons/icn-menu.svg";

const UserManagement = () => {
    return (
        <>
            <div className='top-bar'>
                <div className='top-bar-left'>
                    <h4 className='page-title'>User Management</h4>
                    <div className='search-wrapper'>
                        <span className='search-icon'>
                            <Image src={icnSearch} alt="user_avtar" />
                        </span>
                        <input className='site-input' type='search' placeholder="Search" />
                    </div>
                </div>
                <div className='top-bar-right'>
                    <a href='#' className='theme-btn theme-light'>Add New</a>
                </div>
            </div>
            <section className="find_filter">
                    <div className="find_filcol">
                        <Form.Group className="site-input-group">
                            <Form.Label className="site-label">&nbsp;</Form.Label>
                            <Form.Select className="site-input" aria-label="Default select">
                                <option value="1">Project demo</option>
                                <option value="2">Project demo</option>
                                <option value="3">Project demo</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="find_filcol">
                        <Form.Group className="site-input-group">
                            <Form.Label className="site-label">&nbsp;</Form.Label>
                            <Form.Select className="site-input" aria-label="Default select">
                                <option value="1">Site demo</option>
                                <option value="2">Site demo</option>
                                <option value="3">Site demo</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                </section>
            <div className='pt-'>
                <Table responsive className='site-table text-nowrap'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Roles</th>
                            <th>Email</th>
                            <th>Last Active</th>
                            <th>Status</th>
                            <th className='th-w-50'>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Emily Johnson</td>
                            <td>Image Importer</td>
                            <td>emily.johnson@email.com</td>
                            <td>01/01/2024</td>
                            <td className='inactived_activedbtn'>
                                <button className='inactived_btnstatus theme-btn'>Active</button>
                            </td>
                            <td>
                                <Dropdown className='site-dropdown'>
                                    <Dropdown.Toggle id="dropdown-basic" variant='link'>
                                        <Image src={icnMenu} alt='Icon Menu' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">View details</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Emily Johnson</td>
                            <td>Image Importer</td>
                            <td>emily.johnson@email.com</td>
                            <td>01/01/2024</td>
                            <td className='inactived_activedbtn'>
                                <button className='actived_btnstatus theme-btn'>Inactive</button>
                            </td>
                            <td>
                                <Dropdown className='site-dropdown'>
                                    <Dropdown.Toggle id="dropdown-basic" variant='link'>
                                        <Image src={icnMenu} alt='Icon Menu' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">View details</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Emily Johnson</td>
                            <td>Image Importer</td>
                            <td>emily.johnson@email.com</td>
                            <td>01/01/2024</td>
                            <td className='inactived_activedbtn'>
                                <button className='inactived_btnstatus theme-btn'>Active</button>
                            </td>
                            <td>
                                <Dropdown className='site-dropdown'>
                                    <Dropdown.Toggle id="dropdown-basic" variant='link'>
                                        <Image src={icnMenu} alt='Icon Menu' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">View details</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Emily Johnson</td>
                            <td>Image Importer</td>
                            <td>emily.johnson@email.com</td>
                            <td>01/01/2024</td>
                            <td className='inactived_activedbtn'>
                                <button className='actived_btnstatus theme-btn'>Inactive</button>
                            </td>
                            <td>
                                <Dropdown className='site-dropdown'>
                                    <Dropdown.Toggle id="dropdown-basic" variant='link'>
                                        <Image src={icnMenu} alt='Icon Menu' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">View details</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Emily Johnson</td>
                            <td>Image Importer</td>
                            <td>emily.johnson@email.com</td>
                            <td>01/01/2024</td>
                            <td className='inactived_activedbtn'>
                                <button className='inactived_btnstatus theme-btn'>Active</button>
                            </td>
                            <td>
                                <Dropdown className='site-dropdown'>
                                    <Dropdown.Toggle id="dropdown-basic" variant='link'>
                                        <Image src={icnMenu} alt='Icon Menu' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">View details</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Emily Johnson</td>
                            <td>Image Importer</td>
                            <td>emily.johnson@email.com</td>
                            <td>01/01/2024</td>
                            <td className='inactived_activedbtn'>
                                <button className='actived_btnstatus theme-btn'>Inactive</button>
                            </td>
                            <td>
                                <Dropdown className='site-dropdown'>
                                    <Dropdown.Toggle id="dropdown-basic" variant='link'>
                                        <Image src={icnMenu} alt='Icon Menu' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">View details</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Emily Johnson</td>
                            <td>Image Importer</td>
                            <td>emily.johnson@email.com</td>
                            <td>01/01/2024</td>
                            <td className='inactived_activedbtn'>
                                <button className='inactived_btnstatus theme-btn'>Active</button>
                            </td>
                            <td>
                                <Dropdown className='site-dropdown'>
                                    <Dropdown.Toggle id="dropdown-basic" variant='link'>
                                        <Image src={icnMenu} alt='Icon Menu' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">View details</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Emily Johnson</td>
                            <td>Image Importer</td>
                            <td>emily.johnson@email.com</td>
                            <td>01/01/2024</td>
                            <td className='inactived_activedbtn'>
                                <button className='actived_btnstatus theme-btn'>Inactive</button>
                            </td>
                            <td>
                                <Dropdown className='site-dropdown'>
                                    <Dropdown.Toggle id="dropdown-basic" variant='link'>
                                        <Image src={icnMenu} alt='Icon Menu' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">View details</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
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
            </div>
        </>
    );
};

export default UserManagement;
