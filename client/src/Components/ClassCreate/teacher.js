import Axios from "axios";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useEffect, useState } from "react";



function TeacherSelect(props) {
    const [teacherList, setTeacherList] = useState();
    const [selectedTeacher, setSelectedTeacher] = useState("");
    const [classToCreate, setClassToCreate] = useState()


    useEffect(() => {
        const get = async () => {
            const theTeachers = await Axios.get("/api/allTeachers");

            setTeacherList(theTeachers.data)
        }

        get();
    }, [])

    const assignTeacher = () => {
        let teachObj = {
            teacherName: selectedTeacher,
            classRoom: classToCreate
        }

        Axios.post("/api/updateTeacher", teachObj).then(res => console.log(res));
    }

    if (props.classCreated === true) {
        assignTeacher();
    }

    const handleSelect = (e) => {
        setSelectedTeacher(e);
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
                    teacherList &&
                        teacherList.map((teacher, index) =>
                            <Dropdown.Item key={index} eventKey={teacher.firstName} value={teacher._id}>{teacher.firstName}</Dropdown.Item>
                        ) 
                }
            </DropdownButton>
        </>
    )
}

export default TeacherSelect