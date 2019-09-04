import React from "react";
import { Link } from "gatsby"
import "./model-nav.css";

class ModelNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {

        let action = this.state.isToggleOn ? ' ↑ ' : ' ↓ ';

        return (
            <div className='modelNavigatorWrapper'>
                <div className='action' onClick={this.handleClick}>{action}</div>
                <div className={'modelNavigator ' + (this.state.isToggleOn ? '' : 'none')}>
                    <Link to="/">Вариант 1 (базовый)</Link>
                    <Link to="/variant-2/">Вариант 2 (adry)</Link>
                </div>
            </div>
        )
    }
}

export { ModelNav }