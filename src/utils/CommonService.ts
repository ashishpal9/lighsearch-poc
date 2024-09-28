'use client';
import { toast } from 'react-toastify';
import { BehaviorSubject } from "rx";
import { DefaultVertebraeType, LandmarkCoorType, OriginType } from './types';

// for global loader service
export const isLoading = new BehaviorSubject<boolean>(false);

export const isDialogOpen = new BehaviorSubject<any>({
  open: false,
  data: { message: "Are you Sure?", title: "" },
  cancelText: "Cancel",
  confirmText: "Okay",
  onConfirm: () => { },
});

export const forSuccess = (message: string, id?: string) => 
  toast.success(message, { autoClose: 3000, toastId: id ? id : 1 })

export const forError = (message: string, id?: string) => 
  toast.error(message, { autoClose: 3000, toastId: id ? id : 1 })

export const forWarning = (message: string, id?: string) => 
  toast.warning(message, { autoClose: 3000, toastId: id ? id : 1 })

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

export const isPointInsideElement = (point: OriginType, element: HTMLButtonElement) => {
  const rect = element.getBoundingClientRect();
  return point.x > rect.left && point.x < rect.right && point.y > rect.top && point.y < rect.bottom;
}

export const getAngle = (point: OriginType) => {
  if (point.x < 0 && point.y > 0) {
    return 180 + (Math.atan(point.y / point.x) * 180 / Math.PI);
  }
  if (point.x > 0 && point.y < 0) {
    return 360 + (Math.atan(point.y / point.x) * 180 / Math.PI);
  }
  if (point.x < 0 && point.y < 0) {
    return 180 + (Math.atan(point.y / point.x) * 180 / Math.PI);
  }
  return Math.atan(point.y / point.x) * 180 / Math.PI;
}

export const trimCanvas = (canvas: HTMLCanvasElement) => {
  const context = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  if(context) {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;

    let top = 0, bottom = height, left = 0, right = width;
    let foundTop = false, foundBottom = false, foundLeft = false, foundRight = false;

    // Iterate over each row to find the top boundary
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const alpha = data[(y * width + x) * 4 + 3]; // Access the alpha channel
        if (alpha > 0) { // Non-transparent pixel found
          top = y;
          foundTop = true;
          break;
        }
      }
      if (foundTop) break;
    }

    // Iterate over each row to find the bottom boundary
    for (let y = height - 1; y >= 0; y--) {
      for (let x = 0; x < width; x++) {
        const alpha = data[(y * width + x) * 4 + 3];
        if (alpha > 0) {
          bottom = y + 1;
          foundBottom = true;
          break;
        }
      }
      if (foundBottom) break;
    }

    // Iterate over each column to find the left boundary
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const alpha = data[(y * width + x) * 4 + 3];
        if (alpha > 0) {
          left = x;
          foundLeft = true;
          break;
        }
      }
      if (foundLeft) break;
    }

    // Iterate over each column to find the right boundary
    for (let x = width - 1; x >= 0; x--) {
      for (let y = 0; y < height; y++) {
        const alpha = data[(y * width + x) * 4 + 3];
        if (alpha > 0) {
          right = x + 1;
          foundRight = true;
          break;
        }
      }
      if (foundRight) break;
    }

    // Calculate the trimmed dimensions
    const trimmedWidth = right - left;
    const trimmedHeight = bottom - top;

    // Create a new canvas with the trimmed dimensions
    const trimmedCanvas = document.createElement('canvas');
    trimmedCanvas.width = trimmedWidth;
    trimmedCanvas.height = trimmedHeight;
    const trimmedContext = trimmedCanvas.getContext('2d');
    if(trimmedContext) {
      // Draw the trimmed content onto the new canvas
      trimmedContext.drawImage(canvas, left, top, trimmedWidth, trimmedHeight, 0, 0, trimmedWidth, trimmedHeight);
    }
    return trimmedCanvas;
  }
}


// export const createFlexionCoorOld = (vertibrae: DefaultLandmarksType): (CoorType | null)[] => {
//   return vertibrae.extension_coor.map(e => {
//       if (
//           vertibrae.flexion_img &&
//           vertibrae.flexion_img.position &&
//           vertibrae.extension_img &&
//           e.x !== null &&
//           e.y !== null
//       ) {
//           // Calculate left and top % of fixed image width;
//           const leftPx = (e.x / 100) * vertibrae.extension_img.width;
//           const topPx = (e.y / 100) * vertibrae.extension_img.height;

//           // Calculate left and top from center point of drag area
//           const left = leftPx - (vertibrae.extension_img.width / 2);
//           const top = topPx - (vertibrae.extension_img.height / 2);

//           // Calculate left and top of draggble image from center point of drag area
//           const imgPosX = vertibrae.flexion_img.position.x - (vertibrae.flexion_img.width / 2);
//           const imgPosY = vertibrae.flexion_img.position.y - (vertibrae.flexion_img.height / 2);

//           // Calculate left and top of landmark for draggble image
//           const x = imgPosX - left;
//           const y = imgPosY - top;

//           // if both image is not superimposed then return null
//           if (imgPosX > left || imgPosY > top) {
//               return null;
//           }
//           return { ...e, x: Math.abs(x), y: Math.abs(y) };
//       }
//       return e;
//   });
// };



export const createFlexionCoor = (vertibrae: DefaultVertebraeType): (LandmarkCoorType | null)[] => {
  return vertibrae.dicom_images[0].landmark_coor.map(e => {
      if (
          vertibrae?.dicom_images[1] &&
          vertibrae.dicom_images[0] && // extension_img
          e.x !== null &&
          e.y !== null
      ) {
          // Calculate left and top % of fixed image width;
          const leftPx = (e.x / 100) * vertibrae.dicom_images[0].width;
          const topPx = (e.y / 100) * vertibrae.dicom_images[0].height;

          // Calculate left and top from center point of drag area
          const left = leftPx - (vertibrae.dicom_images[0].width / 2);
          const top = topPx - (vertibrae.dicom_images[0].height / 2);

          // Calculate left and top of draggble image from center point of drag area
          const imgPosX = vertibrae.dicom_images[1].position.x - (vertibrae.dicom_images[1].resizeCoord.width / 2);
          const imgPosY = vertibrae.dicom_images[1].position.y - (vertibrae.dicom_images[1].resizeCoord.height / 2);

          // Calculate left and top of landmark for draggble image
          const x = imgPosX - left;
          const y = imgPosY - top;

          // if both image is not superimposed then return null
          if (imgPosX > left || imgPosY > top) {
              return null;
          }
          return { ...e, x: Math.abs(x), y: Math.abs(y) };
      }
      return e;
  });
};