"use client"
import React, { useEffect, useRef, useState } from 'react';

import "react-resizable/css/styles.css";
import { createFlexionCoor, forWarning } from '@/utils/CommonService';
import { DefaultVertebraeType, LandmarkCoorType } from '@/utils/types';
import { defaultVertebrae, defaultVertebraesList } from '@/utils/constant';
// import LineDraw from './LineDraw';
import DicomViewer from './DicomViewer';
// import ExtensionLandmarks from './ExtensionLandmarksBox';
import DrableImage from './DrableImage';
import FixedImage from './FixedImage';

const Home = () => {
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const [vertibraeList, setVertibraeList] = useState<DefaultVertebraeType[]>(defaultVertebraesList);

    const [vertibrae, setVertibrae] = useState<DefaultVertebraeType>(defaultVertebrae)

    const [toggleDicomView, setToggleDicomView] = useState<number | null | string>(null);

    // Clear the interval when the component unmounts
    useEffect(() => {
        const vertibrae_list = sessionStorage.getItem("vertibrae_list");
        if(vertibrae_list) {
            const vertibraeListData: DefaultVertebraeType[] = JSON.parse(vertibrae_list);
            setVertibraeList(vertibraeListData);
            const vertibraeData = vertibraeListData.find(e => e.isSave);
            if(vertibraeData) {
                setVertibrae(vertibraeData);
                intervalRef.current = setInterval(() => {
                    setTimer(vertibraeData)
                }, 1000);
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const handleSelectVertebrae = (vertibraeItem: DefaultVertebraeType) => {
         // Create a deep copy of the selected vertebrae
        const selectedVertebrae: DefaultVertebraeType = JSON.parse(JSON.stringify(vertibraeItem));
        
        if(selectedVertebrae.isSave || vertibrae.isSave) {
            setVertibrae(selectedVertebrae);
        } else {
            setVertibrae(prev => ( {...prev, id: selectedVertebrae.id, vertebrae_type: selectedVertebrae.vertebrae_type, isSave: selectedVertebrae.isSave } ));
            
        }
        if(!selectedVertebrae.isSave) {
            if(intervalRef.current) {
                clearInterval(intervalRef.current);
                setToggleDicomView(null);
            }
        } else {
            intervalRef.current = setInterval(() => {
                setTimer(selectedVertebrae)
            }, 1000);
        }
    }

    const handleRegister = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        if(vertibrae.dicom_images[1].landmark_coor.length !== 4) {
            
            const landmark_coor: (LandmarkCoorType | null)[] = createFlexionCoor(vertibrae);

            if(landmark_coor.includes(null)) {
                forWarning("Superimpose the views before registration.")
            } else {
                let dicom_images = [...vertibrae.dicom_images];
                if(dicom_images.length === 2) dicom_images[1].landmark_coor = landmark_coor.filter(e => e !== null);
                const verti = { ...vertibrae, dicom_images, isSave: true }
                seveDicom(verti)
                
            }
        }
    }

    const seveDicom = (verti: DefaultVertebraeType) => {
        setVertibrae(verti);
        const vertiList = [...vertibraeList].map(e => e.id == verti.id ? verti : e);
        setVertibraeList(vertiList);
        sessionStorage.setItem("vertibrae_list", JSON.stringify(vertiList));

        intervalRef.current = setInterval(() => {
            setTimer(verti)
        }, 1000);
    }

    const setTimer = (vertibrae: DefaultVertebraeType) => {
        setToggleDicomView((prevToggleDicomView) => {
            if (prevToggleDicomView === null) {
                return vertibrae.dicom_images[0].id;
            } else {
                const indx = vertibrae.dicom_images.findIndex(e => e.id === prevToggleDicomView);
                if ((vertibrae.dicom_images.length - 1) === indx) {
                    return vertibrae.dicom_images[0].id;
                } else {
                    return vertibrae.dicom_images[indx + 1].id;
                }
            }
        });
    }

    return (
        <div className="analys-container">
            <DicomViewer
                vertibrae={vertibrae}
                setVertibrae={setVertibrae}
                handleRegister={handleRegister}
                vertibraeList={vertibraeList}
                setVertibraeList={setVertibraeList}
                handleSelectVertebrae={handleSelectVertebrae}
            />
            <div className={`analys-dragarea`}>
                {vertibrae.dicom_images.filter(e => (e.id === toggleDicomView) || (toggleDicomView === null)).map(item => (
                    !item.isFixed ? 
                    <DrableImage item={item} setVertibrae={setVertibrae} key={item.id} vertibrae={vertibrae} /> : 
                    <FixedImage item={item} setVertibrae={setVertibrae} key={item.id} vertibrae={vertibrae} />
                ))}
            </div>

        </div>
    );
};

export default Home;
