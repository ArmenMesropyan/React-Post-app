import React from "react";

const SearchPanel = () => {
    return (
        <ul className="search-panel__sorting posts-sorting">
            <li className="posts-sorting__item">
                <button className="posts-sorting__all posts-sorting__checked">All</button>
            </li>
            <li className="posts-sorting__item">
                <button className="posts-sorting__liked default-btn">Liked</button>
            </li>
        </ul>
    )
};

export default SearchPanel;
