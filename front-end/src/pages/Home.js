import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Paises from '../pages/Paises';
import ModalRota from '../components/Modal/ModalRota';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';

class Home extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Paises />
                <ModalSearch />
                <ModalRota />
                <ModalMenu />
            </div>
        );
    }
}

export default Home;