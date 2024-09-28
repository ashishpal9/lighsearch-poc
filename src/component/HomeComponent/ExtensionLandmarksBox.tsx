import React, { useEffect, useMemo, useRef, useState } from "react";
import { iconWidth } from "@/utils/constant";
import { CoorType, DefaultLandmarksType, DicomImageDataType, ImageData } from "@/utils/types";
import Image from "next/image";
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import icon_plus_yellow from "@/assets/images/icons/icon_plus_yellow.png";
import icon_rotate from "@/assets/images/icons/icon_rotate.png";

interface ExtensionLandmarksProps {
    // extension_coor: CoorType[];
    // extension_img: ImageData | null;
    // flexion_img: ImageData | null;
    // activeButton: number | null;
    // setLandmarks: Function;
    setVertibrae: Function;
    item: DicomImageDataType;
}
// extension_coor, extension_img, flexion_img, activeButton, setLandmarks
const ExtensionLandmarks: React.FC<ExtensionLandmarksProps> = ({ item, setVertibrae }) => {

    // useEffect(() => {
    //     if(flexion_img && extension_coor.length === 4) {
    //        const { height, width } = getCoord;

    //         setVertibrae(((prev: DefaultLandmarksType) => ({ 
    //             ...prev, 
    //             extension_img: { ...prev.extension_img, resizeCoord: { height, width } }
    //         })));
    //     }
    // },[flexion_img, extension_coor]);

    // const getCoord = useMemo(() => {
    //     if (!flexion_img || extension_coor.length !== 4) return { left: 0, top: 0, width: 0, height: 0 };

    //     const minLeft = Math.min(...extension_coor.map(e => e.x ?? 0));
    //     const maxLeft = Math.max(...extension_coor.map(e => e.x ?? 0));
    //     const minTop = Math.min(...extension_coor.map(e => e.y ?? 0));
    //     const maxTop = Math.max(...extension_coor.map(e => e.y ?? 0));

    //     const left = (flexion_img.width / 100) * minLeft;
    //     const top = (flexion_img.height / 100) * minTop;
    //     const width = ((flexion_img.width / 100) * maxLeft) - (left - iconWidth);
    //     const height = ((flexion_img.height / 100) * maxTop) - (top - iconWidth);
    //     return { left, top, width, height };
    // }, [flexion_img?.width, flexion_img?.height, extension_coor]);

    return (
        <>
            {item.landmark_coor.map((item) => (
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
                ))}

            {item?.src ? <img src={item?.src} alt="xray1" className='xray1' /> : null}
        </>
    );
};

export default ExtensionLandmarks;
