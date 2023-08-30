import React from 'react';
import img from '../../assets/images/home_page.png';
import {Navbar} from "./navbar/Navbar";
import {Message} from "./messages/Message";
import {LastComponent} from "./lastComponent/LastComponent";
import {Category} from "./category/Category";

export const Header = () => {
    const backgroundStyles = {
        backgroundImage: `url(${img})`, // Use the imported img variable
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100vw',
        height: '80vh',
        overflow : 'hidden'
    };

    return (
        <>
            <div style={backgroundStyles}>
                <Navbar/>
                <Message/>
            </div>
            <LastComponent/>
            <Category/>
        </>


    );
};
