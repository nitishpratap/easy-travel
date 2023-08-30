import {Text} from "../../../utils/texts/Text";
import styled from './navbar.module.css'
import {Button} from "../../../utils/buttons/Button";
import React from "react";
import {Images} from "../../../utils/constants";

export const Navbar = () => {
    const getInTouch = () => {
        console.warn("Touched")
    }
    return (
        <>
            <div>
                <div  className={styled.navbar}>
                    <div>
                        <div>
                            <Text text="Travel" fontSize='31px' fontColor='white' fontWeight='700' />
                        </div>
                        <img className={styled.arrowImage} src={Images.arrow} alt={"arrow"}/>
                    </div>
                    <div className={styled.innerFlexNavbar}>
                        <Text text="Home" fontSize='17px' fontColor='white' fontWeight='500'/>
                        <Text text="About" fontSize='17px' fontColor='white' fontWeight='500'/>
                        <Text text="Services" fontSize='17px' fontColor='white' fontWeight='500'/>
                        <Text text="Upcoming Packages" fontSize='17px' fontColor='white' fontWeight='500'/>
                    </div>
                    <Button text="Get in Touch" onClick={getInTouch} backgroundColor='#DF6951'/>
                </div>
            </div>
        </>
    )
}
