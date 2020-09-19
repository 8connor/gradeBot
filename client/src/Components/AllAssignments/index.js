import React, { useState, useContext, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form"
import "./index.css";

import AllAssignmentsService from "../../Services/AllAssignmentsService";

import { AuthContext } from "../../Context/AuthContext";


function AllAssignments (){

    const authContext = useContext(AuthContext);

    const [all, setAll] = useState([]);
    const [specificGrade, setSpecificGrade] = useState([]);
    const [classList, setClassList] = useState([]);
    const [selectedClass, setSelectedClass] = useState("");
    const [beenClicked, setBeenClicked] = useState(false);
    const [filled, setFilled] = useState(false);


    // componentDidMount() {
    //     this.classes();
    // }


    useEffect(
        () => {
            const classes = async () => {
                await AllAssignmentsService.getAllClass().then(result => {
                    setClassList(result);
                })
                .catch(err => console.log(err))
            }

            classes();
        }, []) // This will only called once since its an empty array


    // Grabs a specific assignment for a specific class. 
    // Assignments list for the specific class selected. 
    const assignments = (e) => {

        setAll([]);
        setFilled(false);
        
        let obj = {
            name: e
        }

        AllAssignmentsService.postAssignment(obj)
        .then(res => {

            setAll(res.data);
            setFilled(res.length === 0 ? false : true);

        })

    }


    const handleSelect = (e) => {
        console.log(e)

        setSelectedClass(e);
        setBeenClicked(false);

        assignments(e);
    }

    const renderTheNew = (a) =>{
        let obj = {
            assignmentID: a
        }

        AllAssignmentsService.postSpecificGrades(obj)
        .then( data => {
            var res = data.data
            console.log(res)

            setSpecificGrade(res);
            setBeenClicked(res.length === 0 ? false : true);

        })
        .catch(err => console.log(err));

    }

    const handleEdit = (specific, index) => {

        let editObj = {
            assignmentID: specific['assignmentID'],
            studentID: specific['_id'],
            newGrade: document.getElementById(`cell${index}`).value
        }

        console.log(editObj)


        AllAssignmentsService.changeGrade(editObj)
        .then(res => {
            document.getElementById(`gradeCell${index}`).innerHTML = editObj.newGrade;

            console.log(res);
        })
        .catch(err => console.log(err))
            
    }


    return (
        <Container>
            <Row className="justify-content-center">
                <DropdownButton
                    size="lg"
                    title={selectedClass === "" ? "Select a class" : selectedClass}
                    onSelect={(e) => handleSelect(e)}
                >
                    {
                        classList &&
                        classList.map((classes, index) =>
                            <Dropdown.Item key={index} eventKey={classes.name} value={classes._id}>{classes.name}</Dropdown.Item>
                        )
                    }
                </DropdownButton>
            </Row>
            <Row className="mt-5">
                {
                    filled &&
                    <Table striped bordered hover variant="dark" responsive>

                        <thead>
                            <tr>
                                <th>Task type</th>
                                <th>Task name</th>
                                <th>Requirements</th>
                                <th>Grades</th>
                            </tr>
                        </thead>

                        {/* Assignment = item */}
                        {all.map((assignments, index) =>
                            <tbody key={index}>
                                <tr>
                                    <th>{assignments.task}</th>
                                    <th>{assignments.taskName}</th>
                                    <th>{assignments.requirements}</th>
                                    <th>
                                        <Button onClick={() => { renderTheNew(assignments._id) }}>Click here for grades</Button>
                                    </th>
                                </tr>
                            </tbody>
                        )}

                    </Table>
                }
                {
                    beenClicked &&
                    <Table striped bordered hover variant="dark" responsive>
                        <thead>
                            <tr>
                                <th>Student name</th>
                                <th>Grade</th>
                                <th>Modify grade</th>
                            </tr>
                        </thead>
                        {
                            // specific = item
                            specificGrade.map((specific, index) =>
                                <tbody key={index}>
                                    <tr>
                                        <td>{specific.firstName} {specific.lastName}</td>
                                        <td id={`gradeCell${index}`}>{specific.grade}</td>
                                        <td>
                                            <Col lg={{ offset: 3, span: 6 }} md={{ offset: 3, span: 6 }} sm={{ offset: 3, span: 6 }}>
                                                <InputGroup className="mb-3">
                                                <Form.Control
                                                    placeholder="New grade"
                                                    aria-label="New grade"
                                                    aria-describedby="basic-addon2"
                                                    id={`cell${index}`}
                                                />
                                                <InputGroup.Append>
                                                    <Button variant="success" onClick={() => handleEdit(specific, index)}>Submit</Button>
                                                </InputGroup.Append>
                                            </InputGroup>
                                            </Col>

                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </Table>
                }
            </Row>
        </Container >
    )

    
}



export default AllAssignments;