import "./App.css";
import FoodBox from "./components/FoodBox/FoodBox";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";


function App() {
  return <div className="App">
  <h2>Food List: </h2>
  <Col>
    {foods.map((item, index) => {
      return (
      <FoodBox item={item} key={index + Date.now()}/>
      )
    })}
  </Col>
  </div>;
}
export default App; 