import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import WrappedNormalLoginForm from './login'
import Show from './Show.js'
import registerServiceWorker from './registerServiceWorker';

const Hotel = () => (
    <Router>
        <div>
    <Route exact path="/" component={WrappedNormalLoginForm} />
     <Route path="/hotel" component={Show} />
     </div>
    </Router>
)

ReactDOM.render(<Hotel />, document.getElementById("root"));


registerServiceWorker();
