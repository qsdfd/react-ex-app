import React, { Component } from 'react';
import QuotesList from './QuotesList'
import AddQuote from './AddQuote'

class Quotes extends Component {
    state = {
        quotes: [
            {id: 1, author: 'Dr. Seuss', quote: 'Don\'t cry because it\'s over, smile because it happened.'},
            {id: 2, author: 'Oscar Wilde', quote: 'Be yourself; everyone else is already taken.'}
        ]
    }

    deleteQuote = (id) => {
        const quotes = this.state.quotes.filter(
            quote => quote.id !== id
        );
        this.setState({quotes});
    }

    addQuote = (quote) => {
        quote.id = Math.random();
        let quotes = [...this.state.quotes, quote];
        this.setState({quotes})
    }

    render() {
        return (
            <div className="quote-app container">
                <h1 className="center blue-text">
                    Quotes
                </h1>
                <QuotesList quotes={this.state.quotes} deleteQuote={this.deleteQuote}/>
                <AddQuote addQuote={this.addQuote} />
            </div>
        );
    }
}

export default Quotes;
