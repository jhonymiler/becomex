
import { Badge } from 'react-bootstrap';

function Cards( props ) {
    return (
        <div className="row items explore-items">
            { props.paises.map( ( item, idx ) => {
                let grupo = `["${ item.group?.join( '","' ) }"]`
                return (
                    <div key={ `paises_${ idx.toString() }}_${ idx.toString() }` } className="col-12 col-lg-3 item explore-item" data-groups={ grupo }>
                        <div className="card">
                            <div className="image-over">
                                <a href={ `/detalhes/${ item.alpha3Code }` }>
                                    <img className="card-img-top" src={ item.flag } alt="" />
                                </a>
                            </div>
                            <div className="card-caption col-12 p-0">
                                <div className="card-body">
                                    <a href={ `/detalhes/${ item.alpha3Code }` } >
                                        <h5 className="mb-0">{ item.translations.pt }</h5>
                                    </a>
                                    { item.currencies?.map( ( moeda, k ) => {
                                        return (
                                            <div key={ `moedas_${ k }` } className="seller d-flex align-items-center my-3">
                                                <span>{ moeda.name } <b>({ moeda.code })</b> </span>
                                                <h3 className="ml-2 mb-0 ml-auto">
                                                    <Badge bg="success">{ moeda.symbol }</Badge>
                                                </h3>
                                            </div>
                                        )
                                    } ) }

                                    <div className="card-bottom d-flex justify-content-between">
                                        <span>Bloco Econômicos</span>
                                        <h5 className="ml-2 mb-0 ml-auto">
                                            <Badge bg="primary">{ item.group?.join( ',' ) }</Badge>
                                        </h5>
                                    </div>

                                    <a className="btn btn-bordered-white btn-smaller mt-3" href={ `/detalhes/${ item.alpha3Code }` }><i className="icon-handbag mr-2" />Detalhes</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            } ) }
        </div>
    )
}

export default Cards