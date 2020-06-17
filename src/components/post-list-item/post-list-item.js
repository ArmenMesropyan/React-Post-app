import React, { Component } from 'react';

export default class PostListItem extends Component {
    state = {
        important: this.props.important || false,
        liked: this.props.liked || false,
    }

    onImportantBtnClick = () => {
        this.setState(({important}) => ({important: !important}));
    }

    onLikeBtnClick = () => {
        this.setState(({liked}) => ({liked: !liked}));
    }

    render() {
        const {label} = this.props;
        const {important, liked} = this.state;

        const classNames = `posts-list__item ${important ? 'posts-list__item_important': ''} ${liked ? 'posts-list__item_liked': ''}`;

        return (
            <li className={classNames}>
                <h3 className="posts-list__heading" onClick={this.onLikeBtnClick}>{label}</h3>
                <ul className="posts-list__actions actions-list">
                    <li className="actions-list__item actions-list__item_star">
                        <button type="button" className="actions-list__btn" onClick={this.onImportantBtnClick}>
                            <i className="fa fa-star"></i>
                        </button>
                    </li>
                    <li className="actions-list__item actions-list__item_trash">
                        <button type="button" className="actions-list__btn">
                            <i className="fa fa-trash"></i>
                        </button>
                    </li>
                    <li className="actions-list__item actions-list__item_heart">
                        <button type="button" className="actions-list__btn" onClick={this.onLikeBtnClick}>
                            <i className="fa fa-heart"></i>
                        </button>
                    </li>
                </ul>
            </li>
        );
    }
}