import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import CanvasJSReact from "../../canvasjs.react";
import Axios from "axios";


function Dashboard() {
    const [options, setOptions] = useState();

    

    const handleChart = () => {
        Axios.get("/api/allGrades")
            .then(res => {
                console.log(res);

                setOptions(res.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        handleChart();
    }, [options]);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Student Grades</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;