import React, { useCallback, useEffect, useRef, useState } from "react";
import { iconWidth } from "@/utils/constant";
import { CoorType, DefaultLandmarksType, ImageData } from "@/utils/types";
import Image from "next/image";
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import icon_plus_yellow from "@/assets/images/icons/icon_plus_yellow.png";
import icon_rotate from "@/assets/images/icons/icon_rotate.png";

interface ExtensionLandmarksProps {
    extension_coor: CoorType[];
    imgData: (ImageData | null)[];
    activeButton: number | null;
    setLandmarks: Function;
}

const ExtensionLandmarks: React.FC<ExtensionLandmarksProps> = ({ extension_coor, imgData, activeButton, setLandmarks }) => {
    const [rotation, setRotation] = useState(0);
    const [isRotating, setIsRotating] = useState(false);
    const [handleSize, setHandleSize] = useState<{ height: number; width: number }>({ height: 0, width: 0 });
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const containerRef = useRef<HTMLDivElement>(null);
    const startAngleRef = useRef(0);

    useEffect(() => {
        if(imgData[1] && extension_coor.length === 4) {
           const { height, width } = getCoord();
           setHandleSize({ height, width });
           setLandmarks((prev: DefaultLandmarksType[]) => {
                let prevItem = [...prev];
                if(activeButton) {
                    prevItem[activeButton].extension_img = {
                        src: "string",
                        width: imgData[0]?.width ? imgData[0]?.width : 0,
                        height: imgData[0]?.height ? imgData[0]?.height : 0,
                        angle: rotation,
                        position,
                        resizeCoord: { height, width }
                    }
                }
                return prevItem
           });
        }
    },[extension_coor])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isRotating || !containerRef.current) return;

            const container = containerRef.current.getBoundingClientRect();
            const centerX = container.left + container.width / 2;
            const centerY = container.top + container.height / 2;

            const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
            const newRotation = angle - startAngleRef.current;

            setRotation(prevRotation => prevRotation + newRotation);
            startAngleRef.current = angle;
        };

        const handleMouseUp = () => {
            setIsRotating(false);
        };

        if (isRotating) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isRotating]);

    const handleRotateStart = (e: React.MouseEvent) => {
        if (!containerRef.current) return;

        const container = containerRef.current.getBoundingClientRect();
        const centerX = container.left + container.width / 2;
        const centerY = container.top + container.height / 2;

        startAngleRef.current = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
        setIsRotating(true);
    };

    const getCoord = useCallback(() => {
        if (!imgData[1]) return { left: 0, top: 0, width: 0, height: 0 };

        const minLeft = Math.min(...extension_coor.map(e => e.x ?? 0));
        const maxLeft = Math.max(...extension_coor.map(e => e.x ?? 0));
        const minTop = Math.min(...extension_coor.map(e => e.y ?? 0));
        const maxTop = Math.max(...extension_coor.map(e => e.y ?? 0));

        const left = (imgData[1].width / 100) * minLeft;
        const top = (imgData[1].height / 100) * minTop;
        const width = ((imgData[1].width / 100) * maxLeft) - (left - iconWidth);
        const height = ((imgData[1].height / 100) * maxTop) - (top - iconWidth);

        return { left, top, width, height };
    },[]);

    const cnvrtLndmrkPos = ({ x, y }: { x: number | null, y: number | null }) => {
        if (x != null && y != null && imgData[1]) {

            const { left, top, width, height } = getCoord();
            const xOnePix = (imgData[1].width / 100) * x;
            const yOnePix = (imgData[1].height / 100) * y;

            return {
                left: (100 / width) * (xOnePix - left) + "%",
                top: (100 / height) * (yOnePix - top) + "%"
            };
        }
        return {};
    };

    const handleResize = (_: any, data: any) => {
        const resizeData = { width: data.size.width, height: data.size.height }
        setHandleSize(resizeData);
        setLandmarks((prev: DefaultLandmarksType[]) => {
            let prevItem = [...prev];
            if(activeButton) {
                prevItem[activeButton].extension_img = {
                    src: "string",
                    width: imgData[0]?.width ? imgData[0]?.width : 0,
                    height: imgData[0]?.height ? imgData[0]?.height : 0,
                    angle: rotation,
                    position,
                    resizeCoord: resizeData
                }
            } else {
                return prevItem
            }
       });
    };

    const handleStop = (_: any, data: any) => {
        if (data) {
            setPosition({ x: data.x, y: data.y });
        }
    }

    return (
        <>
            {activeButton !== null && extension_coor.length === 4 && imgData[1] ? 
                <Draggable
                    disabled={isRotating}
                    bounds="parent"
                    handle=".handle"
                    onStop={handleStop}
                    defaultPosition={{ x: getCoord().left, y: getCoord().top }}
                >
                    <div ref={containerRef}>
                        <div style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.1s' }}>
                            <ResizableBox
                                width={handleSize.width}
                                height={handleSize.height}
                                minConstraints={[50, 50]}
                                maxConstraints={[300, 300]}
                                onResize={handleResize}
                            >
                                <div className="handle" style={{ width: '100%', height: '100%', position: 'relative' }}>
                                    {extension_coor.map((item) => (
                                        <Image
                                            src={icon_plus_yellow}
                                            key={item.id}
                                            style={{
                                                position: "absolute",
                                                background: "transparent",
                                                ...cnvrtLndmrkPos(item),
                                                transform: `rotate(${-rotation}deg)` // Adjust the plus icons to counter the rotation
                                            }}
                                            alt="node"
                                            height={iconWidth}
                                            width={iconWidth}
                                            className="node-plus-img flexion-icon-img"
                                        />
                                    ))}
                                </div>
                            </ResizableBox>
                            <button
                                className="btn-rotate landmark-rotate"
                                onMouseDown={handleRotateStart}
                                style={{
                                    position: 'absolute',
                                    right: '-25px', // Adjust based on rotation
                                    bottom: '-25px', // Adjust based on rotation
                                    transform: `rotate(${-rotation}deg)` // Keep rotate icon upright
                                }}
                            >
                                <Image
                                    src={icon_rotate}
                                    alt="icon_rotate"
                                    height={21}
                                    width={21}
                                />
                            </button>
                        </div>
                    </div>
                </Draggable>
            : null }

            {imgData[0] ? <img src={imgData[0].src} alt="xray1" className='xray1' /> : null}
        </>
    );
};

export default ExtensionLandmarks;
