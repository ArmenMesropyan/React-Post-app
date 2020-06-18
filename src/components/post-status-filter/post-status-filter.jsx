import React, { Component } from "react";

export default class SearchPanel extends Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'liked', label: 'Liked'},
    ]
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterClick} = this.props;
            const className = `posts-sorting__btn posts-sorting__${name} ${filter === name ? 'posts-sorting__checked' : ''}`;
            return (
                <li className="posts-sorting__item" key={name}>
                    <button className={className} onClick={() => onFilterClick(name)}>{label}</button>
                </li>
            );
        })
        return (
            <ul className="search-panel__sorting posts-sorting">
                {buttons}
            </ul>
        )
    }
};
