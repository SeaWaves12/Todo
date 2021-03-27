import React, { useEffect, useState } from "react";
import CheckboxesGroup from "../CheckboxesGroup/CheckboxesGroup";
import Contents from "../Contents/Contents"



const Mystyle = {
    backgroundColor: "Blue",
    height: "100vh",
    width: "calc(100vw-24px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflowX: "hidden",
}
const Mystyle2 = {
    marginRight: "5px",
    backgroundColor: "white",
    maxHeight: "375px",
    width: "200px",
    overflowY: "auto",
    paddingRight: "20px",
    paddingLeft: "20px",
    display: "block",
    borderRadius:"4px"
}
const Mystyle3 = {
    marginLeft: "5px",
    marginTop:"0",
    backgroundColor: "white",
    height: "375px",
    paddingLeft: "20px",
    paddingRight:"20px",
    display: "block",
    width: "200px",
    borderRadius: "4px",
    overflowY: "auto"
}


const Main = () => {

    const [state, setState] = useState({
        Title1: {
            checked1: false,
            checked2: false,
            checked3: false,
        },
        Title2: {
            checked1: false,
            checked2: false,
            checked3: false,
        },
        Title3: {
            checked1: false,
            checked2: false,
            checked3: false,
        },
    });

    const [noVal, setNoVal] = useState(true);

    const handleChange = (event, Title, label) => {
        // console.log("event.target.name", event.target.name, event.target.checked);
        const title = state[Title];
        setState({ ...state, [Title]: { ...title, [event.target.name]: event.target.checked } });
        console.log("state", state);
    };

    const handleClose = (event, Title, name) => {
        // console.log("event.target.name", Title, name);
        const title = state[Title];
        // console.log("title[name]", title[name]);
        setState({ ...state, [Title]: { ...title, [name]: !title[name] } });
        console.log("state", state);
    };

    useEffect(() => {
        console.log("Calling use effect: ", noVal)
        for (const item in state) {
            const title = state[item];
            for (const val in title) {
                console.log("Val", title[val])
                if (title[val]) {
                    setNoVal(false);
                    return;
                }
            }
        }
        setNoVal(true);
    }, [state])

    return (
        <div style={Mystyle}>
            <div style={Mystyle2}>
                <CheckboxesGroup Title="Title1" label1="label1" label2="label2" label3="label3"
                    checked1={state.Title1.checked1} checked2={state.Title1.checked2} checked3={state.Title1.checked3}
                    handleChange={handleChange}
                />
                <CheckboxesGroup Title="Title2" label1="label4" label2="label5" label3="label6"
                    checked1={state.Title2.checked1} checked2={state.Title2.checked2} checked3={state.Title2.checked3}
                    handleChange={handleChange}
                />
                <CheckboxesGroup Title="Title3" label1="label7" label2="label8" label3="label9"
                    checked1={state.Title3.checked1} checked2={state.Title3.checked2} checked3={state.Title3.checked3}
                    handleChange={handleChange}
                />
            </div>
            {
                noVal ?
                    <div style={{
                        ...Mystyle3, display: "flex", alignItems: "center", justifyContent: "center",
                        textAlign: "center"}}>
                        <h3>No value selected</h3>
                    </div>
                    :
                    <div style={Mystyle3}>
                        <Contents Title="Title1" label1="label1" label2="label2" label3="label3"
                            checked1={state.Title1.checked1} checked2={state.Title1.checked2} checked3={state.Title1.checked3}
                            handleClose={handleClose}
                        />
                        <Contents Title="Title2" label1="label4" label2="label5" label3="label6"
                            checked1={state.Title2.checked1} checked2={state.Title2.checked2} checked3={state.Title2.checked3}
                            handleClose={handleClose}
                        />
                        <Contents Title="Title3" label1="label7" label2="label8" label3="label9"
                            checked1={state.Title3.checked1} checked2={state.Title3.checked2} checked3={state.Title3.checked3}
                            handleClose={handleClose}
                        />
                    </div>
            }
        </div>
    );
}

export default Main;