import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';

class PostShow extends Component {

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    render() {

        const { post } = this.props;

        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/">Back to index</Link>
                <button 
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);