import React, {Component} from "react";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

export default class App extends Component {

    state = {
        posts: [
            {label: 'I want to learn React!', important: true, liked: true, id: 'qsdw12kl01123kasd'},
            {label: 'Hi everyone!', important: false, id: 'kla12ds92jnzio'},
            {label: 'I will create new application!', important: false, id: 'lmzx014nxz0p'},
            {label: 'Whats wrong with world?!', important: false, id: 'polaz123zx0l'},
        ]
    }

    deletePost = (id) => {
        this.setState(({posts}) => ({
            posts: posts.filter(post => post.id !== id),
        }))
    }

    render() {
        const {posts} = this.state;
        return (
            <main className="posts">
                <h1>Post application - a simple react application.</h1>
                <AppHeader />
                <section className="search-panel">
                    <div className="container search-panel__wrapper">
                        <SearchPanel />
                        <PostStatusFilter />
                    </div>
                </section>
                <PostList posts={posts} onDelete={this.deletePost}/>
                <PostAddForm />
            </main>
        );
    }
};