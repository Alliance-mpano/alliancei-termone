import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../src/App";

describe('Calcualtator integration tests', () => {
    test("result should be printed after adding" , () => { 
        const setStateMock = jest.fn();
        const useStateMock = (useState) => [useState, setStateMock]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock)
        
        render(<App/>);
        const num1El = screen.getByTestId("num1");
        const num1E2 = screen.getByTestId("num2")
        // const inputEl = screen.getByTestId("num1");1
        fireEvent.change(num1El, {target : {value: "4"}})
        fireEvent.change(num1E2, {target : {value: "8"}})
        let buttonEl = screen.getByTestId("submit-button");
        fireEvent.click(buttonEl)
        let resultEl = screen.getByTestId("result");

        expect(resultEl).toHaveTextContent("12")
    })
    test("result should be printed after subtraction" , () => { 
        const setStateMock = jest.fn();
        const useStateMock = (useState) => [useState, setStateMock]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock)
        
        render(<App/>);
        const num1El = screen.getByTestId("num1");
        const num1E2 = screen.getByTestId("num2")
        // const inputEl = screen.getByTestId("num1");1
        fireEvent.change(num1El, {target : {value: "40"}})
        fireEvent.change(num1E2, {target : {value: "8"}})
        let buttonEl = screen.getByTestId("submit-button");
        fireEvent.click(buttonEl)
        let resultEl = screen.getByTestId("result");

        expect(resultEl).toHaveTextContent("32")
    })
    test("result should be printed after division" , () => { 
        const setStateMock = jest.fn();
        const useStateMock = (useState) => [useState, setStateMock]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock)
        
        render(<App/>);
        const num1El = screen.getByTestId("num1");
        const num1E2 = screen.getByTestId("num2")
        // const inputEl = screen.getByTestId("num1");1
        fireEvent.change(num1El, {target : {value: "40"}})
        fireEvent.change(num1E2, {target : {value: "8"}})
        let buttonEl = screen.getByTestId("submit-button");
        fireEvent.click(buttonEl)
        let resultEl = screen.getByTestId("result");

        expect(resultEl).toHaveTextContent("5")
    })
})