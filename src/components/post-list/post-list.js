import React from "react";
import PostListItem from '../post-list-item';

const PostList = () => {
    return (
        <section className="posts__list posts-list">
            <h2 className="posts-list__title visually-hidden">Posts List</h2>
            <div className="container">
                <ul className="posts-list__list">
                    <PostListItem />
                    <PostListItem />
                    <PostListItem />
                </ul>
            </div>
        </section>
    );
}

export default PostList;