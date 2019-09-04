import React from "react";
import data from "../../static/data.json";
import { Layout } from '../components/layout/layout';
import { Sport } from '../components/table/table';

// Делаем поле с названием игры
for (let i=0; i < data.length; i++) {
    data[i].play = data[i].team1 + ' ' + data[i].team2;
}
// Получаем все виды спорта в текущих данных
let sports = Array.from(data.reduce((acc, elem) => acc.add(elem.sport), new Set()));


const IndexPage = () => (
    <Layout>
        { sports.map((sport, index) => <Sport key={index} idxSport={index} {...{data, sport}}/>) }
    </Layout>
)


export default IndexPage
