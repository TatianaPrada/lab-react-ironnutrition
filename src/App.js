import "./App.css";
// import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";

function App() {
  return <div className="App">
  <h2>Food List: </h2>
    {foods.map((item, index) => {
          return (
          <div>
            <p>{item.name}</p>
            <img src={item.image} alt="food" width="70px"/>
          </div>
          );
        })}

  </div>;
}
export default App; 