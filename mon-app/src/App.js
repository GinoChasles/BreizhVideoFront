
import './App.css';
import Film from "./components/Film"
import Village from "./components/Village"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    
    <Village data={data} apiUrl={"http://localhost:8080/breizvideo/villages"} />
    </div>
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