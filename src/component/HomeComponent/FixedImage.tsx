import { DefaultVertebraeType, DicomImageDataType } from '@/utils/types';
import { useRef } from 'react'
import ExtensionLandmarks from './ExtensionLandmarksBox';
import { generateUUID } from '@/utils/CommonService';

interface DrableImageType {
    item: DicomImageDataType;
    setVertibrae: Function;
    vertibrae: DefaultVertebraeType;
}
const FixedImage = ({item, setVertibrae, vertibrae}: DrableImageType) => {
    const comparatoRef = useRef<HTMLDivElement | null>(null);

    const handleCreateLandmark = (e: React.MouseEvent<HTMLButtonElement>) => {
        const landmark_coor = [...item.landmark_coor];
        if (landmark_coor.length < 4) {

            // Convert pixel to percentage
            const x = ((e.nativeEvent.offsetX + 6) / item.width) * 100;
            const y = ((e.nativeEvent.offsetY + 6) / item.height) * 100;
            const position = { x, y, id: generateUUID() };
            landmark_coor.push(position);
            setVertibrae((prev: DefaultVertebraeType) => {
                let dicom_images = [...prev.dicom_images];
                const index = prev.dicom_images.findIndex(e => e.id === item.id);
                dicom_images[index].landmark_coor = landmark_coor;
                return {...prev, dicom_images}
            });
        }
    };

    return (
        <div className="analys-comparator addExtraclass" ref={comparatoRef}>
                {item.landmark_coor.length !== 4 && vertibrae.vertebrae_type ? <button className='create-landmark' onClick={handleCreateLandmark}></button> : null}

                <ExtensionLandmarks
                    item={item}
                    setVertibrae={setVertibrae}
                />
        </div>
    )
}

export default FixedImage