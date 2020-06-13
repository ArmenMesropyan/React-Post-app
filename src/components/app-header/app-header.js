import React from "react";

const AppHeader = () => {
    return (
        <header className="posts__header posts-header">
            <ul className="posts-header__list">
                <li className="posts-header__item">
                    <h2 className="posts-header__name">Armen Mesropyan</h2>
                </li>
                <li className="posts-header__item">
                    <h2 className="posts-header__stats">5 entries, 0 of them liked</h2>
                </li>
            </ul>
        </header>
    )
};

export default AppHeader;
