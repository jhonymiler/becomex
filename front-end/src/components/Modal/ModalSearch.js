import React, { Component } from 'react';
import * as Api from '../../service/Api'

const initData = {
    menuName: "Pesquisar",
    menuIcon: "far fa-times-circle icon-close",
    heading: "Encontre um país",
    content: "Pesquise pelo nome, código ou moeda",
    btnText: "Pesquisar"
}

class ModalSearch extends Component {

    constructor ( props ) {
        super( props );
        this.form = { value: 'Consutla' };

        this.handleSubmit = this.handleSubmit.bind( this );
    }


    handleSubmit( event ) {

        Api.Consulta( this.form.value ).then( res => {
            this.setState( {
                data: res.data,
            } )
        } )
            .catch( err => console.log( err ) )
        event.preventDefault();
    }


    state = {
        data: {}
    }


    componentDidMount() {
        this.setState( {
            data: initData
        } )

    }
    render() {
        return (
            <div id="search" className="modal fade p-0">
                <div className="modal-dialog dialog-animated">
                    <div className="modal-content h-100">
                        <div className="modal-header" data-dismiss="modal">
                            { this.state.data.menuName } <i className={ this.state.data.menuIcon } />
                        </div>
                        <div className="modal-body">
                            <form className="row" onSubmit={ this.handleSubmit }>
                                <div className="col-12 align-self-center">
                                    <div className="row">
                                        <div className="col-12 pb-3">
                                            <h2 className="search-title mt-0 mb-3">{ this.state.data.heading }</h2>
                                            <p>{ this.state.data.content }</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 input-group mt-4">
                                            <input type="text" placeholder="Digite para pesquisar" value={ this.state.value } onChange={ this.handleChange } />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 input-group align-self-center">
                                            <button className="btn btn-bordered-white mt-3">{ this.state.data.btnText }</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalSearch;