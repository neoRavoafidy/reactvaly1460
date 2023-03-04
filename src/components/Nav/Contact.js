import React from 'react';
import Table from '../Table';
import Navbar from './Nav';

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
            <p>Je suis le Contact</p>
                <div className="row">
                    <div className="col-8">
                        <div className="comente"></div>
                        <Table/>
                    </div>
                    <div className="col-4">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
