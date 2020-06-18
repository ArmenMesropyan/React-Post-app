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
        ],
        term: '',
        filter: 'all',
    }

    deletePost = (id) => {
        this.setState(({posts}) => ({
            posts: posts.filter(post => post.id !== id),
        }))
    }

    onActionsClick = (action, id) => {
        this.setState(({posts}) => {
            const post = posts[posts.findIndex(post => post.id === id)];
            if(action === 'like') post.liked = !post.liked;
            else post.important = !post.important;

            return [
                ...posts,
            ]
        });
    }

    addPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const {value} = form.elements[0];
        if (!value) return;

        const newPost = {label: value, important: false, id: `${Math.random()}`};

        this.setState(({posts}) => ({
            posts: [...posts, newPost],
        }));

        form.reset();
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    searchPost(data, term) {
        if (!term) return data;
        return data.filter(item => item.label.indexOf(term) > -1);
    }

    filterPost(data, filter) {
    console.log('filter: ', filter);
    console.log('data: ', data);
        if(filter === 'all') return data;

        return data.filter(item => item[filter]);
    }

    onFilterClick = (filter) => {
        this.setState({filter});
    }

    render() {
        const {posts, term, filter} = this.state;
        const allPostsLength = posts.length;
        const likedPostsLength = posts.filter(post => post.liked).length;
        const searchPosts = this.filterPost(this.searchPost(posts, term), filter);
        return (
            <main className="posts">
                <h1>Post application - a simple react application.</h1>
                <AppHeader 
                    allPostsLength={allPostsLength}
                    likedPostsLength={likedPostsLength}
                />
                <section className="search-panel">
                    <div className="container search-panel__wrapper">
                        <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                        <PostStatusFilter 
                            filter={filter}
                            onFilterClick={this.onFilterClick}
                        />
                    </div>
                </section>
                <PostList
                    posts={searchPosts}
                    onDelete={this.deletePost}
                    onActionsClick={this.onActionsClick}
                />
                <PostAddForm
                    onAddFormSubmit={this.addPost}
                />
            </main>
        );
    }
};