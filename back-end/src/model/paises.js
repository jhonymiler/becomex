const axios = require( 'axios' ).default;


/**
 * Recebe os valores para consulta de rota
 * @param {String} de Local de origem
 * @param {String} para Local de destino
 * @returns {Array}
 */
exports.rota = async ( lista, de, para ) => {
    try {
        de = de.toUpperCase();
        para = para.toUpperCase();

        let resultadoado = varreduraLarguraProfundidade( lista, de, para )


        var _de = {}
        var _para = {}
        for(i=0; i< lista.length; i++){
            if(lista[i].alpha3Code == de){
                _de = lista[i]

            }else if(lista[i].alpha3Code == para){
                _para = lista[i]
            }
        }

        console.log(resultadoado.join(','))

        return {
           rotas: resultadoado.join(','),
           dePara:{de:_de,para:_para}
        }
    } catch ( error ) {
        return error
    }
}

/**
 * Realiza a listagem completa dos dados
 * @returns {Array}
 */
exports.filtraOuLista = async ( parametros ) => {
    try {
        param = parametros ? parametros : '/all'
        const lista = await axios.get( param );
        return lista.data

    } catch ( error ) {
        return error
    }
}


/**
 * Algoritmo de Dijkstra para varredura de largura e profundidade
 *  * 
 * @param {Array} lista Array com todos os dados
 * @param {String} de   String alpha3Code do local de origem
 * @param {String} para String alpha3Code do local de destino
 * @returns {Array}
 */
function varreduraLarguraProfundidade( lista, de, para ) {
    var destino = {};
    var percursoAnterior = {};
    var vertices = [];

    for ( var i = 0; i < lista.length; i++ ) {
        var pais = lista[ i ];
        destino[ pais.alpha3Code ] = Infinity;
        percursoAnterior[ pais.alpha3Code ] = null;
        vertices.push( pais );
    }
    destino[ de ] = 0;

    while ( vertices.length > 0 ) {
        // Encontre o vértice com o menor caminho.
        var u = vertices.reduce( function ( p, current ) { return !p || destino[ current.alpha3Code ] <= destino[ p.alpha3Code ] ? current : p; }, null );
        const index = vertices.indexOf( u );
        vertices.splice( index, 1 );
        if ( u.borders && Array.isArray( u.borders ) ) {
            for ( var i = 0; i < u.borders.length; i++ ) {
                var v = u.borders[ i ];
                const alt = destino[ u.alpha3Code ] + 1;
                if ( alt < destino[ v ] ) {
                    destino[ v ] = alt;
                    percursoAnterior[ v ] = u;
                }
            }
        }
    }
    var resultado = [];
    while ( para ) {
        resultado.splice( 0, 0, para );
        para = percursoAnterior[ para ] ? percursoAnterior[ para ].alpha3Code : null;
    }
    // Qualquer retorno de array vazio significa que não há caminho. Por exemplo, um dos países é uma ilha.
    if ( resultado.length === 1 ) {
        return [];
    }
    return resultado;
}



