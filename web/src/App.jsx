import "./styles/index.scss";
import Header from './components/Header';
import Main from './components/Main';
import { Router } from 'react-router';
import history from './components/Main/history';

function App() {
  return (
  	<Router history={history}>
	    <div className="search-app">
	      <Header />
	      <Main />
	    </div>
    </Router>
  );
}

export default App;
