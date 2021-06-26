import {render, fireEvent} from "@testing-library/react";
import Dashboard from "./Dashboard"


it("checkNewsBlogs", ()=>{
    const {querryByTitle} = render(<Dashboard />);
    const card = querryByTitle("data");
    expect(card).toBeTruthy();
})