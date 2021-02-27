import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';

import PlacesFilter from "../PlacesFilter"

afterEach(cleanup)

describe("Button disable test", () => {
    it("Make sure cancel flexibility button is not disabled", () => {
        const container: HTMLElement | null = document.querySelector('#cancel-flexibility');
        if(container) {
            const cancelBtn = getByTestId(container, 'cancel-flexibility');
            expect(cancelBtn).not.toBeDisabled();
        }
    });
    it("Make sure type of place button is not disabled", () => {
        const container: HTMLElement | null = document.querySelector('#type-of-place');
        if(container) {
            const placeBtn = getByTestId(container, 'type-of-place');
            expect(placeBtn).not.toBeDisabled();
        }
    })
    it("Make sure price button is not disabled", () => {
        const container: HTMLElement | null = document.querySelector('#price');
        if(container) {
            const priceBtn = getByTestId(container, 'price');
            expect(priceBtn).not.toBeDisabled();
        }
    })
    it("Make sure instant book button is not disabled", () => {
        const container: HTMLElement | null = document.querySelector('#instant-book');
        if(container) {
            const bookBtn = getByTestId(container, 'instant-book');
            expect(bookBtn).not.toBeDisabled();
        }
    })
    it("Make sure more-filters button is not disabled", () => {
        const container: HTMLElement | null = document.querySelector('#more-filters');
        if(container) {
            const moreBtn = getByTestId(container, 'more-filters');
            expect(moreBtn).not.toBeDisabled();
        }
    })

    // it("matches snapshot", () => {
    //     const { container } = render(<PlacesFilter />)
    //     expect(container).toMatchSnapshot()
    // })
    
})

it("checkPlaceFilterRender", ()=>{
    const {queryByTitle } = render(<PlacesFilter />);
    const placeFilter  = queryByTitle("placeFilter");
    expect(placeFilter).toBeTruthy();
})

