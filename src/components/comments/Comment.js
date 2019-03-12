import React, {Component} from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/postActions'


class Comment extends Component {
    // state = {
    //     comment: null
    // }
    //
    // componentDidMount() {
    //     let id = this.props.match.params.comment_id;
    //     axios.get('https://jsonplaceholder.typicode.com/comments/' + id)
    //         .then(res => {
    //             this.setState({
    //                 comment: res.data
    //             });
    //         });
    // }

    handleClick = () => {
        this.props.deleteComment(this.props.comment.id);
        this.props.history.push('/')
    }

    render() {
        console.log(this.props);
        // const comment = this.state.comment ? (
        const comment = this.props.comment ? (
            <div className="post">
                <h4 className="center">{this.props.comment.name}</h4>
                <h5>{this.props.comment.email}</h5>
                <p>{this.props.comment.body}</p>
                <div className="btn grey" onClick={this.handleClick}>
                    Delete comment
                </div>
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

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.comment_id;
    return {
        comment: state.comments.find(comment => comment.id == id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {deleteComment: (id) => dispatch(deletePost(id))};
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);