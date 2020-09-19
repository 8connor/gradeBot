
import React, { useEffect, useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import CreateFormService from "../../Services/CreateFormService";

import { AuthContext } from "../../Context/AuthContext";


function CreateForm(props) {

    const authContext = useContext(AuthContext);


    const [classList, setClassList] = useState();
    const [selectedClass, setSelectedClass] = useState("");

    useEffect(() => {

        const get = async () => {
            const theClasses = await CreateFormService.getAllClass("/api/allClasses");

            setClassList(theClasses.data)
        }

        get();
    }, [])

    const handleSelect = (e) => {
        console.log(e)
        setSelectedClass(e)
    }

    const handleClick = (e) => {
        e.preventDefault();

        var assignmentObj = {
            task: document.getElementById("taskType").value,
            taskName: document.getElementById("taskName").value,
            requirements: document.getElementById("taskRequirements").value,
            classroom: selectedClass
        };

        CreateFormService.createAssignment(assignmentObj)
        .then(res => console.log(res))
        
    }


    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Row className="justify-content-center">
                            <DropdownButton
                                title={selectedClass === "" ? "Select a class" : selectedClass}
                                onSelect={handleSelect}
                            >
                                {
                                    classList &&
                                    classList.map((classes, index) =>
                                        <Dropdown.Item key={index} eventKey={classes.name} value={classes._id}>{classes.name}</Dropdown.Item>
                                    )
                                }
                            </DropdownButton>
                        </Row>
                        <Form.Group controlId="taskType">
                            <Form.Label>Task type:</Form.Label>
                            <Form.Control as="select">
                                <option>Quiz</option>
                                <option>Test</option>
                                <option>Homework</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="taskName">
                            <Form.Label>Task name:</Form.Label>
                            <Form.Control type="text" placeholder="Task name." />
                        </Form.Group>
                        <Form.Group controlId="taskRequirements">
                            <Form.Label>Task requirements:</Form.Label>
                            <Form.Control as="textarea" placeholder="This is where you will type out the requirements for the task." rows="10" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Button type="submit" onClick={handleClick}>Submit</Button>
            </Row>
        </Container>
    )

}

export default CreateForm;