import "./App.css";
import FoodBox from "./components/FoodBox/FoodBox";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import { useState } from "react";
import AddFoodForm from './components/AddFoodForm/AddFoodForm'


 
function App() {

  const[foodsArray, setFoodsArray] = useState(foods)

  return <div className="App">
  <AddFoodForm foodsArray={foodsArray} setFoodsArray={setFoodsArray}/>
  <h2>Food List: </h2>
  <Col>
    {foodsArray.map((item, index) => {
      return (
      <FoodBox item={item} key={index + Date.now()}/>
      )
    })}
  </Col>
  </div>;
}
export default App; 