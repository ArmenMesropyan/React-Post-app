import React from "react";

const AppHeader = () => {
    return (
        <header className="posts__header posts-header">
            <h2>User information</h2>
            <div className="container">
                <ul className="posts-header__list">
                    <li className="posts-header__item">
                        <h3 className="posts-header__name">Armen Mesropyan</h3>
                    </li>
                    <li className="posts-header__item">
                        <p className="posts-header__stats">5 entries, 0 of them liked</p>
                    </li>
                </ul>
            </div>
        </header>
    )
};

export default AppHeader;
