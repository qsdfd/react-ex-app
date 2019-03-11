import React, { Component } from 'react';

class AddQuote extends Component {
    state = {
        quote: '',
        author: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addQuote(this.state);
        this.setState({
            quote: '',
            author: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Add new Quote</h3>
                    <label htmlFor="quote">Quote: </label>
                    <input type="text" id="quote" onChange={this.handleChange} value={this.state.quote}/>
                    <label htmlFor="author">Auhtor: </label>
                    <input type="text" id="author" onChange={this.handleChange} value={this.state.author}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddQuote;