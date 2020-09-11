import React from "react";
import Col from "react-bootstrap";
import Button from "react-bootstrap";

//May convert this into a presentational function component rather than a class.

function CurrentList(props) {
  return (
    <Col sm={12} md={12} lg={12} id="listDiv">
      {this.state.currentListFilled ? (
        <h4>Current students you wish to add: </h4>
      ) : (
        false
      )}
      {this.state.currentListFilled
        ? this.state.currentList.map((students, index) => (
            <>
              <p key={index} id={`listNum${index}`}>
                {students.firstName}
              </p>
              <Button key={index} onClick={() => this.handleDelete(index)}>
                Delete
              </Button>
            </>
          ))
        : false}
    </Col>
  );
}

export default CurrentList;
