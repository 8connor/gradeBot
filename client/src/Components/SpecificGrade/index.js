import React from "react";
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"
import "./index.css";
import Axios from "axios";



class SpecificGrade extends React.Component {
    state = {
        all: []
    }

    assignments() {
        Axios.get().then(res => {

            console.log(res)

            this.setState({
                all: res.data
            })
        })
    }

    componentDidMount() {
        this.assignments()
    }


    render() {
        return (
            <Container>
                <Row>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Task type</th>
                                <th>Task name</th>
                                <th>Requirements</th>
                                <th>Grade</th>
                            </tr>
                        </thead>
                        {this.state.all.map((assignments, index) =>
                            <thead key={index}>
                                <tr key={index}>
                                    <th key={index}>{assignments.Task}</th>
                                    <th key={index}>{assignments.taskName}</th>
                                    <th key={index}>{assignments.requirements}</th>
                                    <th key={index}>{assignments.Grade}</th>
                                    <th key={index}><Button><Link to={`/grade/${this.state.all[index]._id}`}>check grades</Link></Button></th>
                                </tr>
                            </thead>
                        )}
                    </Table>
                </Row>
            </Container>
        )
    }
}

export default SpecificGrade