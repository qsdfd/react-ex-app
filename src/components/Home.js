import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component {
    state = {
        comment: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => this.setState({
                comment: res.data.slice(0, 10)
            }));
    }

    render() {
        const {comment} = this.state;
        const quotesList = comment.length ? (
            comment.map(comment => {
                return (
                    <div className="post card" key={comment.id}>
                        <div className="card-content">
                            <Link to={'/comments/' + comment.id}>
                                <span className="card-title">
                                <b>{comment.email}</b>
                            </span>
                            </Link>
                            <p>{comment.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No comments yet</div>
        );

        return (
            <div className="container">
                <h4 className="center">Comments</h4>
                {quotesList}
            </div>
        );
    }
};

export default Home;