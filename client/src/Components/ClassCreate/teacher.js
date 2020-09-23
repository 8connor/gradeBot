import Axios from "axios";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useEffect, useState } from "react";



function TeacherSelect(props) {
    const [teacherList, setTeacherList] = useState();
    const [selectedTeacher, setSelectedTeacher] = useState("");
    const [teacherID, setTeacherID] = useState();
    const [teacherGet, setTeacherGet] = useState(false);

    useEffect(() => {
        const get = async () => {
            const theTeachers = await Axios.get("/api/allTeachers");

            setTeacherList(theTeachers.data)
            setTeacherGet(true)
        }

        get();

    }, [])

    const assignTeacher = () => {
        let teachObj = {
            teacher: selectedTeacher,
            teacherID: teacherID,
            classRoom: props.currentClass // Where is this being used? 
        }
        
        Axios.post("/api/updateTeacher", teachObj).then(res => console.log(res));
    }

    // Does this need to be in useEffect?
    useEffect(() => {
        if (props.classCreated === true) {
            assignTeacher();
        }
    })

    const handleSelect = (e) => {
        setSelectedTeacher(e);
    }

    const handleClick = (e) => {
        setTeacherID(e)
    }

    return (
        <>
            <p>
                Select a teacher:
            </p>
            <DropdownButton
                title={selectedTeacher === "" ? "Select a teacher name here" : selectedTeacher}
                onSelect={handleSelect}
            >
                {
                    teacherGet &&
                    teacherList.map((teacher, index) =>
                        <Dropdown.Item key={index} eventKey={teacher.firstName} value={teacher.teacherID} onClick={() => handleClick(teacher['teacherID'])}>{teacher.firstName}</Dropdown.Item>
                    )
                }
            </DropdownButton>
        </>
    )
}

export default TeacherSelect
