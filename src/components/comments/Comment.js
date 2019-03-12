import React, {Component} from 'react';
import axios from 'axios';


class Post extends Component {
    state = {
        comment: null
    }

    componentDidMount() {
        let id = this.props.match.params.comment_id;
        axios.get('https://jsonplaceholder.typicode.com/comments/' + id)
            .then(res => {
                this.setState({
                    comment: res.data
                });
            });
    }

    render() {
        const comment = this.state.comment ? (
            <div className="post">
                <h4 className="center">{this.state.comment.name}</h4>
                <h5>{this.state.comment.email}</h5>
                <p>{this.state.comment.body}</p>
            </div>
        ) : (
            <div className="center">Loading comment...</div>
        );

        return (
            <div className="container">
                {comment}
            </div>
        );
    }
}

export default Post;