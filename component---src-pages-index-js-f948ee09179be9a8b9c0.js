(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{191:function(e,t,o){"use strict";o.r(t);o(130),o(22),o(29),o(30),o(13),o(96),o(91),o(135);var a=o(0),n=o.n(a),c=o(214),r=(o(215),function(e){return"Теннис"!==e});function s(e){return e=(e=Number(e)).toFixed(2)}o(216);for(var m=0;m<c.length;m++)c[m].play=c[m].team1+" "+c[m].team2;var f=Array.from(c.reduce(function(e,t){return e.add(t.typeSport)},new Set)),l=function(e){var t=e.sport,o=Array.from(c.filter(function(e){return e.typeSport===t}).reduce(function(e,t){return e.add(t.match)},new Set));return n.a.createElement("div",{className:"sport"},n.a.createElement("div",{className:"sport-title"},n.a.createElement("b",null,t)),o.map(function(e,o){return n.a.createElement(d,Object.assign({key:o},{sport:t,match:e}))}))},d=function(e){var t=e.sport,o=e.match,a=Array.from(c.filter(function(e){return e.typeSport===t&&e.match===o}).reduce(function(e,t){return e.add(t.play)},new Set));return n.a.createElement("div",{className:"match"},n.a.createElement(p,{match:o,isDoubleExotus:r(t)}),a.map(function(e,a){return n.a.createElement(i,Object.assign({key:a},{sport:t,match:o,play:e}))}))},i=function(e){var t=e.sport,o=e.match,a=e.play;return n.a.createElement("div",{className:"play"},c.filter(function(e){return e.typeSport===t&&e.match===o&&e.play===a}).map(function(e,o){return n.a.createElement(S,Object.assign({key:o,isDoubleExotus:r(t),isSubEvent:o},e))}))},p=function(e){var t=e.match,o=e.isDoubleExotus;return n.a.createElement("div",{className:"row header-match"},n.a.createElement("div",{className:"row-side row-left-side-"+ +o},n.a.createElement("div",{className:"col teams"},n.a.createElement("b",null,t))),n.a.createElement("div",{className:"row-side row-right-side-"+ +o},n.a.createElement("div",{className:"col coef"},"1"),o&&n.a.createElement("div",{className:"col coef"},"X"),n.a.createElement("div",{className:"col coef"},"2"),o&&n.a.createElement("div",{className:"col coef"},"1X"),o&&n.a.createElement("div",{className:"col coef"},"12"),o&&n.a.createElement("div",{className:"col coef"},"2X"),n.a.createElement("div",{className:"col coef"},"1"),n.a.createElement("div",{className:"col coef"},"Фора"),n.a.createElement("div",{className:"col coef"},"2"),n.a.createElement("div",{className:"col coef"},"Б"),n.a.createElement("div",{className:"col coef"},"Тотал"),n.a.createElement("div",{className:"col coef"},"М"),n.a.createElement("div",{className:"col coef"},"...")))},S=function(e){var t=e.isSubEvent,o=e.isDoubleExotus,a=(e.typeSport,e.match,e.team1),c=e.team2,r=e.part,m=e.score,f=e.time,l=e.one,d=e.x,i=e.second,p=e.oneX,S=e.oneSecond,h=e.secondX,X=e.fSign1,g=e.f,y=e.f1,x=e.f2,u=e.total,E=e.more,N=e.less,v=e.other,w=t?r:a+" — "+c;return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"row-side row-left-side-"+ +o},n.a.createElement("div",{className:"col teams"+(t?" part":"")},w),n.a.createElement("div",{className:"col timeScore"},m+"  "," ",n.a.createElement("b",null,f))),n.a.createElement("div",{className:"row-side row-right-side-"+ +o},n.a.createElement("div",{className:"col coef"},s(l)),o&&n.a.createElement("div",{className:"col coef"},s(d)),n.a.createElement("div",{className:"col coef"},s(i)),o&&n.a.createElement("div",{className:"col coef"},s(p)),o&&n.a.createElement("div",{className:"col coef"},s(S)),o&&n.a.createElement("div",{className:"col coef"},s(h)),n.a.createElement("div",{className:"col coef gray-text"},X," ",g),n.a.createElement("div",{className:"col coef"},s(y)),n.a.createElement("div",{className:"col coef"},s(x)),n.a.createElement("div",{className:"col coef"},s(E)),n.a.createElement("div",{className:"col coef gray-text"},u),n.a.createElement("div",{className:"col coef"},s(N)),n.a.createElement("div",{className:"col coef"},v)))};t.default=function(){return n.a.createElement("div",{className:"pageWrapper"},n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"row"},n.a.createElement("img",{alt:"header",src:"/header.png",className:"header"})),n.a.createElement("div",{className:"row row-paddings"},n.a.createElement("div",{className:"content"},n.a.createElement("img",{alt:"search-nav",src:"/search-nav.png",className:"search-nav"}),f.map(function(e,t){return n.a.createElement(l,Object.assign({key:t},{sport:e}))})),n.a.createElement("div",{className:"right-col"},n.a.createElement("img",{alt:"right-col",src:"/right-col.png",className:"right-col"}))),n.a.createElement("div",{className:"row"},n.a.createElement("img",{alt:"footer",src:"/footer.png",className:"footer"}))))}},214:function(e){e.exports=[{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Рапид Бухарест",team2:"Хапоэль Хайф",part:"основное время",score:"2:3 (2-0)",time:"82:37:00",one:50,x:5.8,second:1.11,oneX:5.5,oneSecond:1.1,secondX:"",fSign1:"+",f:1.5,f1:1.17,f2:4.4,total:5.5,more:2.5,less:1.47,other:4},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Рапид Бухарест",team2:"Хапоэль Хайф",part:"угловые",score:"5:3 (2-2)",time:"",one:"",x:"",second:"",oneX:"",oneSecond:"",secondX:"",fSign1:"-",f:2.5,f1:2.25,f2:1.57,total:9.5,more:2.4,less:1.5,other:6},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Халадаш Сомбатхей",team2:"Трабзонспор",part:"основное время",score:"0:0",time:"38:23:00",one:3.85,x:"03.05",second:"02.02",oneX:1.7,oneSecond:1.33,secondX:1.22,fSign1:"+",f:1.5,f1:1.19,f2:4.2,total:1.5,more:1.8,less:1.9,other:171},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Халадаш Сомбатхей",team2:"Трабзонспор",part:"1-й тайм",score:"0:0",time:"",one:6,x:1.32,second:6.5,oneX:"01.08",oneSecond:3.1,secondX:"01.09",fSign1:"",f:0,f1:1.8,f2:1.9,total:.5,more:3.7,less:1.25,other:4},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Балинген",team2:"Ройтлинген",part:"основное время",score:"0:1",time:"25:45:00",one:2.4,x:3.5,second:2.65,oneX:1.42,oneSecond:1.25,secondX:1.5,fSign1:"-",f:1.5,f1:4.4,f2:1.17,total:3.5,more:1.8,less:1.9,other:164},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Балинген",team2:"Ройтлинген",part:"1-й тайм",score:"0:1",time:"",one:12.5,x:3.25,second:1.45,oneX:2.55,oneSecond:1.3,secondX:"",fSign1:"+",f:1.5,f1:1.1,f2:5.9,total:1.5,more:1.75,less:1.95,other:10},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Пенафьел",team2:"Лузитания Лороза",part:"основное время",score:"0:0",time:"34:52:00",one:2.1,x:2.9,second:3.8,oneX:1.22,oneSecond:1.35,secondX:1.65,fSign1:"-",f:1.5,f1:4.4,f2:1.17,total:1.5,more:1.63,less:2.13,other:175},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Пенафьел",team2:"Лузитания Лороза",part:"1-й тайм",score:"0:0",time:"",one:4.9,x:1.35,second:7.6,oneX:"01.05",oneSecond:2.95,secondX:1.14,fSign1:"",f:0,f1:1.55,f2:2.3,total:.5,more:2.75,less:1.4,other:4},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Клагенфурт",team2:"Аустрия Клагенфурт",part:"основное время",score:"0:0",time:"8:11",one:4.9,x:6.2,second:1.4,oneX:2.75,oneSecond:"01.09",secondX:1.14,fSign1:"+",f:1.5,f1:1.8,f2:1.9,total:4.5,more:1.6,less:2.2,other:23},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Клагенфурт",team2:"Аустрия Клагенфурт",part:"1-й тайм",score:"0:0",time:"",one:4.4,x:3.25,second:1.83,oneX:1.87,oneSecond:1.3,secondX:1.17,fSign1:"+",f:1.5,f1:1.25,f2:3.55,total:1.5,more:1.53,less:2.35,other:14},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Вольфсбург",team2:"Фенербахче",part:"основное время",score:"0:0",time:"7:00",one:1.78,x:3.95,second:3.75,oneX:1.23,oneSecond:1.2,secondX:1.92,fSign1:"-",f:1.5,f1:2.9,f2:1.35,total:3.5,more:"02.03",less:1.7,other:210},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Вольфсбург",team2:"Фенербахче",part:"1-й тайм",score:"0:0",time:"",one:2.3,x:2.35,second:4.6,oneX:1.16,oneSecond:1.53,secondX:1.55,fSign1:"-",f:1.5,f1:5.5,f2:1.11,total:1.5,more:2.2,less:1.6,other:18},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Вольфсбург",team2:"Фенербахче",part:"2-й тайм",score:"0:0",time:"",one:2.1,x:3,second:3.7,oneX:1.23,oneSecond:1.35,secondX:1.65,fSign1:"",f:0,f1:1.47,f2:2.5,total:1.5,more:1.55,less:2.3,other:16},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Дрита Боговине",team2:"Дукаджини",part:"основное время",score:"0:4 (0-0)",time:"85:47:00",one:"",x:"",second:"",oneX:"",oneSecond:"",secondX:"",fSign1:"+",f:4.5,f1:1.35,f2:2.95,total:4.5,more:2.5,less:1.45,other:2},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Фатих Карагюмрюк",team2:"Коньяспор",part:"основное время",score:"2:2 (1-1)",time:"89:00:00",one:11.5,x:1.1,second:11.5,oneX:"01.01",oneSecond:5.8,secondX:"01.01",fSign1:"",f:0,f1:1.85,f2:1.85,total:4.5,more:5.7,less:1.1,other:2},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Златибор",team2:"Искра Даниловград",part:"основное время",score:"0:1",time:"37:29:00",one:5.7,x:3.6,second:1.6,oneX:2.2,oneSecond:1.25,secondX:1.1,fSign1:"+",f:1.5,f1:1.35,f2:2.9,total:2.5,more:1.55,less:2.3,other:143},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Златибор",team2:"Искра Даниловград",part:"1-й тайм",score:"0:1",time:"",one:"",x:"",second:1.1,oneX:5.7,oneSecond:"",secondX:"",fSign1:"+",f:1.5,f1:"01.08",f2:6.5,total:1.5,more:3.35,less:1.28,other:4},{typeSport:"Футбол",match:"Лига европы УЕФА. 2-й квалифик. Раунд. Первые матчи",team1:"Арарат-Армения",team2:"Линкольн Ред Импс",part:"основное время",score:"0-1 2:0 (2-0)",time:"58:27:00",one:"",x:"",second:"",oneX:"",oneSecond:"",secondX:"",fSign1:"-",f:2.5,f1:1.6,f2:2.25,total:3.5,more:2.3,less:1.6,other:87},{typeSport:"Футбол",match:"Лига европы УЕФА. 2-й квалифик. Раунд. Первые матчи",team1:"Арарат-Армения",team2:"Линкольн Ред Импс",part:"угловые",score:"6:3 (4-3) углы поля: X-X-X-X",time:"",one:"",x:"",second:"",oneX:"",oneSecond:"",secondX:"",fSign1:"-",f:4.5,f1:1.72,f2:2,total:12.5,more:1.8,less:1.9,other:17},{typeSport:"Футбол",match:"Лига европы УЕФА. 2-й квалифик. Раунд. Первые матчи",team1:"Арарат-Армения",team2:"Линкольн Ред Импс",part:"жёлтые карты",score:"1:2 (1-2)",time:"",one:8,x:3.5,second:1.47,oneX:2.5,oneSecond:1.26,secondX:"01.05",fSign1:"+",f:1.5,f1:1.42,f2:2.65,total:4.5,more:1.65,less:2.1,other:8},{typeSport:"Футбол",match:"Лига европы УЕФА. 2-й квалифик. Раунд. Первые матчи",team1:"Торсхавн",team2:"Линфилд",part:"основное время",score:"0:1",time:"30:00:00",one:3.85,x:3,second:2.12,oneX:1.68,oneSecond:1.35,secondX:1.25,fSign1:"+",f:1.5,f1:1.16,f2:4.9,total:2.5,more:1.85,less:1.9,other:142},{typeSport:"Футбол",match:"Лига европы УЕФА. 2-й квалифик. Раунд. Первые матчи",team1:"Торсхавн",team2:"Линфилд",part:"1-й тайм",score:"0:1",time:"",one:23,x:3.85,second:1.25,oneX:3.55,oneSecond:1.22,secondX:"",fSign1:"+",f:1.5,f1:"01.07",f2:7,total:1.5,more:2.35,less:1.52,other:6},{typeSport:"Футбол",match:"Лига европы УЕФА. 2-й квалифик. Раунд. Первые матчи",team1:"Торсхавн",team2:"Линфилд",part:"2-й тайм",score:"0:0",time:"",one:1.95,x:2.4,second:5.4,oneX:1.12,oneSecond:1.5,secondX:1.75,fSign1:"",f:0,f1:1.3,f2:3.25,total:1.5,more:2.45,less:1.48,other:18},{typeSport:"Футбол",match:"Лига европы УЕФА. 2-й квалифик. Раунд. Первые матчи",team1:"Шкендия",team2:"Ф-91 Дюделанж",part:"основное время",score:"1:0",time:"20:51",one:1.2,x:6,second:14,oneX:"",oneSecond:1.11,secondX:4.3,fSign1:"-",f:1.5,f1:1.92,f2:1.82,total:2.5,more:1.5,less:2.5,other:186},{typeSport:"Футбол",match:"Лига европы УЕФА. 2-й квалифик. Раунд. Первые матчи",team1:"Шкендия",team2:"Ф-91 Дюделанж",part:"1-й тайм",score:"1:0",time:"",one:1.12,x:"",second:"",oneX:"",oneSecond:"",secondX:5.4,fSign1:"-",f:1.5,f1:3,f2:1.35,total:1.5,more:1.88,less:1.82,other:4},{typeSport:"Футбол",match:"Лига европы УЕФА. 2-й квалифик. Раунд. Первые матчи",team1:"Шкендия",team2:"Ф-91 Дюделанж",part:"2-й тайм",score:"0:0",time:"",one:2.12,x:2.45,second:4.4,oneX:1.17,oneSecond:1.48,secondX:1.65,fSign1:"",f:0,f1:1.4,f2:2.75,total:1.5,more:2.1,less:1.65,other:16},{typeSport:"Футбол",match:"Лига европы УЕФА. 2-й квалифик. Раунд. Первые матчи",team1:"Шкендия",team2:"Ф-91 Дюделанж",part:"угловые",score:"0:0 углы поля: 0-0-0-0",time:"",one:1.93,x:7,second:2.4,oneX:1.5,oneSecond:"01.07",secondX:1.77,fSign1:"",f:0,f1:1.67,f2:"02.07",total:7.5,more:1.87,less:1.83,other:17},{typeSport:"Футбол",match:"Лига европы УЕФА. 2-й квалифик. Раунд. Первые матчи",team1:"Шкендия",team2:"Ф-91 Дюделанж",part:"1-й тайм угловые",score:"0:0",time:"",one:2.4,x:4,second:2.5,oneX:1.47,oneSecond:1.2,secondX:1.5,fSign1:"",f:0,f1:1.82,f2:1.88,total:2.5,more:1.93,less:1.77,other:8},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Андерлехт",team2:"ПАОК",part:"основное время",score:"0:0",time:"8:03",one:2.8,x:3.7,second:2.2,oneX:1.6,oneSecond:1.23,secondX:1.38,fSign1:"+",f:1.5,f1:1.2,f2:3.9,total:2.5,more:1.68,less:"02.05",other:210},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Андерлехт",team2:"ПАОК",part:"1-й тайм",score:"0:0",time:"",one:3.55,x:2.15,second:3,oneX:1.35,oneSecond:1.62,secondX:1.25,fSign1:"+",f:1.5,f1:"01.06",f2:7.4,total:1.5,more:2.75,less:1.4,other:22},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Андерлехт",team2:"ПАОК",part:"2-й тайм",score:"0:0",time:"",one:3.1,x:2.75,second:2.55,oneX:1.45,oneSecond:1.4,secondX:1.32,fSign1:"",f:0,f1:"02.05",f2:1.68,total:1.5,more:1.75,less:1.95,other:20},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Ларисса",team2:"Волос",part:"основное время",score:"0:0",time:"28:57:00",one:2.75,x:2.95,second:2.65,oneX:1.42,oneSecond:1.35,secondX:1.4,fSign1:"+",f:1.5,f1:"01.09",f2:6.1,total:1.5,more:1.65,less:2.1,other:177},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Ларисса",team2:"Волос",part:"1-й тайм",score:"0:0",time:"",one:5.3,x:1.48,second:4.6,oneX:1.16,oneSecond:2.45,secondX:1.12,fSign1:"",f:0,f1:1.97,f2:1.73,total:.5,more:2.3,less:1.55,other:14},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Ларисса",team2:"Волос",part:"2-й тайм",score:"0:0",time:"",one:2.95,x:2.55,second:2.85,oneX:1.37,oneSecond:1.45,secondX:1.35,fSign1:"",f:0,f1:1.9,f2:1.8,total:1.5,more:2.15,less:1.62,other:20},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Козловице",team2:"Сигма Оломоуц-2",part:"основное время",score:"0:1",time:"42:14:00",one:50,x:11,second:"01.04",oneX:8.5,oneSecond:"01.01",secondX:"",fSign1:"+",f:2.5,f1:1.82,f2:1.88,total:3.5,more:"02.05",less:1.68,other:37},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Козловице",team2:"Сигма Оломоуц-3",part:"1-й тайм",score:"0:1",time:"",one:"",x:"",second:"",oneX:"",oneSecond:"",secondX:"",fSign1:"",f:"",f1:"",f2:"",total:1.5,more:4.7,less:1.15,other:""},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Интер Запрешич",team2:"Максимир Загреб",part:"основное время",score:"1:0",time:"14:34",one:"01.06",x:11,second:22,oneX:"",oneSecond:"01.01",secondX:7.3,fSign1:"-",f:2.5,f1:1.75,f2:1.95,total:4.5,more:2.15,less:1.63,other:152},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Интер Запрешич",team2:"Максимир Загреб",part:"1-й тайм",score:"1:0",time:"",one:"01.07",x:"",second:"",oneX:"",oneSecond:"",secondX:6.7,fSign1:"-",f:1.5,f1:1.85,f2:1.85,total:2.5,more:2.65,less:1.42,other:8},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Пролетер Нови Сад",team2:"Кабель Нови Сад",part:"основное время",score:"0:0",time:"11:34",one:1.58,x:3.6,second:5.9,oneX:1.1,oneSecond:1.25,secondX:2.25,fSign1:"-",f:1.5,f1:2.7,f2:1.4,total:2.5,more:"02.07",less:1.67,other:189},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Пролетер Нови Сад",team2:"Кабель Нови Сад",part:"1-й тайм",score:"0:0",time:"",one:2.35,x:2,second:6.4,oneX:"01.08",oneSecond:1.72,secondX:1.53,fSign1:"-",f:1.5,f1:6.2,f2:"01.09",total:.5,more:1.52,less:2.35,other:20},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Лучко",team2:"Брежице",part:"основное время",score:"0:0",time:"9:11",one:2.45,x:4.5,second:2.2,oneX:1.6,oneSecond:1.16,secondX:1.48,fSign1:"+",f:1.5,f1:1.25,f2:3.6,total:3.5,more:1.6,less:2.2,other:77},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Лучко",team2:"Брежице",part:"1-й тайм",score:"0:0",time:"",one:2.95,x:2.65,second:2.75,oneX:1.4,oneSecond:1.42,secondX:1.35,fSign1:"+",f:1.5,f1:"01.08",f2:6.6,total:1.5,more:1.9,less:1.8,other:16},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"ХНК Горица",team2:"Вардар Скопье",part:"основное время",score:"2:0",time:"41:00:00",one:"01.04",x:"",second:"",oneX:"",oneSecond:"",secondX:10,fSign1:"-",f:2.5,f1:1.77,f2:1.93,total:3.5,more:1.8,less:1.9,other:106},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"ХНК Горица",team2:"Вардар Скопье",part:"1-й тайм",score:"2:0",time:"",one:"",x:"",second:"",oneX:"",oneSecond:"",secondX:"",fSign1:"",f:"",f1:"",f2:"",total:2.5,more:3.85,less:1.22,other:""},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Рапид Вена-2",team2:"Вена 1894",part:"основное время",score:"1:0",time:"12:01",one:1.55,x:4.7,second:4.6,oneX:1.16,oneSecond:1.15,secondX:2.3,fSign1:"-",f:1.5,f1:2.35,f2:1.53,total:4.5,more:1.9,less:1.8,other:9},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Рапид Вена-3",team2:"Вена 1895",part:"1-й тайм",score:"1:0",time:"",one:1.38,x:"04.05",second:9.5,oneX:"01.02",oneSecond:1.2,secondX:2.8,fSign1:"-",f:1.5,f1:2.8,f2:1.38,total:2.5,more:2.2,less:1.6,other:4},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Рапид Вена-4",team2:"Вена 1896",part:"2-й тайм",score:"0:0",time:"",one:2.65,x:3.1,second:2.6,oneX:1.45,oneSecond:1.32,secondX:1.42,fSign1:"",f:0,f1:1.85,f2:1.85,total:2.5,more:2.25,less:1.57,other:""},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Дортмунд",team2:"Солде",part:"основное время",score:"1:0",time:"26:18:00",one:"",x:"",second:"",oneX:"",oneSecond:"",secondX:"",fSign1:"-",f:4.5,f1:1.6,f2:2.2,total:5.5,more:1.78,less:1.92,other:4},{typeSport:"Футбол",match:"Товарищеские матчи",team1:"Дортмунд",team2:"Солде",part:"1-й тайм",score:"1:0",time:"",one:"",x:"",second:"",oneX:"",oneSecond:"",secondX:"",fSign1:"-",f:1.5,f1:1.4,f2:2.7,total:2.5,more:2.4,less:1.5,other:2},{typeSport:"Теннис",match:"Арт. Гамбург",team1:"Краинович Ф",team2:"Дьере Л",part:"основное время",score:"0:0 (1-1)",time:"",one:1.63,x:"",second:2.15,oneX:"",oneSecond:"",secondX:"",fSign1:"-",f:1.5,f1:1.85,f2:1.85,total:22.5,more:1.87,less:1.83,other:20},{typeSport:"Теннис",match:"Арт. Гамбург",team1:"Краинович Ф",team2:"Дьере Л",part:"1-й сет",score:"1:1 (00-00*)",time:"",one:1.65,x:"",second:2.1,oneX:"",oneSecond:"",secondX:"",fSign1:"-",f:1.5,f1:"02.08",f2:1.67,total:9.5,more:1.55,less:2.3,other:92},{typeSport:"Теннис",match:"Атр. Челленджер. Бингемптон",team1:"Барриос-Вера М Т",team2:"Захаров А",part:"основное время",score:"1:0 (6-2 0-0)",time:"",one:"01.04",x:"",second:10,oneX:"",oneSecond:"",secondX:"",fSign1:"-",f:6.5,f1:2.25,f2:1.57,total:18.5,more:2.35,less:1.53,other:5},{typeSport:"Теннис",match:"Атр. Челленджер. Бингемптон",team1:"Барриос-Вера М Т",team2:"Захаров А",part:"2-й сет",score:"0:0 (00-00*)",time:"",one:1.25,x:"",second:3.55,oneX:"",oneSecond:"",secondX:"",fSign1:"-",f:2.5,f1:2.3,f2:1.55,total:9.5,more:1.95,less:1.75,other:98},{typeSport:"Теннис",match:"Атр. Челленджер. Бингемптон",team1:"Гомес-Эррера К",team2:"Смит Рой",part:"основное время",score:"0:0 (5-4)",time:"",one:1.48,x:"",second:2.45,oneX:"",oneSecond:"",secondX:"",fSign1:"-",f:2.5,f1:1.82,f2:1.88,total:23.5,more:1.65,less:2.1,other:28},{typeSport:"Теннис",match:"Атр. Челленджер. Бингемптон",team1:"Гомес-Эррера К",team2:"Смит Рой",part:"1-й сет",score:"5:4 (15-15*)",time:"",one:1.4,x:"",second:2.7,oneX:"",oneSecond:"",secondX:"",fSign1:"-",f:1.5,f1:2.17,f2:1.62,total:12.5,more:1.97,less:1.73,other:54},{typeSport:"Теннис",match:"Атр. Челленджер. Бингемптон",team1:"Гомес-Эррера К",team2:"Смит Рой",part:"2-й сет",score:"0:0",time:"",one:1.6,x:"",second:2.2,oneX:"",oneSecond:"",secondX:"",fSign1:"",f:"",f1:"",f2:"",total:"",more:"",less:"",other:6},{typeSport:"Теннис",match:"Атр. Челленджер. Бингемптон",team1:"Гонсалес Алехандро",team2:"Киршхаймер С",part:"основное время",score:"0:0 (3-4)",time:"",one:1.93,x:"",second:1.77,oneX:"",oneSecond:"",secondX:"",fSign1:"+",f:.5,f1:1.82,f2:1.88,total:23.5,more:1.85,less:1.85,other:16},{typeSport:"Теннис",match:"Атр. Челленджер. Бингемптон",team1:"Гонсалес Алехандро",team2:"Киршхаймер С",part:"1-й сет",score:"3:4(15*-15)",time:"",one:2.2,x:"",second:1.6,oneX:"",oneSecond:"",secondX:"",fSign1:"+",f:1.5,f1:1.62,f2:2.15,total:10.5,more:1.77,less:1.93,other:78},{typeSport:"Теннис",match:"Атр. Челленджер. Гранби",team1:"Мертенс Янник",team2:"Гасеми К",part:"основное время",score:"1:0 (6-2 5-0)",time:"",one:"",x:"",second:"",oneX:"",oneSecond:"",secondX:"",fSign1:"",f:"",f1:"",f2:"",total:"",more:"",less:"",other:""},{typeSport:"Теннис",match:"Атр. Челленджер. Гранби",team1:"Мертенс Янник",team2:"Гасеми К",part:"2-й сет",score:"5:0 (00*-00)",time:"",one:"",x:"",second:"",oneX:"",oneSecond:"",secondX:"",fSign1:"",f:"",f1:"",f2:"",total:"",more:"",less:"",other:52},{typeSport:"Теннис",match:"Атр. Челленджер. Гранби",team1:"Петрович Данило",team2:"Саркисян А",part:"основное время",score:"0:0 (6-6)",time:"",one:1.4,x:"",second:2.7,oneX:"",oneSecond:"",secondX:"",fSign1:"-",f:-2.5,f1:2,f2:1.72,total:28.5,more:2.2,less:1.6,other:16},{typeSport:"Теннис",match:"Атр. Челленджер. Гранби",team1:"Петрович Данило",team2:"Саркисян А",part:"1-й сет",score:"6:6 (тайбрейк 5-4*)",time:"",one:1.45,x:"",second:2.6,oneX:"",oneSecond:"",secondX:"",fSign1:"",f:"",f1:"",f2:"",total:"",more:"",less:"",other:15},{typeSport:"Теннис",match:"Атр. Челленджер. Гранби",team1:"Петрович Данило",team2:"Саркисян А",part:"2-й сет",score:"0:0",time:"",one:1.62,x:"",second:2.15,oneX:"",oneSecond:"",secondX:"",fSign1:"",f:"",f1:"",f2:"",total:9.5,more:1.63,less:2.15,other:4},{typeSport:"Теннис",match:"Атр. Челленджер. Прага",team1:"Лестьенн К",team2:"Сакамото П",part:"основное время",score:"1:0 (6-4 6-5)",time:"",one:"01.05",x:"",second:7.9,oneX:"",oneSecond:"",secondX:"",fSign1:"-",f:3.5,f1:1.6,f2:2.2,total:22.5,more:1.95,less:1.75,other:11},{typeSport:"Теннис",match:"Атр. Челленджер. Прага",team1:"Лестьенн К",team2:"Сакамото П",part:"2-й сет",score:"6:5 (15-00*)",time:"",one:1.18,x:"",second:4.3,oneX:"",oneSecond:"",secondX:"",fSign1:"-",f:1.5,f1:1.75,f2:1.95,total:12.5,more:1.95,less:1.75,other:61},{typeSport:"Теннис",match:"Атр. Челленджер. Прага",team1:"Павласек А",team2:"Сапата-Миральес Б",part:"",score:"1:0 (6-2 0-3)",time:"",one:1.45,x:"",second:2.55,oneX:"",oneSecond:"",secondX:"",fSign1:"-",f:2.5,f1:1.9,f2:1.8,total:25.5,more:1.9,less:1.8,other:3},{typeSport:"Теннис",match:"Атр. Челленджер. Прага",team1:"Павласек А",team2:"Сапата-Миральес Б",part:"2-й сет",score:"0:3 (00*-00)",time:"",one:3.9,x:"",second:1.2,oneX:"",oneSecond:"",secondX:"",fSign1:"+",f:2.5,f1:2.4,f2:1.5,total:8.5,more:1.48,less:2.5,other:81}]},215:function(e,t,o){"use strict";var a=o(4),n=o(18),c=o(32),r=o(131),s=o(69),m=o(7),f=o(90).f,l=o(95).f,d=o(10).f,i=o(136).trim,p=a.Number,S=p,h=p.prototype,X="Number"==c(o(54)(h)),g="trim"in String.prototype,y=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var o,a,n,c=(t=g?t.trim():i(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(o=t.charCodeAt(2))||120===o)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+t}for(var r,m=t.slice(2),f=0,l=m.length;f<l;f++)if((r=m.charCodeAt(f))<48||r>n)return NaN;return parseInt(m,a)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,o=this;return o instanceof p&&(X?m(function(){h.valueOf.call(o)}):"Number"!=c(o))?r(new S(y(t)),o,p):y(t)};for(var x,u=o(8)?f(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;u.length>E;E++)n(S,x=u[E])&&!n(p,x)&&d(p,x,l(S,x));p.prototype=h,h.constructor=p,o(12)(a,"Number",p)}}}]);
//# sourceMappingURL=component---src-pages-index-js-f948ee09179be9a8b9c0.js.map