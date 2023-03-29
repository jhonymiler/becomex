const express = require( 'express' );
const router = express.Router();
const paisesController = require( '../controller/paisesController' )

// Rota inicial para primeira listagem
router.get( '/', paisesController.Lista );

// Rota para consultar paises
router.get( '/consulta/:campo/:valor', paisesController.Consulta )

// Retorna os detalhes do pais
router.get( '/detalhes/:id', paisesController.Detalhes )

// Rota para montar matriz para traçar rotas
router.get( '/rota/:de/:para', paisesController.Rota )

// Rota para montar matriz para traçar rotas
router.get( '/grupo/:id', paisesController.Grupo )


module.exports = router;