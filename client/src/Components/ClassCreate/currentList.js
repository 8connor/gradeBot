import React from "react";
import Col from "react-bootstrap";
import Button from "react-bootstrap";

//May convert this into a presentational function component rather than a class.

class CurrentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: [],
      currentListFilled: false,
      error: false
    };
  }

  handleDelete(index) {
    let tempArr = this.state.currentList.slice();

    tempArr.splice(index, 1);

    if (this.state.currentList.length === 0) {
      this.setState({
        currentList: tempArr,
        currentListFilled: false,
      });
    } else {
      this.setState({
        currentList: tempArr,
      });
    }
  }

  handleAdd(index) {
    let tempArr = this.state.currentList.slice();
    let secondTemp = this.state.studentArr.slice();

    tempArr.push(secondTemp[index]);

    secondTemp.splice(index, 1);

    console.log(tempArr);

    if (secondTemp.length === 0) {
      this.setState({
        studentArr: secondTemp,
        filled: false,
      });
    }

    this.setState({
      currentList: tempArr,
      currentListFilled: true,
    });
  }

  render() {
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
}

export default CurrentList;
