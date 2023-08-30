import {Text} from "../../../utils/texts/Text";
import styled from './message.module.css';
import {durationDropdown, Images, travelTypeDropdown} from "../../../utils/constants";
import {useState} from "react";
import {Button} from "../../../utils/buttons/Button";

export const Message = () => {
    const renderImages = [Images.person1, Images.person2, Images.person3, Images.person5, Images.person5]
    const [travelType, setTravelType] = useState('');
    const [duration, setDuration] = useState('')


    const handleOptionChange = (event) => {
        setTravelType(event.target.value);
    };

    const handleDurationChange = (event) =>{
        setDuration(event.target.value);
    }

    const submit = () => {
        console.log("submitted");
    }

    return (
        <>
            <div className={styled.message}>
                <img src={Images.snakeLikeImg} alt="snke"/>
                <div className={styled.messageText}>
                    <Text text="No matter where you're going to, we'll take you there" fontWeight={700}
                          fontSize={'35px'} fontColor={"white"}/>
                </div>
                <div className={styled.inputField}>
                    <input type="text" placeholder="Where to?" style={{padding :"10px"}}/>
                    <select className={styled.dropdown} value={travelType} onChange={handleOptionChange}>
                        {travelTypeDropdown.map((type)=>{
                            return(<option value={type}>{type}</option>)
                        })}
                    </select>

                    <select className={styled.dropdown} value={duration} onChange={handleDurationChange}>
                        {durationDropdown.map((duration)=>{
                            return ( <option value={duration}>{duration}</option>)
                        })}>
                    </select>
                    <div className={styled.submitButton}>
                        <Button text="Submit" backgroundColor="#DF6951" onClick={submit} height='35px' width='120px'
                                fontSize='14px' fontWeight='600'/>
                    </div>
                </div>

                <div style={{display : 'flex'}}>
                    {renderImages.map((imgName) => {
                        return (<img src={imgName} alt={"img"} className={styled.personImages}/>)
                    })}
                    <Text text="2,500 people booked Tommorowland Event in last 24 hours"
                          fontColor="white" fontWeight="700" fontSize='10px' marginTop = '27px' marginLeft = "2rem"/>
                </div>
            </div>

        </>
    )
}
