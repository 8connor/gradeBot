import React from "react";
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./index.css";



class SpecificGrade extends React.Component {
    render(props) {
        return (
            <Container>
                <Row>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Grade</th>
                            </tr>
                        </thead>
                        <thead >
                            <tr>
                                <th>{this.props.studentName}</th>
                                <th>{this.props.Grade}</th>
                            </tr>
                        </thead>
                    </Table>
                </Row>
            </Container>
        )
    }
}

export default SpecificGrade