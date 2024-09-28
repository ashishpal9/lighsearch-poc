import React, { useEffect, useMemo, useRef, useState } from "react";
import { iconWidth } from "@/utils/constant";
import { CoorType, DefaultLandmarksType, DicomImageDataType, ImageData } from "@/utils/types";
import Image from "next/image";
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import icon_plus_yellow from "@/assets/images/icons/icon_plus_yellow.png";
import icon_rotate from "@/assets/images/icons/icon_rotate.png";

interface ExtensionLandmarksProps {
    extension_coor: CoorType[];
    extension_img: ImageData | null;
    flexion_img: ImageData | null;
    activeButton: number | null;
    setLandmarks: Function;
    setVertibrae: Function;
    item: DicomImageDataType;
}

const ExtensionLandmarks: React.FC<ExtensionLandmarksProps> = ({ item, setVertibrae, extension_coor, extension_img, flexion_img, activeButton, setLandmarks }) => {

    const [isRotating, setIsRotating] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const startAngleRef = useRef(0);

    useEffect(() => {
        if(flexion_img && extension_coor.length === 4) {
           const { height, width } = getCoord;

            setVertibrae(((prev: DefaultLandmarksType) => ({ 
                ...prev, 
                extension_img: { ...prev.extension_img, resizeCoord: { height, width } }
            })));
        }
    },[flexion_img, extension_coor])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isRotating || !containerRef.current) return;

            const container = containerRef.current.getBoundingClientRect();
            const centerX = container.left + container.width / 2;
            const centerY = container.top + container.height / 2;

            const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
            const newRotation = angle - startAngleRef.current;

            setVertibrae(((prev: DefaultLandmarksType) => ({ 
                ...prev, 
                extension_img: { ...prev.extension_img, angle: prev.extension_img?.angle ? prev.extension_img?.angle + newRotation : newRotation }
            })));
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

    // const handleRotateStart = (e: React.MouseEvent) => {
    //     if (!containerRef.current) return;

    //     const container = containerRef.current.getBoundingClientRect();
    //     const centerX = container.left + container.width / 2;
    //     const centerY = container.top + container.height / 2;

    //     startAngleRef.current = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    //     setIsRotating(true);
    // };

    const getCoord = useMemo(() => {
        if (!flexion_img || extension_coor.length !== 4) return { left: 0, top: 0, width: 0, height: 0 };

        const minLeft = Math.min(...extension_coor.map(e => e.x ?? 0));
        const maxLeft = Math.max(...extension_coor.map(e => e.x ?? 0));
        const minTop = Math.min(...extension_coor.map(e => e.y ?? 0));
        const maxTop = Math.max(...extension_coor.map(e => e.y ?? 0));

        const left = (flexion_img.width / 100) * minLeft;
        const top = (flexion_img.height / 100) * minTop;
        const width = ((flexion_img.width / 100) * maxLeft) - (left - iconWidth);
        const height = ((flexion_img.height / 100) * maxTop) - (top - iconWidth);
        return { left, top, width, height };
    }, [flexion_img?.width, flexion_img?.height, extension_coor]);

    // const cnvrtLndmrkPos = ({ x, y }: { x: number | null, y: number | null }) => {
    //     if (x != null && y != null && flexion_img) {

    //         const { left, top, width, height } = getCoord;
    //         const xOnePix = (flexion_img.width / 100) * x;
    //         const yOnePix = (flexion_img.height / 100) * y;

    //         return {
    //             left: (100 / width) * (xOnePix - left) + "%",
    //             top: (100 / height) * (yOnePix - top) + "%"
    //         };
    //     }
    //     return {};
    // };

    // const handleResize = (_: any, data: any) => {
    //     const resizeData = { width: data.size.width, height: data.size.height }

    //     setVertibrae(((prev: DefaultLandmarksType) => ({ 
    //         ...prev, 
    //         extension_img: { ...prev.extension_img, resizeCoord: resizeData }
    //     })));
    // };

    // const handleStop = (_: any, data: any) => {
    //     if (data) {
    //         const posi = { x: data.x, y: data.y };
    //         setVertibrae(((prev: DefaultLandmarksType) => ({ 
    //             ...prev,
    //             extension_img: { ...prev.extension_img, position: posi }
    //         })));
    //     }
    // }

    return (
        <>
            {activeButton !== null && extension_img ? 
                // <Draggable
                //     disabled={isRotating}
                //     bounds="parent"
                //     handle=".handle"
                //     onStop={handleStop}
                //     defaultPosition={extension_img?.position ? extension_img.position : { x: getCoord.left, y: getCoord.top }}
                // >
                //     <div ref={containerRef}>
                //         <div style={{ transform: `rotate(${extension_img?.angle}deg)`, transition: 'transform 0.1s' }}>
                //             <ResizableBox
                //                 width={extension_img.resizeCoord ? extension_img.resizeCoord?.width : 100}
                //                 height={extension_img.resizeCoord ? extension_img.resizeCoord?.height : 100}
                //                 minConstraints={[50, 50]}
                //                 maxConstraints={[300, 300]}
                //                 onResize={handleResize}
                //             >
                //                 <div className="handle" style={{ width: '100%', height: '100%', position: 'relative' }}>
                //                     {/* {extension_coor.map((item) => (
                //                         <Image
                //                             src={icon_plus_yellow}
                //                             key={item.id}
                //                             style={{
                //                                 position: "absolute",
                //                                 background: "transparent",
                //                                 ...cnvrtLndmrkPos(item),
                //                                 transform: `rotate(${extension_img?.angle ? -extension_img.angle : 0}deg)` // Adjust the plus icons to counter the rotation
                //                             }}
                //                             alt="node"
                //                             height={iconWidth}
                //                             width={iconWidth}
                //                             className="node-plus-img flexion-icon-img"
                //                         />
                //                     ))} */}
                //                 </div>
                //             </ResizableBox>
                //             <button
                //                 className="btn-rotate landmark-rotate"
                //                 onMouseDown={handleRotateStart}
                //                 style={{
                //                     position: 'absolute',
                //                     right: '-25px', // Adjust based on rotation
                //                     bottom: '-25px', // Adjust based on rotation
                //                     transform: `rotate(${extension_img?.angle ? -extension_img.angle : 0}deg)` // Keep rotate icon upright
                //                 }}
                //             >
                //                 <Image
                //                     src={icon_rotate}
                //                     alt="icon_rotate"
                //                     height={21}
                //                     width={21}
                //                 />
                //             </button>
                //         </div>
                //     </div>
                // </Draggable>

                extension_coor.map((item) => (
                    <Image
                        src={icon_plus_yellow}
                        key={item.id}
                        style={{
                            position: "absolute",
                            left: item.x + "%",
                            top: item.y + "%",
                            background: "transparent",
                        }}
                        alt="node"
                        height={iconWidth}
                        width={iconWidth}
                        className="node-plus-img extention-icon-img"
                    />
                ))
            : null }

            {extension_img?.src ? <img src={extension_img.src} alt="xray1" className='xray1' /> : null}
        </>
    );
};

export default ExtensionLandmarks;
