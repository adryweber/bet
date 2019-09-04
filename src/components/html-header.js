import React from 'react';
import { Helmet } from 'react-helmet';


export const HtmlHeader = ({ data }) => (
    <Helmet htmlAttributes={{lang: 'ru'}}>
        <meta charSet='utf-8' />
        <title>Прототип Fonbet</title>
        <link rel="shortcut icon" href="favicon.ico"></link>
    </Helmet>
);
