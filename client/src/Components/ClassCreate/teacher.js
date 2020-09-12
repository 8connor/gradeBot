import Axios from "axios";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useEffect, useState } from "react";



function TeacherSelect(props) {
    const [teacherList, setTeacherList] = useState();
    const [selectedTeacher, setSelectedTeacher] = useState("");
    const [classToCreate, setClassToCreate] = useState(props.currentClass)

    console.log(selectedTeacher);

    useEffect(() => {
        const get = async () => {
            const theTeachers = await Axios.get("/api/allTeachers");

            setTeacherList(theTeachers.data)
        }

        get();
    }, [])

    const handleSelect = (e) => {
        setSelectedTeacher(e);
    }

    const assignTeacher = () => {
        
    }

    return (
        <DropdownButton
            title={selectedTeacher === "" ? "Pick" : selectedTeacher}
            onSelect={handleSelect}
        >
            {
                teacherList ?
                    teacherList.map((teacher, index) =>
                        <Dropdown.Item key={index} eventKey={teacher.firstName} value={teacher._id}>{teacher.firstName}</Dropdown.Item>
                    ) : false
            }
        </DropdownButton>
    )
}

export default TeacherSelect