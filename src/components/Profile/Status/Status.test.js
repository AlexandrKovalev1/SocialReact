import React, { useState } from "react";
import { act, create } from "react-test-renderer";
import Status from "./Status";
import { Provider } from "react-redux";
import store from "../../../redux/reduxStore";


describe("Status component", () => {
    test("status from props shoul be in the state", () => {


        let component = create(<Provider store={store}  >
            <Status status='my-status' faa={'dsd'} />
        </Provider>);

        const instance = component;



        expect(instance).toBe('my-status');
    });
});