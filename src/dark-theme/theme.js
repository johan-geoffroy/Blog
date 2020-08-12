


import backgrounHeaderDark from '../images/site-images/background-img-dark-pano.png';
import backgroundHeaderLight from '../images/site-images/background-img-light-pano.png';

//variable colors
const primaryWhite = '#ffffff';
const primaryBlack = '#000000';




export const lightTheme = {
    
    //style .header-content
    backgroundImg: backgroundHeaderLight,
    backgroundGradients:'linear-gradient(to bottom, rgba(255, 255, 255, 0.51), #ffffff);',
}

export const darkTheme = {

    primaryBlack: primaryBlack,
    primaryWhite: primaryWhite,

    body:'#101010',
    text:'rgb(255, 255, 255)',
    
    //style .header-content
    backgroundImg: backgrounHeaderDark,
    backgroundGradients:'linear-gradient(to bottom, rgba(16, 16, 16, 0.51), #101010)',

}