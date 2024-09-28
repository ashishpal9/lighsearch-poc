"use client"
import React from 'react';
import Image from "next/image";
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import icnSearch from "../../assets/images/icons/icn-search.png";
import icnLightExport from "../../assets/images/icons/icn-light-export.svg";
import icnProject from "../../assets/images/icons/icn-project.png";
import icnMenu from "../../assets/images/icons/icn-menu.svg";


const Projects = () => {

    return (
        <>
            <div className='top-bar'>
                <div className='top-bar-left'>
                    <h4 className='page-title'>Projects</h4>
                    <div className='search-wrapper'>
                        <span className='search-icon'>
                            <Image src={icnSearch} alt="user_avtar" />
                        </span>
                        <input className='site-input' type='search' placeholder="Search" />
                    </div>
                </div>
                <div className='top-bar-right'>
                    <div className='site-flex inline-input'>
                        <span className='small-text flex-shrink-0'>Filter by</span>
                        <select className='site-input bg-gray form-select'>
                            <option>Status</option>
                            <option>Active</option>
                            <option>Deactive</option>
                        </select>
                    </div>
                    <button className='theme-btn theme-outline-light07'>
                        <Image src={icnLightExport} alt="icn-light-export.svg" />    Export
                    </button>
                    <a href='#' className='theme-btn theme-light'>New Project</a>

                </div>
            </div>
            <div className='pt-4'>
                <div className='card site-card'>
                    <div className='card-body'>
                        <div className='upload-wrapp'>
                            <div className='icon-wrapper'>
                                <Image src={icnProject} alt='Icn Project' />
                            </div>
                            <a href='/create-new-project' className='theme-btn theme-dark'>Create Your First Project</a>
                        </div>
                    </div>
                </div>
                <Table responsive className='site-table text-nowrap'>
                    <thead>
                        <tr>
                            <th>Project ID</th>
                            <th>Name</th>
                            <th>Sites</th>
                            <th>Subjects</th>
                            <th>Created Date</th>
                            <th className='text-center th-w-100'>Status</th>
                            <th className='th-w-50'>&nbsp;</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Lumbar Spine Study</td>
                            <td>5</td>
                            <td>120</td>
                            <td>01/01/2024</td>
                            <td  className='text-center'>
                                <Badge bg="warning">Active</Badge>
                            </td>
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
                            <td>Lumbar Spine Study</td>
                            <td>5</td>
                            <td>120</td>
                            <td>01/01/2024</td>
                            <td className='text-center'>
                                <Badge bg="success">Completed</Badge>
                            </td>
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
                        <tr className='bg-inactive'>
                            <td>001</td>
                            <td>Lumbar Spine Study</td>
                            <td>5</td>
                            <td>120</td>
                            <td>01/01/2024</td>
                            <td className='text-center'>
                                <Badge bg="gray">Inactive</Badge>
                            </td>
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
                            <td>Lumbar Spine Study</td>
                            <td>5</td>
                            <td>120</td>
                            <td>01/01/2024</td>
                            <td className='text-center'>
                                <Badge bg="success">Completed</Badge>
                            </td>
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
        </>
    );
};

export default Projects;
