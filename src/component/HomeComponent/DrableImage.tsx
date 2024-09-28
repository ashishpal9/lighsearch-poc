import Draggable from "react-draggable";
import Image from "next/image";
import { Resizable } from "react-resizable";
import icon_rotate from "@/assets/images/icons/icon_rotate.png";
import icon_plus_yellow from "@/assets/images/icons/icon_plus_yellow.png";
import { DefaultVertebraeType, DicomImageDataType } from "@/utils/types";
import { useEffect, useRef, useState } from "react";
import { iconWidth } from "@/utils/constant";

interface DrableImageType {
  item: DicomImageDataType;
  setVertibrae: Function;
  vertibrae: DefaultVertebraeType;
}

const DrableImage = ({ item, setVertibrae, vertibrae }: DrableImageType) => {

    const [isRotating, setIsRotating] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const startAngleRef = useRef(0);
    const initialAngleRef = useRef(item.angle); // Store the initial angle

    const handleRotateStart = (e: React.MouseEvent) => {
        if (!containerRef.current) return;

        const container = containerRef.current.getBoundingClientRect();
        const centerX = container.left + container.width / 2;
        const centerY = container.top + container.height / 2;

        startAngleRef.current = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
        setIsRotating(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isRotating || !containerRef.current) return;
        const container = containerRef.current.getBoundingClientRect();
        const centerX = container.left + container.width / 2;
        const centerY = container.top + container.height / 2;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
        const newRotation = initialAngleRef.current + (angle - startAngleRef.current);
        setVertibrae((prev: DefaultVertebraeType) => {
            let dicom_images = [...prev.dicom_images];
            const index = prev.dicom_images.findIndex(e => e.id === item.id);
            dicom_images[index].angle = newRotation;
            return {...prev, dicom_images}
        });
    };
  
    useEffect(() => {
        const handleMouseUp = () => {
            setIsRotating(false);
            initialAngleRef.current = item.angle;
        };

        if (isRotating) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isRotating, item.angle]);
    

    const handleOrigin = (e: any, data: any) => {
        if (e && data) {
            const x = data.x // - (data.node.parentElement.clientWidth / 2);
            const y = data.y // - (data.node.parentElement.clientHeight / 2);
            
            let dicom_images = [...vertibrae.dicom_images];
            const index = dicom_images.findIndex(e => e.id === item.id);
            dicom_images[index].position = {x, y};

            setVertibrae((prev: DefaultVertebraeType) => {
                return {...prev, dicom_images}
            });
        }
    };

    function resize(_: any, { size }: any) {
        const dimension = { width: size.width, height: size.height };
        setVertibrae((prev: DefaultVertebraeType) => {
            let dicom_images = [...prev.dicom_images];
            const index = prev.dicom_images.findIndex(e => e.id === item.id);
            dicom_images[index].resizeCoord = dimension;
            return { ...prev, dicom_images };
        });
    }


  return (
    <Draggable
      key={item.id}
      bounds="parent"
      handle=".handle"
      onStop={handleOrigin}
      // disabled={activeButton !== null && (vertibrae.extension_coor.length !== 4)}
      position={item.position}
    >
      
      <div
        ref={containerRef}
        className="containerRef"
      >
        <div
          style={{
            transform: `rotate(${item.angle}deg)`,
            position: "relative",
            transition: 'transform 0.1s'
          }}
        >
          <div className="handle cover-draggable"></div>
          <Resizable
            width={item.resizeCoord.width}
            height={item.resizeCoord.height}
            onResize={resize}
            className="resize-box"
          >
            <div
              style={{
                width: item.resizeCoord.width + "px",
                height: item.resizeCoord.height + "px",
              }}
            //   ref={imgRef}
            >
              <img
                src={item.src}
                alt="xray1"
                draggable={false}
                className="xray_img"
              />
            </div>
          </Resizable>
          {item.landmark_coor.map(item => (
            <Image
              src={icon_plus_yellow}
              key={item.id}
              style={{
                position: "absolute",
                // left: item.x + "%",
                // top: item.y + "%",

                left: item.x ? item.x : 0,
                top: item.y ? item.y : 0,
                background: "transparent",
              }}
              alt="node"
              height={iconWidth}
              width={iconWidth}
              className="node-plus-img extention-icon-img"
            />
          ))}
          <button className="btn-rotate" onMouseDown={handleRotateStart}>
            <Image src={icon_rotate} alt="icon_rotate" height={21} width={21} />
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default DrableImage;
