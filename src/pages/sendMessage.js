import React, { Component }   from 'react';

import Fade from 'react-reveal';




class sendMessage extends Component {

    constructor(props){
        super(props);
        this.state={
            redirect: false,
        }
    }

    componentDidMount(){
        this.time = setTimeout(()=>{
            this.setState({redirect: true});
        }, 3000);
    }

    render(){

        if(this.state.redirect){
            
        window.location.href = 'http://localhost:8000/';

            return

        }
        return (
            <div className="message-container">
                <div className="message-content">
                    <Fade bottom>
                        <h3>Votre message a bien été envoyé !</h3>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default sendMessage;