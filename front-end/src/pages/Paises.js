import React, { Component } from "react"
// import Sidebar from "../components/Sidebar/Sidebar"
import * as Api from '../service/Api'
import Header from "../components/Header/Header";
import ModalMenu from "../components/Modal/ModalMenu";
import Cards from '../components/Cards/Cards'

const initData = {
    menuName: "Pesquisar",
    menuIcon: "far fa-times-circle icon-close",
    heading: "Encontre um país",
    content: "Pesquise pelo nome, código ou moeda",
    btnText: "Pesquisar"
}


class Paises extends Component {
    constructor ( props ) {
        super( props );

        this.state = {
            data: [],
            DadosIniciais: initData,
            form: '',
            check: 'name'
        }
        this.handleChangeCheck = this.handleChangeCheck.bind( this );
        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    handleChange( event ) {
        this.setState( {
            form: event.target.value
        } );
    }

    handleChangeCheck( event ) {
        this.setState( {
            check: event.target.value
        } );
    }


    handleSubmit( event ) {

        Api.Consulta( this.state.check, this.state.form ).then( res => {
            console.log( res.data )

            this.setState( {
                data: res.data
            } )
        } ).catch( err => console.log( err ) )
        event.preventDefault();
        return false
    }


    componentDidMount() {
        Api.Lista().then( res => {
            this.setState( {
                data: res.data
            } )

        } )
            .catch( err => console.log( err ) )
    }
    render() {



        return (
            <>
                <section className="explore-area" >
                    <div className="container">
                        <div className="row">
                            <div className='col-lg-12 '>

                                <Cards paises={ this.state.data } />
                            </div>
                        </div>
                    </div>
                </section >
                <div id="search" className="modal fade p-0">
                    <div className="modal-dialog dialog-animated">
                        <div className="modal-content h-100">
                            <div className="modal-header" data-dismiss="modal">
                                { this.state.DadosIniciais.menuName } <i className={ this.state.DadosIniciais.menuIcon } />
                            </div>
                            <div className="modal-body">
                                <form className="row" onSubmit={ this.handleSubmit }>
                                    <div className="col-12 align-self-center">
                                        <div className="row">
                                            <div className="col-12 pb-3">
                                                <h2 className="search-title mt-0 mb-3">{ this.state.DadosIniciais.heading }</h2>
                                                <p>{ this.state.DadosIniciais.content }</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 input-group mt-4">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="consulta" id="inlineRadio1" value="name"
                                                        checked={ this.state.check === "name" }
                                                        onChange={ this.handleChangeCheck } />

                                                    <label className="form-check-label" for="inlineRadio1">Nome</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="consulta" id="inlineRadio2" value="alpha"
                                                        checked={ this.state.check === "alpha" }
                                                        onChange={ this.handleChangeCheck } />
                                                    <label className="form-check-label" for="inlineRadio2">Código</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="consulta" id="inlineRadio3" value="currency"
                                                        checked={ this.state.check === "currency" }
                                                        onChange={ this.handleChangeCheck } />
                                                    <label className="form-check-label" for="inlineRadio3">Moeda (sigla)</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 input-group mt-4">
                                                <input type="text" placeholder="Digite para pesquisar" value={ this.state.form } onChange={ this.handleChange } />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 input-group align-self-center">
                                                <button className="btn btn-bordered-white mt-3">{ this.state.DadosIniciais.btnText }</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Paises