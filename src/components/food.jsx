import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import "../styles/food.css";

const Food = () => {
  let [food, setFood] = useState([]);
  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get("http://localhost:4000/food");
      let data = await response.data;
      setFood(data);
    };
    fetchdata();
  }, []);

  return (
    <div className="food">
      <Navbar />
      <div className="content1">
        <h1>Contact Us</h1>

        <a href="">Home</a>
        <a href="">Contact Us</a>
      </div>
      <div className="content2">
        {food.map((x, index) => {
          return (
            <div key={index} className="msg">
              <img src={x.imageURL} alt="" />
              <h3>{x.title}</h3>
              <h3>written by Author:{x.author}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Food;
