import React from 'react';
import { render, cleanup } from '@testing-library/react'

import Card from "../Card";

afterEach(cleanup)


it("checkCardRender", ()=>{
    const {queryByTitle } = render(<Card ImageJpg="/images/abc.jpg" ImageWebp="/images/abc.jpg" />);
    const card  = queryByTitle("card");
    expect(card).toBeTruthy();
})


