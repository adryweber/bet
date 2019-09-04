
function makeCounter() {
    var currentCount = 0;
    return () => currentCount++;
}

let globalIndex = makeCounter()

var getSportCode =  {
    'Спорт' : 'all',
    'Бадминтон' : 'badminton',
    'Бейсболл' : 'baseball',
    'Баскетбол 3х3' : 'basketball_3x3',
    'Баскетбол' : 'basketball',
    'Пляжный волейбол' : 'beach_volleyball',
    'Бильярд' : 'billiard',
    'Бокс' : 'boxing',
    'Единоборства' : 'fighting',
    'Флурбол' : 'floorball',
    'Футбол' : 'football',
    'Футзал' : 'footzal',
    'Гандбол' : 'handball',
    'Хоккей' : 'hockey',
    'Лотерея' : 'lottery',
    'Мини-хоккей с мячем' : 'mini_hockey_with_ball',
    'Настольный теннис' : 'table_tennis',
    'Теннис' : 'tennis',
    'Топ' : 'top',
    'Волейбол' : 'volleyball',
    'Водное поло' : 'water_polo'
}


let isDoubleExotus = (sport) => {
    if (sport === 'Теннис') {
        return false;
    }
    return true;
}

function addZeroes( num ) {
    num = Number(num);
    // If there is no decimal, or the decimal is less than 2 digits, toFixed
    // if (String(num).split(".").length < 2 || String(num).split(".")[1].length<=2 ){
    //     num = num.toFixed(2);
    // }
    num = num.toFixed(2);
    return num;
 }

 const getCssColor = (colorVar) => {
    if (typeof window !== `undefined`) {
        var root = window.document.querySelector(':root');
        var rootStyles = getComputedStyle(root);
        var color = rootStyles.getPropertyValue('--color-' + colorVar);
        return color;
        
    } else {
        let col = {
            'color-red': 'rgb(226, 29, 2)',
            'color-blue': 'rgb(0, 86, 200)',
            'color-900': 'rgb(28, 37, 70)',
            'color-900-80': 'rgba(28, 37, 70, .8)',
            'color-900-60': 'rgba(28, 37, 70, .6)',
            'color-900-40': 'rgba(28, 37, 70, .4)',
            'color-700': 'rgb(37, 54, 112)',
            'color-500': 'rgb(152, 156, 180)',
            'color-500-40': 'rgba(152, 156, 180, .4)',
            'color-500-20': 'rgba(152, 156, 180, .2)',
            'color-500-10': 'rgba(152, 156, 180, .1)',
            'color-500-6': 'rgba(152, 156, 180, .06)',
            'color-150': 'rgb(247, 247, 247)',
            'color-100': 'rgb(255, 255, 255)',
            'color-100-80': 'rgba(255, 255, 255, .8)',
            'color-100-60': 'rgba(255, 255, 255, .6)',
            'color-100-40': 'rgba(255, 255, 255, .4)',
            'color-100-20': 'rgba(255, 255, 255, .2)',
            'color-football': '#2AB26C',
            'color-tennis':  '#FF7509'
        }

        return col['color-' + colorVar];
    }
}

export { makeCounter, globalIndex, isDoubleExotus, addZeroes, getCssColor, getSportCode }