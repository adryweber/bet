import React from "react";
import { HtmlHeader } from '../html-header';
import { ModelNav } from './model-nav/model-nav';
import "./layout.css";

import header from '../../../static/header.png';
import searchNav from '../../../static/search-nav.png';
import rightCol from '../../../static/right-col.png';
import footer from '../../../static/footer.png';


const Layout = ({children}) => (
    <div className='pageWrapper'>
        <ModelNav />
        <HtmlHeader />
        <div className='page'>
            <div className='page-row'>
                <img alt='header' src={header} className='header' />
            </div>
            <div className='page-row  page-row-paddings'>
                <div className='content'>
                    <img alt='search-nav' src= {searchNav} className='search-nav' />
                    { children }
                </div>
                <div className='right-col'>
                    <img alt='right-col' src= {rightCol} className='right-col' />
                </div>
            </div>
            <div className='page-row'>
                <img alt='footer' src= {footer} className='footer' />
            </div>
        </div>
    </div>
)
export { Layout }



