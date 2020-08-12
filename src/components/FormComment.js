import React, { Component } from 'react'





class FormComment extends Component {

    render(){



        return(
            <div className="view-all-comments">
                <span className="line-separator"></span>

                
                <div className="list-comments">
                    <p>Test</p>
                </div>

                <div className="form-comment">
                    <form>

                        <input className="form-control form-control-lg" type="text" placeholder="Name"/>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Laisser un commentaire</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <button type="submit" className="btn btn-primary mb-2">Valider</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormComment