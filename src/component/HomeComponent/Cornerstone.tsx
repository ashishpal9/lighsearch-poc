"use client";
import React, { useEffect, useState, useRef } from "react";
import cornerstone from "cornerstone-core";
const cornerstoneMath = require("cornerstone-math");
const cornerstoneTools = require("cornerstone-tools");
import Hammer from "hammerjs";
const cornerstoneWADOImageLoader = require("cornerstone-wado-image-loader");
import dicomParser from "dicom-parser";
import Draggable from "react-draggable";

// External libraries setup
cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.Hammer = Hammer;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

const DICOMViewer: React.FC = () => {
    const [imageIds, setImageIds] = useState<string[]>([]);
    const dicomImageElements = useRef<(HTMLDivElement | null)[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        const newImageIds = files.map((file) => {
            return cornerstoneWADOImageLoader.wadouri.fileManager.add(file);
        });
        setImageIds(newImageIds);
    };

    useEffect(() => {
        if (imageIds.length > 0) {
            imageIds.forEach((imageId, index) => {
                if (dicomImageElements.current[index]) {
                    const element = dicomImageElements.current[index]!;
                    cornerstone.enable(element);

                    cornerstone.loadImage(imageId).then((image) => {
                        
                        const viewport = cornerstone.getDefaultViewportForImage(element, image);

                        // Create an offscreen canvas to manipulate pixel data
                        const offscreenCanvas = document.createElement('canvas');
                        offscreenCanvas.width = image.width;
                        offscreenCanvas.height = image.height;
                        const offscreenContext = offscreenCanvas.getContext('2d');

                        if (offscreenContext) {
                            // Draw the image to the offscreen canvas
                            cornerstone.renderToCanvas(offscreenContext.canvas, image, viewport);

                            // Get image data from the offscreen canvas
                            const imageData = offscreenContext.getImageData(0, 0, offscreenCanvas.width, offscreenCanvas.height);

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
                            offscreenContext.putImageData(imageData, 0, 0);

                            // Display the offscreen canvas as an image on the main canvas
                            const mainCanvas = element.querySelector('canvas');
                            if (mainCanvas) {
                                const mainContext = mainCanvas.getContext('2d');
                                if (mainContext) {
                                    mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
                                    mainContext.drawImage(offscreenCanvas, 0, 0);

                                }
                            }
                        }
                    });
                }
            });
        }
    }, [imageIds]);

    return (
        <div>
            <h2>Upload DICOM images to superimpose and drag</h2>
            <input type="file" onChange={handleFileChange} multiple />
            <div
                style={{
                    position: "relative",
                    height: "500px",
                    width: "500px",
                    border: "1px solid #ccc",
                }}
            >
                {imageIds.map((imageId, index) => (
                    <Draggable key={imageId}>
                        <div
                            id={`dicomImage${index}`}
                            ref={(el:any) => (dicomImageElements.current[index] = el)}
                            style={{
                                backgroundColor: "transparent",
                                height: "500px",
                                width: "500px",
                                position: "absolute",
                                top: 0,
                                left: 0,
                            }}
                        />
                    </Draggable>
                ))}
            </div>
        </div>
    );
};

export default DICOMViewer;