import { fireEvent, render, screen } from "@testing-library/react";

describe("<App/>", () => {
    test('render calculator input and button', () => {
        render(<App/>);
        const operatorEl = screen.getByTestId("operator");
        let buttonEl = screen.getByTestId("submit-button");
        expect(operatorEl).toBeInTheDocument();
        expect(operatorEl).toHaveAttribute("type", "number");
        expect(buttonEl).toBeInTheDocument()
    });

    test('Have text after writing', () => {
        render(<App/>);
        const inputEl = screen.getByTestId("num1");
        inputEl.textContent = "3"
        expect(inputEl).toHaveTextContent("3")
    })

    test("should have the 'Calcualte' button disabled when first rendered" , ()=> {
        render(<App/>);
        let buttonEl = screen.getByTestId("submit-button");
        expect(buttonEl).toBeDisabled()
    })

    test("should have the 'Calculate' button enabled when the inputs are not empty" , ()=> {
        render(<App/>);
        const num1El = screen.getByTestId("num1");
        const num1E2 = screen.getByTestId("num2");
        expect(screen.getByTestId("submit-button")).toBeDisabled()
        fireEvent.change(num1El, {target : {value: "4"}})
        fireEvent.change(num1E2, {target : {value: "8"}})
        expect(screen.getByTestId("submit-button")).toBeEnabled()
    })

})