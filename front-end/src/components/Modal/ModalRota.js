import React, { Component } from "react"
import { createBrowserHistory } from "history"
import Select from 'react-select'
import * as Api from '../../service/Api'




class ModalRota extends Component {
    constructor ( props ) {
        super( props );

        this.state = {
            dados: [],
            origem: {},
            destino: {}
        }

        this.handleChangeOrigem = this.handleChangeOrigem.bind( this );
        this.handleChangeDestino = this.handleChangeDestino.bind( this );
    }

    handleChangeOrigem( event ) {
        this.setState( {
            origem: event
        } );
    }
    handleChangeDestino( event ) {
        this.setState( {
            destino: event
        } );
    }

   
    handleSubmit(origem,destino) {
        const history = createBrowserHistory({
            basename: "/"
          })
          window.location.href = `/rotas/${origem}/${destino}`;
    }


    componentDidMount() {

        Api.Lista().then( res => {
            var paises = res.data.map( pais => {
                return {
                    value: pais.alpha3Code,
                    label: pais.translations?.pt
                }
            } )
            this.setState( {
                dados: paises
            } )
        } ).catch( err => console.log( err ) )
        console.log(this.state.dados)

    }
    render() {
        return (
            <div className="modal fade" id="rota" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Escolha o país para traçar a rota</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label for="recipient-name" className="col-form-label">Origem:</label>
                                <Select options={ this.state.dados } value={this.state.origem}  onChange={ this.handleChangeOrigem }  />
                            </div>
                            <div className="form-group">
                                <label for="message-text" className="col-form-label">Destino:</label>
                                <Select options={ this.state.dados } value={this.state.destino}  onChange={this.handleChangeDestino }  />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary"  onClick={()=>{this.handleSubmit(this.state.origem.value,this.state.destino.value)}}>Enviar</button>
                    </div>
                </div>
            </div >
        </div >
        )
    }
}

export default ModalRota