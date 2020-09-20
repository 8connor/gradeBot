
import React, { useContext, useEffect, useState } from "react"
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import CanvasJSReact from "../../canvasjs.react";
import Axios from "axios";

import { AuthContext } from "../../Context/AuthContext";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Dashboard() {
    const authContext = useContext(AuthContext);
    const [userRole, setUserRole] = useState("");
    const [averages, setAverages] = useState([]);

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

    useEffect(() => {
        Axios.get("/api/allGrades").then(res => {
            setAverages(res.data)
        })


    }, [])

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark2", // "light1", "dark1", "dark2"
        title: {
            text: "Averages for assignments"
        },
        data: [{
            type: "column",
            indexLabel: "{label}: {y}%",
            startAngle: -90,
            dataPoints: averages.map((assignment, i) => {
                return { y: assignment.grades, label: assignment.Assignment }
            })
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
                <Col sm={12} lg={12} md={12}>
                    <CanvasJSChart options={options}
                    /* onRef={ref => this.chart = ref} */
                    />
                    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                </Col>
            </Row>
        </Container>
    )
}



export default Dashboard;

