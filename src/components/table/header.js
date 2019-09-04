import React from "react";
import "./style/row.css";
import "./style/cell.css";
import "./style/header.css";
import { Ico } from '../ico/ico';
import { getSportCode, getCssColor } from '../../utils/helpers';

let headerClass = '';

let icoMatchMap = [
    [
        {type: 'flag', src:'flag/armenia.svg'},
        {},
        {type: 'logo', src:'logoMatch/champ-leag.svg'},
        {type: 'flag', src:'flag/aus.svg'},
        {type: 'logo', src:'logoMatch/prem-leag.svg'},
        {type: 'flag', src:'flag/bras.svg'},
        {type: 'logo', src:'logoMatch/tennis.svg'},
    ],
    [
        {type: 'logo', src:'logoMatch/vhl.svg'},
        {type: 'flag', src:'flag/burundi.svg'},
        {type: 'flag', src:'flag/china.svg'},
        {type: 'flag', src:'flag/denmark.svg'},
        {type: 'flag', src:'flag/eng.svg'},
        {type: 'flag', src:'flag/esp.svg'},
        {type: 'flag', src:'flag/georgia.svg'},        
    ],
    [
        {type: 'flag', src:'flag/netherlands.svg'},
        {type: 'flag', src:'flag/norway.svg'},
        {type: 'flag', src:'flag/parag.svg'},
        {type: 'flag', src:'flag/pl.svg'},
        {type: 'flag', src:'flag/rus.svg'},
        {type: 'flag', src:'flag/thailand.svg'},
        {type: 'flag', src:'flag/ukr.svg}'}
    ]
];
//

const Header = ({ designVariant, idxSport, idxMatch, sport, match, isDoubleExotus, classCollapse }) => {
    // На основе карты наличия иконок флагов и матчей делаем вывод этих иконок
    // Условие: если количество матчей больше чем есть в массиве (если добавили данных) или 
    // если в массиве есть пустые записи (для имитации отсутвия лого)
    let icoMatchPlaceholder = (icoMatchMap[idxSport][idxMatch] && icoMatchMap[idxSport][idxMatch].type) ?        
        <div className={`icoMatchWrapper ${(icoMatchMap[idxSport][idxMatch].type === 'flag') && ' FlagWrapper'}`}>
            <img src={require('../../../static/' + icoMatchMap[idxSport][idxMatch].src)} alt='' className='icoFlag' height='26'/>                            
        </div> : null;


if (designVariant === undefined) {
    headerClass = '';

} else if (designVariant == 2) {
    headerClass = 'darkHeader';
}

    return (
        <div className={'row header-match ' + classCollapse + ' ' + headerClass } style={{ borderBottom: getCssColor(getSportCode[sport]) + ' solid 2px' }}>
            <div className={'row-side row-left-side-' + +isDoubleExotus}>
                <div className='col teams'>
                    <Ico size={16} variant={'sport/' + getSportCode[sport]} color='sport' className='icoSport' />
                    <div className='icoMatchCell'>
                        {icoMatchPlaceholder}
                    </div>
                     {match}
                </div>
            </div>

            <div className={'row-side row-right-side-' + +isDoubleExotus}>
                <div className='coefGroup'>
                    <div className='col coef'>1</div>
                    {isDoubleExotus && <div className='col coef'>X</div>}
                    <div className='col coef'>2</div>
                </div>

                <div className='coefGroup'>
                    {isDoubleExotus && <div className='col coef'>1X</div>}
                    {isDoubleExotus && <div className='col coef'>12</div>}
                    {isDoubleExotus && <div className='col coef'>2X</div>}
                </div>

                <div className='coefGroup'>
                    <div className='col coef'>1</div>
                    <div className='col coef'>Фора</div>
                    <div className='col coef'>2</div>
                </div>

                <div className='coefGroup'>
                    <div className='col coef'>Б</div>
                    <div className='col coef'>Тотал</div>
                    <div className='col coef'>М</div>
                </div>
                <div className='col coef'>...</div>
            </div>
        </div>
    );
};

export { Header }


// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
//         this.handleClick = this.handleClick.bind(this);
//       }
    
//       handleClick() {
//         this.setState(state => ({
//           isToggleOn: !state.isToggleOn
//         }));
//       }


//       render() {
//         const { size, design, className, stick, loading, selected, fullWidth, error, width, marker, markerId, innerRef, children, ...props } = this.props;
        
//             // На основе карты наличия иконок флагов и матчей делаем вывод этих иконок
//             // Условие: если количество матчей больше чем есть в массиве (если добавили данных) или 
//             // если в массиве есть пустые записи (для имитации отсутвия лого)
//             let icoMatchPlaceholder = (icoMatchMap[idxSport][idxMatch] && icoMatchMap[idxSport][idxMatch].type) ?        
//                 <div className={`icoMatchWrapper ${(icoMatchMap[idxSport][idxMatch].type === 'flag') && ' FlagWrapper'}`}>
//                     <img src={require('../../../static/' + icoMatchMap[idxSport][idxMatch].src)} alt='' className='icoFlag' height='26'/>                            
//                 </div> : null;

//             return (
//                 <div onClick={this.handleClick} className='row header-match' style={{ borderBottom: getCssColor(getSportCode[sport]) + ' solid 2px' }}>
//                     {this.state.isToggleOn ? 'Включено' : 'Выключено'}
//                     <div className={'row-side row-left-side-' + +isDoubleExotus}>
//                         <div className='col teams'>
//                             <Ico size={16} variant={'sport/' + getSportCode[sport]} color='sport' className='icoSport' />
//                             <div className='icoMatchCell'>
//                                 {icoMatchPlaceholder}
//                             </div>
//                             {match}
//                         </div>
//                     </div>

//                     <div className={'row-side row-right-side-' + +isDoubleExotus}>
//                         <div className='col coef'>1</div>
//                         {isDoubleExotus && <div className='col coef'>X</div>}

//                         <div className='col coef'>2</div>
//                         {isDoubleExotus && <div className='col coef'>1X</div>}
//                         {isDoubleExotus && <div className='col coef'>12</div>}
//                         {isDoubleExotus && <div className='col coef'>2X</div>}

//                         <div className='col coef'>1</div>
//                         <div className='col coef'>Фора</div>
//                         <div className='col coef'>2</div>
//                         <div className='col coef'>Б</div>
//                         <div className='col coef'>Тотал</div>
//                         <div className='col coef'>М</div>
//                         <div className='col coef'>...</div>
//                     </div>
//                 </div>
//             );                
//       }
// }