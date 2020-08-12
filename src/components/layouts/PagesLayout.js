import React,{Component} from 'react'


//import libs
import Anime from 'animejs'

//import styled components
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../dark-theme/theme';
import { GlobalStyles } from '../../dark-theme/GobalStyles';

//import custom function


//import custom coponents
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import CookieBanner from '../CookieBanner';

class PageLayout extends Component {

    constructor(props){
        super(props);

        this.state = {
            activeBtnMenu: '',
            // themeSelected : 'light',
            // btnActiveMode:'disable',
        }

        this.swipeMenu = this.swipeMenu.bind(this);
        // this.switchTheme = this.switchTheme.bind(this);
    }




    swipeMenu(){

        if(this.state.activeBtnMenu === ''){

            this.setState({activeBtnMenu:'open'})

            Anime({
                targets:'.page-content',
                translateX: 871,
                duration: 1000,
                easing: 'easeInOutExpo',
            });
        } else{

            this.setState({activeBtnMenu:''})

            Anime({
                targets:'.page-content',
                translateX: 0,
                duration: 1000,
                easing: 'easeInOutExpo'
            });
        }
    }



    // switchTheme(event) {

    //     event.preventDefault();

    //     if(this.state.themeSelected === 'light'){

    //         this.setState({themeSelected: 'dark'});
    //     } else {

    //         this.setState({themeSelected: 'light'});
    //     }

    // }




    render(){
        
        const children = this.props.children;


        return(
            <ThemeProvider theme={ lightTheme }>
                <div className="main container-fluid" id="main">
                    <GlobalStyles />
                        <Sidebar/>

                        <Navbar
                            clickHandler={this.swipeMenu}
                            activeClass = {this.state.activeBtnMenu}
                            // callFunction = {this.switchTheme}
                            // themeSelected = {this.state.themeSelected}
                        />

                        <CookieBanner/>

                        <div className={`page-content  ${this.state.activeBtnMenu}`}>
                                <div className="wrapper-content">
                                    {children}
                                </div>
                            <Footer />
                        </div>
                    </div>
            </ThemeProvider>
        )
    }
}


export default PageLayout