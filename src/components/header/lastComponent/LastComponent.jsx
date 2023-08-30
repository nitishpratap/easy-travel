import styled from './lastComponent.module.css'
import {Images} from "../../../utils/constants";
export const LastComponent = ()=>{
    const images = [Images.flyEirate,Images.trivago,Images.airbnb,Images.turkish, Images.swiss]
    return(
        <>
            <div className={styled.parent}>
                {images.map((img)=>{
                    return(<img src={img} alt={""} className={styled.images} width={'120px'} height = '35px'/>)
                })}
            </div>
        </>
    )
}
