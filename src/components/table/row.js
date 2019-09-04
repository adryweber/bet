import React from "react";
import { addZeroes, makeCounter } from '../../utils/helpers'; //globalIndex, getCssColor
import { Ico } from '../ico/ico';
import "./style/header.css";
import "./style/cell.css";
let ri, rowClass, leftSideClass = '';
let rowIndex = makeCounter();

let icoPlay = [
    [0, 1],
    [0, 0],
    [1, 1],
    [1, 0],
    [0, 1],
    [0, 1],
    [1, 1],
    [0, 1],
    [1, 1],
    [0, 1],
    [0, 0],
    [1, 1],
    [1, 0],
    [0, 1],
    [0, 0],
    [1, 1],
    [0, 1],
    [1, 1],
    [0, 1],
    [0, 0],
    [0, 0],
    [1, 0],
    [0, 1],
    [0, 1],
    [1, 1],
    [0, 1],
    [1, 1],
    [0, 1],
    [0, 0],
    [1, 1],
    [1, 0],
    [0, 1],
    [0, 1],
    [1, 1],
    [0, 1],
    [1, 1], 
    [0, 1],
    [0, 0],
    [1, 1],
    [1, 0],
    [0, 1],
    [0, 1],
    [1, 1],
    [0, 1],
    [1, 1],
    [0, 1],
    [0, 0],
    [1, 1],
    [1, 0],
    [0, 1],
    [0, 1],
    [1, 1],
    [0, 1],
    [1, 1],
    [0, 1],
    [0, 0],
    [1, 1],
    [1, 0],
    [0, 1],
    [0, 1],
    [1, 1],
    [0, 1],
    [1, 1],
    [0, 1],
    [0, 0],
    [1, 1],
    [1, 0],
    [0, 1],
    [0, 1],
    [0, 1]            
]

/**
 * playIndex - номер игры в чемпионате (матче)
 * globalIndex - глобальный счетчик - что бы ставить каждый раз новую запись из массива наличия иконок
 */
const Row = ({ designVariant, playIndex, hasChild, isSubEvent, isDoubleExotus, sport, match, team1, team2, part, score, time,
    one, x, second, oneX, oneSecond, secondX, fSign1, f, f1, f2, total, more, less, other }) => {
    
    let sideCell = (!isSubEvent) ?  `${team1} — ${team2}` : part;
    
    // let idx= globalIndex();
    let idx= playIndex;
    let icoVideo, icoShema;

    if (!isSubEvent) {
        icoVideo = (icoPlay[idx][0]) ? <Ico size={16} baseSize={16} color='red' variant='table/video' className='icoVideo'/> : null;
        icoShema = (icoPlay[idx][1]) ? <Ico size={16} baseSize={16} color='red' variant='table/shema' className='icoShema'/> : null;
    }
    
    if (designVariant === undefined) {
        ri = rowIndex();

        if (ri == 66) {
            rowIndex = makeCounter();
        }

        rowClass = 'row ' + ((ri % 2 === 0) ? 'dark' : '');
        leftSideClass = '';

    } else if (designVariant == 2) {
        rowClass = 'row';
        leftSideClass = 'grayBg';
    }


    return (
        <div className={rowClass}>
            <div className='favWrapper'>
                <Ico size={16} color='500-20' variant='base/fav' className='fav'/>
            </div>
            <div className={'row-side row-left-side-' + +isDoubleExotus + ' ' + leftSideClass}>
                <div className={'col teams' + (isSubEvent ? ' part' : '')}>
                    {/* {isSubEvent} */}
                    {(hasChild) ? <Ico size={16} color='500-40' variant='base/shevron_down' className='icoShevronDown'/> : <div className='icoShevronDymmy icoShevronDown' />}
                    <span className='teamsName'>{sideCell}</span>
                </div>
                {/* Здесь пробелы важны!!! Перед {time}*/}
                <div className='col timeScore'>
                    {icoVideo} {icoShema} <span className='score'>{score}</span>{time && <b> {time}</b>}
                </div>
            </div>
            
            <div className={'row-side row-right-side-' + +isDoubleExotus}>
                <div className='coefGroup'>
                    <div className='col coef'>{ addZeroes(one) }</div>
                    { isDoubleExotus && <div className='col coef'>{addZeroes(x)}</div> }
                    <div className='col coef'>{addZeroes(second)}</div>
                </div>

                <div className='coefGroup'>
                    { isDoubleExotus && <div className='col coef'>{addZeroes(oneX)}</div> }
                    { isDoubleExotus && <div className='col coef'>{addZeroes(oneSecond)}</div> }
                    { isDoubleExotus && <div className='col coef'>{addZeroes(secondX)}</div> }
                </div>

                <div className='coefGroup'>
                    <div className='col coef non-click '>{fSign1} {f}</div>
                    <div className='col coef'>{addZeroes(f1)}</div>          
                    <div className='col coef'>{addZeroes(f2)}</div>
                </div>

                <div className='coefGroup'>
                    <div className='col coef'>{addZeroes(more)}</div>    
                    <div className='col coef non-click'>{total}</div>              
                    <div className='col coef'>{addZeroes(less)}</div>       
                </div>

                <div className='col coef'><span class='link'>{other}</span></div> 
            </div>                                     
        </div>
    );
};

export { Row }