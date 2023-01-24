import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";

import "../../assets/css/Dashboard.css";

import bfImg from "../../assets/img/bgI.jpg";

const Dashboard = () => {
  //array of blood unit availbility
  const [bloodTable, setbloodTable] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/home").then(function (response) {
      //console.log(response);
      setbloodTable(response.data);
    });
  }, []);

  return (
    <div className="dashboard color_c close_c">
      <h1 className="color_c">BLOOD STOCK</h1>

      <table className="blood-table">
        <thead>
          <tr>
            <th>BLOOD GROUP</th>
            <th>UNIT</th>
          </tr>
        </thead>
        <tbody>
          {bloodTable.length > 0 &&
            bloodTable.map((val) => {
              return (
                <tr key={val.b_id}>
                  <td>{val.blood_group}</td>
                  <td>{val.unit}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {/* <img src={bfImg} alt="bg"/>*/}
      <Footer />
    </div>
  );
};

export default Dashboard;
