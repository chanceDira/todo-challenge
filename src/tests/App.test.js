import { render } from "@testing-library/react";
import App from "../App";

describe(App, () => {
    it("Todos title", () => {
        const { getByTestId } = render(<App />)
        const todosValue = getByTestId('todos').textContent
        expect(todosValue).toEqual(' todos ')
    })
})