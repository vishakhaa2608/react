import React, { Component } from 'react';

import classes from "./TodoItem.css";
import PropTypes from 'prop-types';

class TodoItem extends Component {

    render() {
        let item = null;

        switch (this.props.category) {
            case ('finance'):
                item = <div className = {classes.anitem}>
                        <div className = {classes.iconfinance}></div>
                        <div className = {classes.floatright}>Check investing options</div>
                    </div>;
                break;
            case ('movies'):
                item = (
                    <div className = {classes.anitem}>
                        <div className = {classes.iconmovies}></div>
                        <div className = {classes.floatright}>Avengers Endgame</div>
                    </div>
                );
                break;
            case ('work'):
                item = (
                    <div className = {classes.anitem}>
                        <div className = {classes.iconwork}></div>
                        <div className = {classes.floatright}>Check Resources Mercy data</div>
                        </div>
                );
                break;
            case ( 'home' ):
                item = (
                    <div className = {classes.anitem}>
                        <div className = {classes.iconhome}></div>
                        <div className = {classes.floatright}>Clean and dust</div>
                        </div>
                );
                break;
            case ( 'personal' ):
                item = (
                    <div className = {classes.anitem}>
                        <div className = {classes.iconpersonal}></div>
                        <div className = {classes.floatright}>Face mask</div>
                        </div>
                );
                break;
            case ( 'health' ):
                item = (
                    <div className = {classes.anitem}>
                        <div className = {classes.iconhealth}></div>
                        <div className = {classes.floatright}>Get medicines</div>
                        </div>
                );
                break;
            default:
                item = null;
        }
        return item;
    }
}

TodoItem.propTypes = {
    category: PropTypes.string.isRequired
};

export default TodoItem;