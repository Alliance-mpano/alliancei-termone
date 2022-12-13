import React, { useState } from "react";

import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import { Form } from "react-router-dom";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates)
}


const App = () => {

  let [calc, setCalc] = useState({
    sign: "",
    num1: 0,
    num2: 0,
    res: 0,
  });
  const operators = 
    [ "+","-", "%", "/", "**", "log", "ln"]

  ;
  
  return (
<Form method="post" id="calculator-form">

      <p>
        <span>Num 1</span>
        <input
          placeholder="First"
          aria-label="First number"
          type="number"
          name="num1"
          id = "num1"
          // defaultValue={calc.num1}
        />
        <span>Num 2</span>
        <input
          placeholder="Second"
          aria-label="Second Number"
          type="number"
          name="num2"
          id = "num2"
          // defaultValue={calc.num2}
        />
      </p>
      
      <label>
        <span>Operator</span>
        <select name = 'operator' >
       <option>+</option>
       <option>/</option>
         <option>-</option>
         <option>*</option>
         <option>**</option>
         <option>log</option>
         <option>ln</option>
       </select>
      </label>
  
      
      <p>
        <button id = "submit-button" type="submit">Calculate</button>
        <button type="button">Cancel</button>
      </p>
      <div>
      <p id = "result">Result:</p>
      </div>
    </Form>
    

    // <Wrapper>
    //   <input type value = {calc.num1} name = "num1"/>
    //   <input type value = {calc.num2} name = "num2"/>
    //   <select class="form-control">
    //     <option>+</option>
    //     <option>/</option>
    //     <option>-</option>
    //     <option>*</option>
    //   </select>
    //   <Screen value={input} />
    //   <ButtonBox>
    //     {btnValues.flat().map((btn, i) => {
    //       return (
    //         <Button
    //           key={i}
    //           className={btn === "=" ? "equals" : ""}
    //           value={btn}
    //           onClick={handleClick}
    //           // onClick={
    //           //   btn === "C"
    //           //     ? resetClickHandler
    //           //     : btn === "+-"
    //           //     ? invertClickHandler
    //           //     : btn === "%"
    //           //     ? percentClickHandler
    //           //     : btn === "="
    //           //     ? equalsClickHandler
    //           //     : btn === "/" || btn === "X" || btn === "-" || btn === "+"
    //           //     ? signClickHandler
    //           //     : btn === "."
    //           //     ? comaClickHandler
    //           //     : numClickHandler
    //           // }
    //         />
    //       );
    //     })}
    //   </ButtonBox>
    // </Wrapper>
  );
};

export default App;

