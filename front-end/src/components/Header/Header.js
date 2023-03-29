import React from 'react';

const Header = () => {
    return (
        <header id="header">
            <nav data-aos="zoom-out" data-aos-delay={ 800 } className="navbar navbar-expand">
                <div className="container header d-flex justify-content-start pl-5">
                    <a className="navbar-brand" href="/">
                        <img className="navbar-brand-sticky" src="/img/logo.svg" alt="Becomex" width="150x" />
                    </a>
                    <ul className="navbar-nav items">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav icons ml-auto">
                        <li className="nav-item" title='Trace a rota'>
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#rota">
                                <i className="fas fa-truck" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#search">
                                <i className="fas fa-search" />
                            </a>
                        </li>

                    </ul>
                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                <i className="fas fa-bars toggle-icon m-0" />
                            </a>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    );
};

export default Header;