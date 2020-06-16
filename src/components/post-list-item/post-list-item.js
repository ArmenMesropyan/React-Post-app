import React from 'react';

const PostList = ({label, important}) => {
    const classNames = `posts-list__item ${important ? 'posts-list__item_important': ''}`;
    return (
        <li className={classNames}>
            <h3 className="posts-list__heading">{label}</h3>
            <ul className="posts-list__actions actions-list">
                <li className="actions-list__item actions-list__item_star">
                    <button type="button" className="actions-list__btn">
                        <i className="fa fa-star"></i>
                    </button>
                </li>
                <li className="actions-list__item actions-list__item_trash">
                    <button type="button" className="actions-list__btn">
                        <i className="fa fa-trash"></i>
                    </button>
                </li>
                <li className="actions-list__item actions-list__item_heart">
                    <button type="button" className="actions-list__btn">
                        <i className="fa fa-heart"></i>
                    </button>
                </li>
            </ul>
        </li>
    );
}

export default PostList;