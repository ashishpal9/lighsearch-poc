import { ReactElement } from "react";

export type BoxProps = {
  children: ReactElement;
};

export interface ViewportType { 
  mouseViewportX: number;
  mouseViewportY: number;
}

export interface DefaultLandmarksType {
  id: string;
  extension_coor: CoorType[];
  extension_img: null | ImageData;
  flexion_coor: CoorType[];
  flexion_img: null | ImageData;
  isSave: boolean;
}

export type CoorType = { x: null | number, y: null | number, id: string; }

export interface ImageData {
  src: string;
  width: number;
  height: number;
  angle?: number;
  position?: OriginType;
  resizeCoord?: null | ResizeType;
}


export interface OriginType {
  x: number;
  y: number;
  id?: string;
}


export interface DefaultVertebraeType {
  id: string | number;
  vertebrae_type: string;
  dicom_images: DicomImageDataType[];
  isSave: boolean;
}

export interface DicomImageDataType {
  id: number | string;
  src: string;
  width: number;
  height: number;
  angle: number;
  position: OriginType2;
  resizeCoord: ResizeType;
  landmark_coor: LandmarkCoorType[];
  isFixed: boolean;
}

export type LandmarkCoorType = { x: number, y: number, id: string; }

export interface OriginType2 {
  x: number;
  y: number;
  id?: string;
}

type ResizeType = { height: number; width: number }