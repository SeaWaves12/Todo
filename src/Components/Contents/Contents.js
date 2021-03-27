import React from "react";

const contents = ({
    Title,
    label1,
    label2,
    label3,
    checked1,
    checked2,
    checked3,
    handleClose
}) => {
    const liststyle = {
        border: "1px solid #ddd",
        margin: "8px 0px",
        backgroundColor: "#f6f6f6",
        padding: "12px",
        textDecoration: "none",
        color: "black",
        display: "block",
        position: "relative",
    }
    const closestyle = {
        cursor: 'pointer',
        position: 'absolute',
        fontWeight: 'bold',
        top: '0px',
        right: ' 0px',
        padding: '12px 16px',
        transform: 'translate(0 %, -50 %)',
        background: '#bbb'
    }

    return (
        <div>
            {
                (checked1 || checked2 || checked3) &&
                <h3>{Title}</h3>
            }
            <ul style={{
                listStyleType: "none",
                padding: '0',
                margin: '2px'
            }}>
                {
                    checked1 &&
                    <li style={liststyle}>{label1}<span style={closestyle}
                        onClick={(e) => handleClose(e, Title, "checked1")}
                    >x</span></li>
                }
                {
                    checked2 &&
                    <li style={liststyle}>{label2}<span style={closestyle}
                        onClick={(e) => handleClose(e, Title, "checked2")}
                    >x</span></li>
                }
                {
                    checked3 &&
                    <li style={liststyle}>{label3}<span style={closestyle}
                        onClick={(e) => handleClose(e, Title, "checked3")}
                    >x</span></li>
                }
            </ul>
        </div>
    );
}
export default contents;