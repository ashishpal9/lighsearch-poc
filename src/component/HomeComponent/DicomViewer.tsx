import React, { useCallback, useEffect, useRef } from "react";
import cornerstone from "cornerstone-core";
const cornerstoneMath = require('cornerstone-math');
const cornerstoneTools = require('cornerstone-tools');
import Hammer from "hammerjs";
const cornerstoneWADOImageLoader = require("cornerstone-wado-image-loader");
import dicomParser from "dicom-parser";
import { trimCanvas } from "@/utils/CommonService";
import { DefaultVertebraeType, DicomImageDataType } from "@/utils/types";
cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.Hammer = Hammer;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

interface DiocmType {
    handleSelectVertebrae: Function;
    vertibraeList: DefaultVertebraeType[];
    setVertibraeList: Function;
    handleRegister: Function;
    vertibrae: DefaultVertebraeType;
    setVertibrae: Function;
}

const DICOMViewer = ({ handleSelectVertebrae, vertibraeList, setVertibraeList, handleRegister, vertibrae, setVertibrae }: DiocmType) => {

    const dicomImageElement = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (dicomImageElement.current) {
            cornerstone.enable(dicomImageElement.current);
        }
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, indx: number) => {
        const files = Array.from(e.target.files || []);
        const newImageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(files[0]);

        if (newImageId && dicomImageElement.current) {
            cornerstone.loadImage(newImageId).then((image: any) => {
                image.getPixelData();

                const viewport = cornerstone.getDefaultViewportForImage(dicomImageElement.current!, image);
                const canvas = document.createElement('canvas');
                canvas.width = image.width;
                canvas.height = image.height;

                // Get the context and render the image on the canvas
                const context = canvas.getContext('2d');
                if (context) {
                    cornerstone.renderToCanvas(canvas, image, viewport);

                    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                    // Modify the pixel data to make black areas transparent
                    for (let i = 0; i < imageData.data.length; i += 4) {
                        const r = imageData.data[i];
                        const g = imageData.data[i + 1];
                        const b = imageData.data[i + 2];

                        // If the pixel is black, make it transparent
                        if (r < 50 && g < 50 && b < 50) {
                            imageData.data[i + 3] = 0; // Set alpha channel to 0 (transparent)
                        }
                    }

                    // Put the modified image data back onto the canvas
                    context.putImageData(imageData, 0, 0);

                    const trimmedCanvas = trimCanvas(canvas)
                    if (trimmedCanvas) {
                        const base64 = trimmedCanvas.toDataURL("image/png");

                        // Create a deep copy of vertibrae
                        const vert: DefaultVertebraeType = {
                            id: "",
                            vertebrae_type: "",
                            dicom_images: [...vertibrae.dicom_images],
                            isSave: false,
                          } //{...vertibrae};

                        const dicomData: DicomImageDataType = { 
                            id: vert.dicom_images.length+1,
                            src: base64, 
                            height: trimmedCanvas.height, 
                            width: trimmedCanvas.width, 
                            angle: 0,
                            resizeCoord: { height: trimmedCanvas.height, width: trimmedCanvas.width },
                            isFixed: indx === 0,
                            landmark_coor: [],
                            position: { x: 0 , y: 0 }
                        }

                        if(indx === 0) {
                            vert.dicom_images.push(dicomData);
                        } else if (vert?.dicom_images[0]?.width && vert?.dicom_images[0]?.width > dicomData.width) {
                                vert.dicom_images.push({...dicomData, position: { x: vert?.dicom_images[0]?.width , y: 0 }});
                        } else {
                            vert.dicom_images.push({...dicomData, position: { x: dicomData.width + 50 , y: 0 }});
                        }

                        setVertibrae(vert);
                        setVertList(base64, trimmedCanvas, indx)

                        cornerstone.displayImage(dicomImageElement.current!, image);
                    }
                }
            });

        }
    };

    const setVertList = (base64: any, trimmedCanvas: any, indx: number) => {
        // Create a deep copy of vertibrae
        const vert: DefaultVertebraeType = {
            id: "",
            vertebrae_type: "",
            dicom_images: [...vertibrae.dicom_images],
            isSave: false,
          } //{...vertibrae};

        const dicomData: DicomImageDataType = { 
            id: vert.dicom_images.length+1,
            src: base64, 
            height: trimmedCanvas.height, 
            width: trimmedCanvas.width, 
            angle: 0,
            resizeCoord: { height: trimmedCanvas.height, width: trimmedCanvas.width },
            isFixed: indx === 0,
            landmark_coor: [],
            position: { x: 0 , y: 0 }
        }

        if(indx === 0) {
            vert.dicom_images.push(dicomData);
        } else if (vert?.dicom_images[0]?.width && vert?.dicom_images[0]?.width > dicomData.width) {
                vert.dicom_images.push({...dicomData, position: { x: vert?.dicom_images[0]?.width , y: 0 }});
        } else {
            vert.dicom_images.push({...dicomData, position: { x: dicomData.width + 50 , y: 0 }});
        }

        // Update vertibraeList without referencing vert
        setVertibraeList((prevList: DefaultVertebraeType[]) => 
            prevList.map(item => ({...item, dicom_images: [...vert.dicom_images]}))
        );
    }

    const isDisabled = useCallback((verti: DefaultVertebraeType, item: DefaultVertebraeType) => {
        if(item.isSave) return false;
        if(verti.vertebrae_type !== "" && !verti.isSave) return false;

        return false;
    },[vertibrae, vertibraeList])

    return (
        <div className="upload-card mx-auto">
            <div className="upload-wrapper">
                <div className="upload-innerwrapper">
                    <div className="upload-btn-wrapper">
                        <input type="file" name="Extension" id="Extension" onChange={(e) => handleFileChange(e, 0)} />
                        <span className="upload-text">Upload Extension</span>
                    </div>
                    <div className="upload-btn-wrapper">
                        <input type="file" name="Flexion" id="Flexion" onChange={(e) => handleFileChange(e, 1)} />
                        <span className="upload-text">Upload Flexion</span>
                    </div>
                </div>
                {vertibrae.dicom_images.length === 2 && (
                    <div className="platform-wrapper">
                        {vertibrae?.dicom_images[0]?.landmark_coor?.length === 4 ? 
                            <button className="upload-btn-wrapper" onClick={() => handleRegister()}>Register</button> 
                        : null}
                        <h5 className="text-center mb-0">Select Vertebrae:</h5>
                        <div className="btns-group">
                            {vertibraeList.map((item: DefaultVertebraeType) => (
                                <button
                                    key={item.id}
                                    className={`btn ${vertibrae.id === item.id ? "btn-dark activeted" : "btn-outline-dark"} ${item.isSave && "saved"}`}
                                    onClick={() => handleSelectVertebrae(item)}
                                    disabled={isDisabled(vertibrae, item)}
                                >
                                    {item.vertebrae_type}
                                </button>
                            ))}
                        </div>
                        {/* <button className="upload-btn-wrapper" onClick={handleSave}>Save</button>  */}
                        
                    </div>
                )}
            </div>
            <div
                id="dicomImage"
                ref={dicomImageElement}
                style={{ top: "94px", backgroundColor: "black", height: "500px", width: "500px", position: "absolute", zIndex: -999 }}
            />
        </div>
    );
};
export default DICOMViewer;
