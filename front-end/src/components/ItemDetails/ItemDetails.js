import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import * as Api from '../../service/Api'


class ItemDetails extends Component {

    constructor ( props ) {
        super( props );

        this.state = {
            data: [],
            grupos: []
        }

    }


    componentDidMount() {

        const studentId = window.location.href.split( '/' )
        Api.getDetalhes( studentId[ 4 ] ).then( res => {
            this.setState( {
                data: res.data
            } )

            res.data.regionalBlocs?.map( ( bloco, k ) => {
                Api.ConsultaGrupos( bloco.acronym ).then( res => {
                    this.setState( {
                        grupos: res.data
                    } )
                } )
            } )
        } ).catch( err => console.log( err ) )


    }
    render() {
        return (
            <section className="item-details-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-5">
                            <div className="item-info">
                                <div className="item-thumb text-center">
                                    <img src={ this.state.data.flag } alt="" />
                                </div>
                                <div className="card no-hover countdown-times my-4 py-1">
                                    <div className="d-flex justify-content-between">
                                        <h4>Campital:</h4>
                                        <h4 className="ml-2 mb-0 ml-auto">
                                            { this.state.data.capital }
                                        </h4>
                                    </div>
                                </div>
                                {/* diogoCani Tab */ }
                                <ul className="diogoCani-tab nav nav-tabs" id="nav-tab">
                                    <li>
                                        <a className="active" id="nav-home-tab" data-toggle="pill" href="#nav-home">
                                            <h5 className="m-0">Blocos Econômicos</h5>
                                        </a>
                                    </li>
                                    <li>
                                        <a id="nav-profile-tab" data-toggle="pill" href="#nav-profile">
                                            <h5 className="m-0">Fuso Horários</h5>
                                        </a>
                                    </li>

                                </ul>
                                {/* Tab Content */ }
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-home">
                                        <ul className="list-unstyled">
                                            {/* Single Tab List */ }
                                            { this.state.data.regionalBlocs?.map( ( item, idx ) => {
                                                return (
                                                    <li key={ `tdo_${ idx }` } className="single-tab-list d-flex align-items-center">
                                                        <p className="m-0"><strong>{ item.acronym }</strong> { item.name } <br />
                                                            { item.otherAcronyms?.map( ( bloc, idxx ) => {
                                                                return ( <Badge bg="primary" className='mx-1 p-1'><b className='py-1'>{ bloc }</b></Badge> )
                                                            } ) }
                                                        </p>
                                                    </li>
                                                );
                                            } ) }
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="nav-profile">
                                        <ul className="list-unstyled">
                                            {/* Single Tab List */ }
                                            { this.state.data.timezones?.map( ( item, idx ) => {
                                                return (
                                                    <li key={ `tdt_${ idx }` } className="single-tab-list d-flex align-items-center">
                                                        <p className="m-0">Fuso horário: <strong>{ item }</strong></p>
                                                    </li>
                                                );
                                            } ) }
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            {/* Content */ }
                            <div className="content mt-5 mt-lg-0">
                                <h3 className="m-0">{ this.state.data.translations?.pt }</h3>

                                {/* Item Info List */ }
                                <div className="item-info-list mt-4">
                                    <ul className="list-unstyled">
                                        <li className="price d-flex justify-content-between">
                                            <span>Capital</span>
                                            <span> { this.state.data.capital }</span>
                                        </li>
                                        <li className="price d-flex justify-content-between">
                                            <span>População </span>
                                            <span>{ this.state.data.population }</span>
                                        </li>
                                        { this.state.data.languages?.map( ( item, k ) => {
                                            return (
                                                <li className="price d-flex justify-content-between">
                                                    <span>Língua </span>
                                                    <span key={ k }>{ item.name }</span>
                                                </li>
                                            )
                                        } ) }


                                        { this.state.data.currencies?.map( ( item, k ) => {
                                            return (
                                                <li className="price d-flex justify-content-between">
                                                    <span>Moeda </span>
                                                    <span key={ k }>{ item.name }</span>
                                                    <span key={ k }>{ item.code }</span>
                                                    <span key={ k }>{ item.symbol }</span>
                                                </li>
                                            )
                                        } ) }
                                    </ul>
                                </div>
                                <div className="row items">
                                    { this.state.grupos.map( ( pais, k ) => {
                                        return (
                                            <div key={ `sd_${ k }` } className="col-12 col-md-6 item px-lg-2">
                                                <div className="card no-hover">
                                                    <div className="single-seller d-flex align-items-center">
                                                        <a href={ `/detalhes/${ pais.alpha3Code }` }>
                                                            <img className="" width={ 30 } src={ pais.flag } alt="" />
                                                        </a>
                                                        <div className="seller-info ml-3">
                                                            <a className="seller mb-2" href={ `/detalhes/${ pais.alpha3Code }` }>{ pais.name }</a>
                                                            <span>{ pais.region }</span>
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
                    </div>
                </div>
            </section>
        );
    }
}

export default ItemDetails;