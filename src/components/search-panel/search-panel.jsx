import React from "react";

const SearchPanel = ({onUpdateSearch}) => {
    return (
        <input 
            className="search-panel__input"
            type="text"
            placeholder="Search posts"
            onChange={({target}) => onUpdateSearch(target.value)}
        />
    )
};

export default SearchPanel;
