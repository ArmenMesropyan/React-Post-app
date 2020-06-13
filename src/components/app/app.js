import React from "react";
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';

const App = () => (
    <main className="posts">
        <h1 className="visually-hidden">Post application - a simple react application.</h1>
        <AppHeader />
        <section className="search-panel">
            <SearchPanel />
        </section>
    </main>
);

export default App;