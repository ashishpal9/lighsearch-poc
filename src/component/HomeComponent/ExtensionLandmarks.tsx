import { iconWidth } from "@/utils/constant";
import { CoorType } from "@/utils/types"
import Image from "next/image";
import Draggable from 'react-draggable';
import icon_plus_yellow from "@/assets/images/icons/icon_plus_yellow.png";

interface ExtensionLandmarks {
    extension_coor: CoorType[];
    imgData: { src: string, width: number, height: number }
}

const ExtensionLandmarks = ({ extension_coor, imgData }: ExtensionLandmarks) => {
    const handleStop = (e: any) => {
        console.log(e)
    }

    const cnvrtLndmrkPos = ({x, y}: { x: number | null, y: number | null }) => {
        // convert copy landmark position to set draggable box
        if(x && y) {
            const xLeft = (imgData.width / 100) * x;
            const yTop = (imgData.height / 100) * y;

            return { x: xLeft, y: yTop }
        }
         return { x: 0, y: 0 }
    }

    return (
            extension_coor.map((item) => (
                <Draggable bounds="parent" handle=".haddle-icon" onStop={handleStop} defaultPosition={cnvrtLndmrkPos(item)} key={item.id}>
                    <span className="haddle-icon" style={{ height: iconWidth, width: iconWidth }}>
                        <Image
                            src={icon_plus_yellow}
                            key={item.id}
                            style={{
                                pointerEvents: "none",
                                background: "transparent"
                            }}
                            alt="node"
                            height={iconWidth}
                            width={iconWidth}
                            className="node-plus-img"
                        />
                    </span>
                </Draggable>
            ))
    )
}

export default ExtensionLandmarks