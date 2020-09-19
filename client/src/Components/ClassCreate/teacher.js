import Axios from "axios";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useEffect, useState } from "react";



function TeacherSelect(props) {
    const [teacherList, setTeacherList] = useState();
    const [selectedTeacher, setSelectedTeacher] = useState("");
    // const [classToCreate, setClassToCreate] = useState(); // Where is this at? 


    useEffect(() => {
        const get = async () => {
            const theTeachers = await Axios.get("/api/allTeachers");

            setTeacherList(theTeachers.data)
        }

        get();


    }, [])

    const assignTeacher = () => {
        let teachObj = {
            teacherName: selectedTeacher
            // ,classRoom: classToCreate // Where is this being used? 
        }

        Axios.post("/api/updateTeacher", teachObj).then(res => console.log(res));
    }

    // Does this need to be in useEffect?
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