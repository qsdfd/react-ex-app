import React, {Component} from 'react';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Quotes from './components/quotes/Quotes';
import Comment from './components/comments/Comment';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/quotes" component={Quotes}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/comments/:comment_id" component={Comment}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
