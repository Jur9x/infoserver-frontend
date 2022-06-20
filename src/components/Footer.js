import React from 'react';
import './Footer.css';
import './HF.css';

export const Footer = (props) => {
    let year = new Date().getFullYear();
    return (
        <>
        <footer className='body'>
            <div className="fdiv5">a</div>
            <div className="fdiv4">a</div>
            <div className="fdiv3">a</div>
            <div className="fdiv2">a</div>
            <div className="fdiv1">a</div>
            <div className="fdiv"><span className="ftentext">&copy; <a className="copium" href="https://github.com/jur9x">jur9x</a> {year}</span></div>
        </footer>
        </>
    );
}
