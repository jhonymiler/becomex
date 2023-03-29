import React, { Component } from 'react';
import Header from '../components/Header/Header';

import DetalhesRota from '../components/DetalhesRota/DetalhesRota';
import ModalMenu from '../components/Modal/ModalMenu';
import ModalRota from '../components/Modal/ModalRota';
import Scrollup from '../components/Scrollup/Scrollup';


class Rotas extends Component {
    constructor ( props ) {
        super( props );

        this.state = {
            data: []
        }

    }


    render() {
        return (
            <div className="main">
                <Header />
                <DetalhesRota />
                <ModalMenu />
                <ModalRota />
                <Scrollup />
            </div>
        );
    }
}
export default Rotas;