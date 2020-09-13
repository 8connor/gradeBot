import React from "react";
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
import Axios from "axios";
import "./index.css";

class AllAssignments extends React.Component {
    state = {
        all: [],
        specificGrade: [],
        beenClicked: false
    }


    assignments() {
        Axios.get("/api/allAssignments").then(res => {
            this.setState({
                all: res.data
            })
        })
    }

    componentDidMount() {
        this.assignments();
    }

    renderTheNew(a) {
        // let obj = {
        //     studentID: a
        // }

        Axios
            .get("/api/allUsers/")
            .then(data => {
                var res = data.data

                this.setState({
                    specificGrade: res,
                    beenClicked: true
                });
            })
            .catch(err => console.log(err));
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
                                <th>Grades</th>
                            </tr>
                        </thead>
                        {
                            this.state.all.map((assignments, index) =>
                                <thead key={index}>
                                    <tr>
                                        <th>{assignments.task}</th>
                                        <th>{assignments.taskName}</th>
                                        <th>{assignments.requirements}</th>
                                        <th>
                                            <Button onClick={() => { this.renderTheNew(assignments._id) }}>Click here for grades</Button>
                                        </th>
                                    </tr>
                                </thead>
                            )
                        }
                    </Table>

                    {
                        this.state.beenClicked ?
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Student name</th>
                                        <th>Grade</th>
                                    </tr>
                                </thead>
                                {
                                    this.state.specificGrade.map((specific, index) =>
                                        <thead key={index}>
                                            <tr>
                                                <th>{specific.firstName}</th>
                                                <th>{specific.Grade}</th>
                                            </tr>
                                        </thead>
                                    )
                                }
                            </Table>
                            : false
                    }

                </Row>
            </Container>
        )
    }

}

export default AllAssignments;