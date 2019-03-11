import React from 'react';

const QuotesList = ({quotes, deleteQuote}) => {
    const quoteList = quotes.length ? (
        quotes.map(quote => {
            return (
                <div className="collection-item" key={quote.id}>
                    <span onClick={() => {deleteQuote(quote.id)}}>
                        {quote.quote} <b> - {quote.author}</b>
                    </span>
                </div>
            );
        })
    ) : (
        <p className="center">No quotes available.</p>
    );

    return (
        <div className="quotes collection">
            {quoteList}
        </div>
    );
}

export default QuotesList;