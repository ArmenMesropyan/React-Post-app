import React from "react";

import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

const App = () => (
    <main className="posts">
        <h1 className="visually-hidden">Post application - a simple react application.</h1>
        <AppHeader />
        <section className="search-panel">
            <div className="container search-panel__wrapper">
                <SearchPanel />
                <PostStatusFilter />
            </div>
        </section>
        <PostList />
        <PostAddForm />
    </main>
);

export default App;