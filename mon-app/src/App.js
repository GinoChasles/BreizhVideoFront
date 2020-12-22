
import './App.css';
import Film from "./components/Film"
import Village from "./components/Village"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/evenements">Evénements</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
            <li>
              <Link to="/villages">Villages</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/evenements">

          </Route>
          <Route path="/films">
            <Film/>
          </Route>
          <Route path="/villages">
           <Village data={data} apiUrl={"http://localhost:8080/breizvideo/villages"} />
          </Route>
          <Route path="/">
            <h2>Bienvenue sur le site de BreizhVidéo !</h2>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

const data = [
  {name:'nantes', post_code:'44300'},
  {name:'brest', post_code:'32300'},
  {name:'nantes', post_code:'44300'},
  {name:'nantes', post_code:'44300'},
  {name:'nantes', post_code:'44300'}
]

fetch('http://localhost:8080/breizhvideo/villages', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Credentials': 'true'
            },
            mode: 'no-cors',
            method: 'GET',
            body: JSON.stringify()
        })
            .then((response) => {
                return response.json();
            })
            .then((datas) => {
                console.log(datas);
            })
            .catch(error => console.log(error));