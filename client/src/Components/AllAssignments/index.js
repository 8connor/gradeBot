import React from "react";
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
import Axios from "axios";
import SpecificGrade from "../SpecificGrade";
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

    renderTheNew(a) {
        Axios
            .post("/api/specificGrade/", a)
            .then(data => {
                var res = data.data

                this.setState({
                    specificGrade: res,
                    beenClicked: true
                });
            })
            .catch(err => console.log(err))
    }

    createTheRows() {
        var studentArr = this.state.specificGrade;
        var componentArr = [];

        for (var i = 0; i < studentArr.length; i++) {
            componentArr.push(<SpecificGrade key={i} studentName={studentArr[i].studentName} Grade={studentArr[i].Grade} />)
        };

        return componentArr;
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
                        {this.assignments()}
                        {this.state.all.map((assignments, index) =>
                            <thead key={index}>
                                <tr>
                                    <th>{assignments.Task}</th>
                                    <th>{assignments.taskName}</th>
                                    <th>{assignments.requirements}</th>
                                    <th>
                                        <Button onClick={() => { this.renderTheNew(assignments._id) }}>Click here for grades</Button>
                                    </th>
                                </tr>
                            </thead>
                        )}
                    </Table>
                    {this.state.beenClicked ? this.createTheRows() : false}
                </Row>
            </Container>
        )
    }

}

export default AllAssignments;