import React, { Component } from 'react';

export default class PostListItem extends Component {
    render() {
        const {label, onClickEvent, onDelete} = this.props;
        // const {important, liked} = this.state;

        // const classNames = `posts-list__item ${important ? 'posts-list__item_important': ''} ${liked ? 'posts-list__item_liked': ''}`;

        return (
            <li className='posts-list__item'>
                <h3 className="posts-list__heading" onClick={() => onClickEvent('like')}>{label}</h3>
                <ul className="posts-list__actions actions-list">
                    <li className="actions-list__item actions-list__item_star">
                        <button type="button" className="actions-list__btn" onClick={() => onClickEvent('important')}>
                            <i className="fa fa-star"></i>
                        </button>
                    </li>
                    <li className="actions-list__item actions-list__item_trash">
                        <button type="button" className="actions-list__btn" onClick={onDelete}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </li>
                    <li className="actions-list__item actions-list__item_heart">
                        <button type="button" className="actions-list__btn" onClick={() => onClickEvent('like')}>
                            <i className="fa fa-heart"></i>
                        </button>
                    </li>
                </ul>
            </li>
        );
    }
}