import React, { Component } from 'react';
import Header from '../components/Header/Header';

import ItemDetail from '../components/ItemDetails/ItemDetails';
import ModalMenu from '../components/Modal/ModalMenu';
import ModalRota from '../components/Modal/ModalRota';
import Scrollup from '../components/Scrollup/Scrollup';


class Detalhes extends Component {
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
                <ItemDetail />
                <ModalMenu />
                <ModalRota />
                <Scrollup />
            </div>
        );
    }
}
export default Detalhes;