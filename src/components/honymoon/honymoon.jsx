import styled from './honymoon.module.css'
import {Images} from "../../utils/constants";
import {Text} from "../../utils/texts/Text";
export const Honymoon = (props) => {
    const honymoonImages = [Images.honymoon1,Images.honymoon2,Images.honymoon3,Images.honymoon4];
    return(
        <>
            <div className={styled.honymoon}>
                <div className={styled.image}>
                    {honymoonImages.map((img,key)=>{
                        switch (key){
                            case 0 :
                                return(<div className={styled.honymoonKissing}><img src={img} alt={""} className={styled.honymoonKissingImg}/></div>)
                            case 1 :
                                return( <div className={styled.forehead}><img src={img}/> </div> )
                            case 2 :
                                return(<div className={styled.hug}><img src={img}/></div>)
                            default :
                                return(<div className={styled.circle}> <img src={img}/></div>)
                        }
                    })}
                    <div className={styled.honymoonSpecial}>
                        <Text text = "Honeymoon Specials" color = "#DF6951" fontSize = "18px" fontWeight = {700}/>
                        <Text text = "Our Romantic Tropical Destinations" color = "#181E4B" fontSize = "35px" fontWeight = {700} marginTop  = '1rem' marginBottom = '2rem'/>
                        <Text text = "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!" color = "black" fontSize = "12px" fontWeight = {400}/>

                    </div>
                </div>
            </div>
        </>
    )
}
