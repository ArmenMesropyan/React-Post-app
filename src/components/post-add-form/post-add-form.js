import React from "react";

const PostAddForm = (props) => {
    return (
        <section className="posts__form posts-form">
            <div className="container">
                <form className="posts-form__form" onSubmit={props.onAddFormSubmit}>
                    <input 
                        type="text"
                        placeholder="What are you thinking now?"
                        className="posts-form__input"
                    />
                    <button
                        type="submit"
                        className="posts-form__btn"
                    >Add</button>
                </form>
            </div>
        </section>
    );
}

export default PostAddForm;