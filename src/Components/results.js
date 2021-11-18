import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import { useHistory } from "react-router-dom";

export default function Results() {
  const [results, setResults] = useState({
    min: 0,
    max: 0,
    size: 0,
    av_age: 0,
    pizza: 0,
    pasta: 0,
    pnw: 0,
    peo: 0,
    pwm: 0,
    pwtv: 0,
    plR: 0,
  });
  const [size, setSize] = useState("counting...");
  const history = useHistory();
  const nav2home = () => {
    history.push("/");
  };

  useEffect(() => {
    var surveyRef = firebase.db.collection("results");
    surveyRef
      .orderBy("age", "asc")
      .get()
      .then((snapshot) => {
        var size = snapshot.size;
        var arr = [];
        var av_age = 0;
        var p_pizza = 0;
        var p_pasta = 0;
        var p_pnw = 0;
        var peo = 0;
        var pwm = 0;
        var pwtv = 0;
        var plr = 0;
        snapshot.forEach((doc) => {
          const data = { ...doc.data(), uid: doc.id };
          arr.push(data);
          av_age += data.age;
          p_pizza += "pizza" in data ? 1 : 0;
          p_pasta += "pasta" in data ? 1 : 0;
          p_pnw += "pnw" in data ? 1 : 0;
          peo += "q1" in data ? (data.q1 == "" ? 0 : 1) : 0;
          pwm += "q2" in data ? (data.q2 == "" ? 0 : 1) : 0;
          pwtv += "q3" in data ? (data.q3 == "" ? 0 : 1) : 0;
          plr += "q4" in data ? (data.q4 == "" ? 0 : 1) : 0;
          console.log(data);
        });

        var d = {
          min: arr.length > 0 ? arr[0].age : 0,
          max: arr.length > 0 ? arr[arr.length - 1].age : 0,
          size: size,
          av_age: (av_age / size).toFixed(1),
          pizza: ((p_pizza / size) * 100).toFixed(1),
          pasta: ((p_pasta / size) * 100).toFixed(1),
          pnw: ((p_pnw / size) * 100).toFixed(1),
          peo: peo,
          pwm: pwm,
          pwtv: pwtv,
          plr: plr,
        };
        setResults(d);
      })
      .catch((error) => console.log(error));
  }, []);

  //console.log(results[index].age);
  // Object.keys(results).map((obj) => {
  //   var elements = obj.age
  //   console.log(elements)
  // })
  var res = results;
  console.log(res);
  //var keys = Object.keys(res)

  // for (let i = 0; i < keys.length; i++) {
  //   var k = keys[i];
  //   var age = res;
  //   //console.log(age);
  // }

  return (
    <>
      <div className="detailsCont">
        <div className="resultsContainer">
          <h3> Total number of surveys:</h3>
          <h3> Average age: </h3>
          <h3> Oldest person who participated in the survey: </h3>
          <h3> Youngest person who participated in the survey: </h3>
          <br></br>
          <h3> Percentage of people who like pizza: </h3>
          <h3> Percentage of people who like pasta: </h3>
          <h3> Percentage of people who like pap n wors: </h3>
          <br></br>
          <h3> People who like to eat out: </h3>
          <h3> People who like to watch movies: </h3>
          <h3> People who like to watch tv: </h3>
          <h3> People who like to listen to radio: </h3>
        </div>
        <div className="resultsContainer">
          <h3>#{results.size}</h3>
          <h3>#{results.av_age}</h3>
          <h3>#{results.max}</h3>
          <h3>#{results.min}</h3>
          <br></br>
          <h3>#{results.pizza}</h3>
          <h3>#{results.pasta}</h3>
          <h3>#{results.pnw}</h3>
          <br></br>
          <h3>#{results.peo}</h3>
          <h3>#{results.pwm}</h3>
          <h3>#{results.pwtv}</h3>
          <h3>#{results.plr}</h3>
        </div>
      </div>
      <div className="butCont">
        <button onClick={nav2home}> Okay</button>
      </div>
    </>
  );
}
