import React from "react";
import { Header } from './header';
import { Row } from './row';
import { isDoubleExotus } from '../../utils/helpers';
import "./style/table.css";

const Sport = ({ designVariant, idxSport, data, sport }) => {
    let matches = Array.from(data.filter( item => item.sport === sport )
        .reduce((acc, elem) => acc.add(elem.match), new Set()));
    
    return (
        <div className='sport'>
            <div className='sport-title'><b>{sport}</b></div>
                { matches.map((match, index) => <Match key={index} idxMatch={index} {...{designVariant, idxSport, data, sport, match}}/>) }
        </div>
    )
}


class Match extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.divRef = React.createRef()
        this.initHeight = '';
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    componentDidMount()  {
        const styles = getComputedStyle(this.divRef.current)
        this.initHeight = styles.height;
        this.divRef.current.style.maxHeight = styles.height;
      }


    render() {
        const { designVariant, idxSport, idxMatch, data, sport, match } = this.props;

        let plays = Array.from(
            data.filter(item => (item.sport === sport && item.match === match))
                .reduce((acc, elem) => acc.add(elem.play), new Set())
        );

        let classCollapse = this.state.isToggleOn ? '' : 'header-match-collapse';

        return (
            <div  className={'match'} >
                <div onClick={this.handleClick}>
                    <Header {...{ designVariant, idxSport, idxMatch, sport, match, classCollapse }} isDoubleExotus={isDoubleExotus(sport)} />
                </div>
                <div 
                    ref={this.divRef} 
                    className={'matchGrid ' + (this.state.isToggleOn ? '' : 'none')} 
                    style={{ maxHeight: (this.state.isToggleOn ? this.initHeight : '0')  }}
                    >
                {plays.map((play, index) => <Play key={index} playIndex={index} {...{ designVariant, data, sport, match, play }} />)}
                </div>
            </div>
        );
    }
}

const Play = ({ designVariant, playIndex, data, sport, match, play }) => {
    let arrPlays = data.filter( item => (item.sport === sport && item.match === match && item.play === play));

    return (
        <div className='play'>
            {
                arrPlays.map((item, index) => {
                        return <Row designVariant={designVariant} key={index} playIndex={playIndex} isSubEvent={index} hasChild={arrPlays.length > 1 && index === 0 } isDoubleExotus={isDoubleExotus(sport)} {...item} />
                })
            }
        </div>
    )
}

export { Sport } 
