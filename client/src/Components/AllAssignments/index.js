import React from "react";
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Axios from "axios";
import "./index.css";

class AllAssignments extends React.Component {
    state = {
        all: [],
        specificGrade: [],
        classList: [],
        selectedClass: "",
        beenClicked: false,
        filled: false
    }


    classes() {
        Axios.get("/api/allClasses").then(res => {
            console.log(res)
            console.log(res.data);

            this.setState({
                classList: res.data
            })
        }).catch(err => console.log(err))
    }

    assignments(e) {
        this.setState({
            all: [],
            filled: false
        })

        let obj = {
            name: e
        }

        Axios.post("/api/specificClass", obj).then(res => {
            console.log(res)
            this.setState({
                all: res.data,
                filled: true
            })
        })
    }


    handleSelect = (e) => {
        console.log(e)
        this.setState({
            selectedClass: e
        });
        
        this.assignments(e);
    }

    renderTheNew(a) {
        let obj = {
            assignmentID: a
        }

        Axios
            .post("/api/specificGrade", obj)
            .then(data => {
                var res = data.data
                console.log(res)
                this.setState({
                    specificGrade: res,
                    beenClicked: true
                });
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.classes();
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <DropdownButton
                        title={this.state.selectedClass === "" ? "Select a class" : this.state.selectedClass}
                        onSelect={(e) => this.handleSelect(e)}
                    >
                        {
                            this.state.classList &&
                            this.state.classList.map((classes, index) =>
                                <Dropdown.Item key={index} eventKey={classes.name} value={classes._id}>{classes.name}</Dropdown.Item>
                            )
                        }
                    </DropdownButton>
                </Row>

                <Row className="mt-5">
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
                            this.state.filled ?
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
                                ) : false
                        }
                    </Table>

                    {
                        this.state.beenClicked &&
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
                                            <th>{specific.grade}</th>
                                        </tr>
                                    </thead>
                                )
                            }
                        </Table>
                    }

                </Row>
            </Container>
        )
    }

}

export default AllAssignments;