
import cliente from 'axios'
import 'dotenv'

const axios = cliente.create( {
    baseURL: process.env.REACT_APP_API_URL
} );


export async function Lista() {
    const response = await axios.get( '/' );
    return {
        data: response.data
    }
}

export async function ListaRotas(de,para) {
    const paises = await axios.get( `/rota/${de}/${para}` )
    return {
        dePara:paises.data.dePara,
        data: paises.data.rotas
    }
    
}

export async function Consulta( campo, parametros ) {
    const response = await axios.get( '/consulta/' + campo + '/' + parametros );
    return {
        data: response.data
    }
}

export async function ConsultaGrupos( grupo ) {
    const response = await axios.get( '/grupo/' + grupo );
    return {
        data: response.data
    }
}

export async function getDetalhes( id ) {
    const response = await axios.get( '/detalhes/' + id );
    return {
        data: response.data
    }
}

