
import React, { useContext, useEffect, useState } from "react"
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import CanvasJSReact from "../../canvasjs.react";

import { AuthContext } from "../../Context/AuthContext";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Dashboard() {
    const authContext = useContext(AuthContext);
    const [userRole, setUserRole] = useState("");

    useEffect(
        () => {
            console.log("In dashboard");
            console.log(authContext);
            let role = "";

            if (authContext.user.accessType === "admin")
                role = "Admin Dashboard"
            else if (authContext.user.accessType === "teacher")
                role = "Teacher Dashboard";
            else if (authContext.user.accessType === "student")
                role = "Student Dashboard";

            setUserRole(role);

        }
    )

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark2", // "light1", "dark1", "dark2"
        title: {
            text: "Trip Expenses"
        },
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",
            startAngle: -90,
            dataPoints: [
                { y: 20, label: "Airfare" },
                { y: 24, label: "Food & Drinks" },
                { y: 20, label: "Accomodation" },
                { y: 14, label: "Transportation" },
                { y: 12, label: "Activities" },
                { y: 10, label: "Misc" }
            ]
        }]
    }


    // Based on the Access Type we can populate the Header below
    return (
        <Container>
            <Row>
                <Col>
                    <h1>{userRole}</h1>
                </Col>
            </Row>
            <Row>
                <div>
                    <CanvasJSChart options={options}
                    /* onRef={ref => this.chart = ref} */
                    />
                    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                </div>
            </Row>
        </Container>
    )
}



export default Dashboard;

