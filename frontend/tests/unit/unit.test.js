import React from 'react';
import { render, screen } from "@testing-library/react"
import Button from '../../src/components/Button';

describe('BUTTON component test suite', () => {
    test('should show the given value', () => {
        render(
           <Button className={submit} value = "3"/>
        );
        let submitEl = screen.getByTestId("submit").value 
        expect(submitEl).toBe("3")
    })
})