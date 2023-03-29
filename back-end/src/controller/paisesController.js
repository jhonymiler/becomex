const paises = require( '../model/paises' );

/**
 * Lista todos os países
 * @param {*} req 
 * @param {*} res 
 * 
 * @return {json}
 */
exports.Lista = async ( req, res ) => {
    try {
        const dados = await paises.filtraOuLista( '/all?fields=name,alpha3Code,currencies,flag,regionalBlocs,translations' );
        res.send( dados );
    } catch ( error ) {
        res.status( 400 )
        return res.send( error.message );
    }
}


/**
 * Consulta paises pelo nome, código ou moeda
 * @param {*} req 
 * @param {*} res 
 * 
 * @return {json}
 */
exports.Consulta = async ( req, res ) => {
    try {
        const dados = await paises.filtraOuLista( `/${ req.params.campo }/${ req.params.valor }?fields=name,alpha3Code,currencies,flag,regionalBlocs,translations` );
        res.send( dados );
    } catch ( error ) {
        res.status( 400 )
        return res.send( error.message );
    }
}

exports.Detalhes = async ( req, res ) => {
    try {
        const lista = await paises.filtraOuLista( '/alpha/' + req.params.id );
        res.send( lista );
    } catch ( error ) {
        res.status( 400 )
        return res.send( error.message );
    }
}


exports.Grupo = async ( req, res ) => {
    try {
        const lista = await paises.filtraOuLista( '/regionalbloc/' + req.params.id + '?fields=name,alpha3Code,currencies,flag,regionalBlocs,translations' );
        res.send( lista );
    } catch ( error ) {
        res.status( 400 )
        return res.send( error.message );
    }
}

exports.Rota = async ( req, res ) => {
    try {
        const lista = await paises.filtraOuLista( '/all?fields=alpha3Code,borders,name,flag' );
        const dados = await paises.rota( lista, req.params.de, req.params.para );
        const paises_rotas = await paises.filtraOuLista(`/alpha?codes=${dados.rotas}`)
        res.send( {dePara:dados.dePara,rotas:paises_rotas} );
    } catch ( error ) {
        res.status( 400 )
        return res.send( error.message );
    }
}

exports.Matriz = async ( req, res ) => {
    try {
        const dados = await paises.listaMatriz();
        res.send( dados );
    } catch ( error ) {
        res.status( 400 )
        return res.send( error.message );
    }
}