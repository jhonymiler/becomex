import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import * as Api from '../../service/Api'


class DetalhesRota extends Component {

    constructor ( props ) {
        super( props );

        this.state = {
            data: [],
            grupos: [],
            de:{},
            para:{}        
        }

    }


    componentDidMount() {

        const studentId = window.location.href.split( '/' )

        Api.ListaRotas( studentId[ 4 ],studentId[ 5] ).then( res => {

            this.setState({
                de:res.dePara.de,
                para:res.dePara.para
            })

            this.setState({grupos:res.data})

        } )


    }
    render() {
        return (
            <section className="item-details-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-6">
                            <div className="item-info">
                                <div className="item-thumb text-center">
                                    <img src={ this.state.de.flag } alt="" />
                                </div>
                                <div className="card no-hover countdown-times my-4 py-1">
                                    <div className="d-flex justify-content-between">
                                        <h4>Origem:</h4>
                                        <h4 className="ml-2 mb-0 ml-auto">
                                            { this.state.de.name }
                                        </h4>
                                    </div>
                                </div>
                               
                               
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="item-info">
                                <div className="item-thumb text-center">
                                    <img src={ this.state.para.flag } alt="" />
                                </div>
                                <div className="card no-hover countdown-times my-4 py-1">
                                    <div className="d-flex justify-content-between">
                                        <h4>Destino:</h4>
                                        <h4 className="ml-2 mb-0 ml-auto">
                                            { this.state.para.name }
                                        </h4>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <h5>Rota</h5>
                        <div className="row items">
                            { this.state.grupos.map( ( pais, k ) => {
                                return (
                                    <div key={ `sd_${ k }` } className="col-12 col-md-6 item px-lg-2">
                                        
                                        <div className="card no-hover">
                                        <div className=' d-flex justify-content-between'>
                                            <div className="single-seller d-flex align-items-center">
                                                <a href={ `/detalhes/${ pais.alpha3Code }` }>
                                                    <img className="" width={ 30 } src={ pais.flag } alt="" />
                                                </a>
                                                <div className="seller-info ml-3">
                                                    <a className="seller mb-2" href={ `/detalhes/${ pais.alpha3Code }` }>{ pais.name }</a>
                                                    <span>{ pais.region }</span>
                                                </div>
                                            </div>
                                            <div>
                                           {k + 1}®
                                        </div>
                                        </div>
                                       
                                        </div>
                                        
                                    </div>
                                );

                            } )
                            }

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DetalhesRota;