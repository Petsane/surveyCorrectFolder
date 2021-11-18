import React, { useState } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import firebase from "./firebase";
import { useHistory } from "react-router-dom";
import "./Home.css";

export default function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [age, setAge] = useState("");
  const [pizza, setPizza] = useState("");
  const [pasta, setPasta] = useState("");
  const [pnW, setPnW] = useState("");
  const [csf, setCsf] = useState("");
  const [bsf, setBsf] = useState("");
  const [other, setOther] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");

  const history = useHistory();

  function handleSubmit() {
    var inputs = {
      name: name,
      surname: surname,
      number: parseInt(number),
      date: date,
      age: parseInt(age),
      q1: question1,
      q2: question2,
      q3: question3,
      q4: question4,
    };

    var pizzaRef = document.getElementById("pizza");
    var pizzaVal = pizzaRef.value;

    var pastaRef = document.getElementById("pasta");
    var pastaVal = pastaRef.value;

    var pnWRef = document.getElementById("pnW");
    var pnWVal = pnWRef.value;

    var csfRef = document.getElementById("csf");
    var csfVal = csfRef.value;

    var bsfRef = document.getElementById("bsf");
    var bsfVal = bsfRef.value;

    var otherRef = document.getElementById("other");
    var otherVal = otherRef.value;

    if (pizzaRef.checked === true) {
      var newobj = {
        pizza: pizzaVal,
      };
      var updatedinputs = Object.assign(inputs, newobj);
    }
    if (pastaRef.checked === true) {
      newobj = {
        pasta: pastaVal,
      };
      updatedinputs = Object.assign(inputs, newobj);
    }
    if (pnWRef.checked === true) {
      newobj = {
        pnW: pnWVal,
      };
      updatedinputs = Object.assign(inputs, newobj);
    }
    if (csfRef.checked === true) {
      newobj = {
        csf: csfVal,
      };
      updatedinputs = Object.assign(inputs, newobj);
    }
    if (bsfRef.checked === true) {
      newobj = {
        bsf: bsfVal,
      };
      updatedinputs = Object.assign(inputs, newobj);
    }
    if (otherRef.checked === true) {
      newobj = {
        other: otherVal,
      };
      updatedinputs = Object.assign(inputs, newobj);
    }

    //Validation
    if (inputs.name.trim() === "" ) {
      alert("requird field");
      return;
    } else if(inputs.name.trim().length < 3){
      alert("Name should have atleast 3 characters");
      return;
    } else if (
      inputs.surname.trim() === ""
    ) {
      alert("requird field");
      return;
    } else if(inputs.surname.trim().length < 3){
      alert("Surname should have atleast 3 characters");
      return;
      
    } else if (
      inputs.number === "" 
    ) {
      alert("requird field");
      return;
    }  else if(inputs.number.length < 10 || inputs.number.length > 10){
      alert("insert a valid legnth (10)");
      return;
      
    } else if(isNaN(inputs.number)){
      alert("insert a valid number");
      return;
      
    }else if (
      inputs.age < 5 ||
      inputs.age > 120
    ) {
      alert("insert a valid age between 5 and 120");
      return;
    }  else if(
      inputs.age === ""){
        alert("requird field");
        return;
        
    } else if(isNaN(inputs.age)){
      alert("insert a valid age");
      return;
      
    }else if (typeof inputs.date != "string" || inputs.date.length < 3) {
      alert("insert a valid date");
      return;
    } else if (inputs.q1.trim() == "") {
      alert("answer q1");
      return;
    } else if (inputs.q2.trim() == "") {
      alert("answer q2");
      return;
    } else if (inputs.q3.trim() == "") {
      alert("answer q3");
      return;
    } else if (inputs.q4.trim() == "") {
      alert("answer q4");
      return;
    } else {
      var surveyRef = firebase.db.collection("results");
      surveyRef
        .add(inputs)
        .then((documentReference) => {
          console.log("document reference ID", documentReference.id);
          alert("data Uploaded!");
        })
        .catch((error) => {
          console.log(error.message);
        });
      history.push("/");
    }
  }

  const data = [
    {
      question: "I like to eat out",
      StronglyAgree: (
        <input
          type="radio"
          name="row1"
          value="1"
          onChange={(e) => setQuestion1(e.target.value)}
          id="1.1"
        />
      ),
      Agree: (
        <input
          type="radio"
          name="row1"
          value="2"
          onChange={(e) => setQuestion1(e.target.value)}
          id="1.2"
        />
      ),
      Neutral: (
        <input
          type="radio"
          name="row1"
          value="3"
          onChange={(e) => setQuestion1(e.target.value)}
          id="1.3"
        />
      ),
      Disagree: (
        <input
          type="radio"
          name="row1"
          value="4"
          onChange={(e) => setQuestion1(e.target.value)}
          id="1.4"
        />
      ),
      StronglyDisagree: (
        <input
          type="radio"
          name="row1"
          value="5"
          onChange={(e) => setQuestion1(e.target.value)}
          id="1.5"
        />
      ),
    },
    {
      question: "I like to watch movies",
      StronglyAgree: (
        <input
          type="radio"
          name="row2"
          value="1"
          onChange={(e) => setQuestion2(e.target.value)}
          id="2.1"
        />
      ),
      Agree: (
        <input
          type="radio"
          name="row2"
          value="2"
          onChange={(e) => setQuestion2(e.target.value)}
          id="2.2"
        />
      ),
      Neutral: (
        <input
          type="radio"
          name="row2"
          value="3"
          onChange={(e) => setQuestion2(e.target.value)}
          id="2.3"
        />
      ),
      Disagree: (
        <input
          type="radio"
          name="row2"
          value="4"
          onChange={(e) => setQuestion2(e.target.value)}
          id="2.4"
        />
      ),
      StronglyDisagree: (
        <input
          type="radio"
          name="row2"
          value="5"
          onChange={(e) => setQuestion2(e.target.value)}
          id="2.5"
        />
      ),
    },
    {
      question: "I like to watch TV",
      StronglyAgree: (
        <input
          type="radio"
          name="row3"
          value="1"
          onChange={(e) => setQuestion3(e.target.value)}
          id="3.1"
        />
      ),
      Agree: (
        <input
          type="radio"
          name="row3"
          value="2"
          onChange={(e) => setQuestion3(e.target.value)}
          id="3.2"
        />
      ),
      Neutral: (
        <input
          type="radio"
          name="row3"
          value="3"
          onChange={(e) => setQuestion3(e.target.value)}
          id="3.3"
        />
      ),
      Disagree: (
        <input
          type="radio"
          name="row3"
          value="4"
          onChange={(e) => setQuestion3(e.target.value)}
          id="3.4"
        />
      ),
      StronglyDisagree: (
        <input
          type="radio"
          name="row3"
          value="5"
          onChange={(e) => setQuestion3(e.target.value)}
          id="3.5"
        />
      ),
    },
    {
      question: "I like to listen to the radio",
      StronglyAgree: (
        <input
          type="radio"
          name="row4"
          value="1"
          onChange={(e) => setQuestion4(e.target.value)}
          id="4.1"
        />
      ),
      Agree: (
        <input
          type="radio"
          name="row4"
          value="2"
          onChange={(e) => setQuestion4(e.target.value)}
          id="4.2"
        />
      ),
      Neutral: (
        <input
          type="radio"
          name="row4"
          value="3"
          onChange={(e) => setQuestion4(e.target.value)}
          id="4.3"
        />
      ),
      Disagree: (
        <input
          type="radio"
          name="row4"
          value="4"
          onChange={(e) => setQuestion4(e.target.value)}
          id="4.4"
        />
      ),
      StronglyDisagree: (
        <input
          type="radio"
          name="row4"
          value="5"
          onChange={(e) => setQuestion4(e.target.value)}
          id="4.5"
        />
      ),
    },
  ];
  const columns = [
    {
      Header: "",
      accessor: "question",
    },
    {
      Header: "Strongly Agree (1)",
      accessor: "StronglyAgree",
    },
    {
      Header: "Agree (2)",
      accessor: "Agree",
    },
    {
      Header: "Neutral (3)",
      accessor: "Neutral",
    },
    {
      Header: "Disagree (4)",
      accessor: "Disagree",
    },
    {
      Header: "Strongly disagree (5)",
      accessor: "StronglyDisagree",
    },
  ];
  return (
    <div>
      <div className="persContainer">
        <h3>Take our Survey</h3>
        <h3>Personal Details: </h3>

        <div className="detailsCont">
          <div className="labelsdiv">
            <label for="surname">Surname</label>
            <br />
            <label for="name">First Name</label>
            <br />
            <label for="contact">Contact number</label>
            <br />
            <label for="dateval">Date</label>
            <br />
            <label for="age">Age</label>
          </div>
          <div className="inputsdiv">
            <input
              type="text"
              value={surname}
              minLength="3"
              onChange={(e) => setSurname(e.target.value)}
              required
              id="surname"
            />

            <br />

            <input
              type="text"
              value={name}
              minLength="3"
              onChange={(e) => setName(e.target.value)}
              required
              id="name"
            />

            <br />

            <input
              type="tel"
              pattern="[0-9]{10}"
              title="number is required length is 10"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              id="contact"
            />

            <br />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              id="dateval"
            />

            <br />

            <input
              type="number"
              value={age}
              required
              min="5"
              max="120"
              onChange={(e) => setAge(e.target.value.trim())}
              id="age"
            />
          </div>
        </div>
      </div>

      <div className="foodCont">
        <h4>
          {" "}
          What is your favourite food? (You can choose more than 1 answer){" "}
        </h4>
        <label>
          <input
            type="checkbox"
            value="pizza"
            onChange={(e) => setPizza(e.target.value)}
            id="pizza"
          />{" "}
          Pizza
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="pasta"
            onChange={(e) => setPasta(e.target.value)}
            id="pasta"
          />{" "}
          Pasta
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="pnW"
            onChange={(e) => setPnW(e.target.value)}
            id="pnW"
          />{" "}
          Pap and Wors
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="csf"
            onChange={(e) => setCsf(e.target.value)}
            id="csf"
          />{" "}
          Chicken stir fry
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="bsf"
            onChange={(e) => setBsf(e.target.value)}
            id="bsf"
          />{" "}
          Beef stir fry
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="other"
            onChange={(e) => setOther(e.target.value)}
            id="other"
          />{" "}
          Other
        </label>
      </div>
      <div>
        <h4>
          On a scale of 1 to 5 indicate whether you strongly agree to strongly
          disagree
        </h4>
        <ReactTable data={data} columns={columns} defaultPageSize={4} />
      </div>
      <div className="butCont">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
