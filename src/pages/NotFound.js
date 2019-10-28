import React from 'react';
import { Link } from 'react-router-dom';
import {
    Row
} from 'reactstrap';



function Notfound() {


    return (
        <Row>
            <div className="notfound-content">
                <Link to="/" className="logo">
                    MovieApp
                </Link>
                <div className="notfound-container">
                    <h1>4<span style={{ color: '#0091c9' }}>0</span>4</h1>
                    <h3>Sayfa Bulunamadı</h3>
                    <Link to="/" className="btn btn-primary btn-sm">HOME</Link>
                </div>
            </div>
        </Row>
    )
}



export default Notfound;