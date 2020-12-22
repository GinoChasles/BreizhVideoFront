
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
  {name:'180nantes', post_code:'44300'},
  {name:'180nantes', post_code:'44300'},
  {name:'180nantes', post_code:'44300'},
  {name:'180nantes', post_code:'44300'},
  {name:'180nantes', post_code:'44300'}
]

const dataFilm=[
  {id:1, TITLE:"academy dinosaur",DESCRIPTION:"	A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies" ,RELEASE_YEAR:2006,LENGTH:86},
  {id: 2,TITLE:"ace goldfinger",DESCRIPTION:"A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China" ,RELEASE_YEAR:2006,LENGTH:48},
  {id: 3,TITLE:"ADAPTATION HOLES",DESCRIPTION:"	A Astounding Reflection of a Lumberjack And a Car who must Sink a Lumberjack in A Baloon Factory" ,RELEASE_YEAR:2006,LENGTH:50}]


fetch('http://localhost:8080/breizhvideo/actor/1', {
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