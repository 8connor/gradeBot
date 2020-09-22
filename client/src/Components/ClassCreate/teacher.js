import Axios from "axios";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useEffect, useState } from "react";

function TeacherSelect(props) {
  const [teacherList, setTeacherList] = useState();
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedTeacherID, setSelectedTeacherID] = useState("");

  useEffect(() => {
    const get = async () => {
      const theTeachers = await Axios.get("/api/allTeachers");

      setTeacherList(theTeachers.data);
    };

    get();
  }, []);

  console.log(props.classToCreate);

  const assignTeacher = () => {

    let teachObj = {
      teacherName: selectedTeacher,
      teacherID: selectedTeacherID,
      classRoom: props.classToCreate // Where is this being used?
    };

    Axios.post("/api/updateTeacher", teachObj).then((res) => console.log(res));
  };

  // Does this need to be in useEffect?
  if (props.classCreated === true) {
    assignTeacher();
  }

  const handleSelect = (e) => {
    setSelectedTeacher(e);
  };

  const handleClick = (e) => {
      setSelectedTeacherID(e)
  };

  return (
    <>
      <p>Select a teacher:</p>
      <DropdownButton
        title={
          selectedTeacher === ""
            ? "Select a teacher name here"
            : selectedTeacher
        }
        onSelect={handleSelect}
      >
        {teacherList &&
          teacherList.map((teacher, index) => (
            <Dropdown.Item
              key={index}
              eventKey={teacher.firstName}
              value={teacher._id}
              onClick={() => handleClick(teacher.teacherID)}
            >
              {teacher.firstName}
            </Dropdown.Item>
          ))}
      </DropdownButton>
    </>
  );
}

export default TeacherSelect;
