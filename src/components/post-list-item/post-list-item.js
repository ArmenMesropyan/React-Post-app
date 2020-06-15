import React from 'react';

const PostList = () => {
    return (
        <li className="posts-list__item">
            <h3 className="posts-list__heading">Hello World!</h3>
            {/* <i className="fa fa-heart"></i> */}
            <ul className="posts-list__actions actions-list">
                <li className="actions-list__item actions-list__item_star">
                    <i className="fa fa-star"></i>
                </li>
                <li className="actions-list__item actions-list__item_trash">
                    <i className="fa fa-trash"></i>
                </li>
                <li className="actions-list__item actions-list__item_heart">
                    <i className="fa fa-heart"></i>
                </li>
            </ul>
        </li>
    );
}

export default PostList;