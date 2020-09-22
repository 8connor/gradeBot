// import Axios from "axios";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";
// import React, { useEffect, useState } from "react";

// function TeacherSelect(props) {
//   const handleClick = (e) => {
//     setSelectedTeacherID(e)
//   };

//   return (
//     <>
//       <p>Select a teacher:</p>
//       <DropdownButton
//         title={
//           selectedTeacher === ""
//             ? "Select a teacher name here"
//             : selectedTeacher
//         }
//         onSelect={handleSelect}
//       >
//         {teacherList &&
//           teacherList.map((teacher, index) => (
//             <Dropdown.Item
//               key={index}
//               eventKey={teacher.firstName}
//               value={teacher._id}
//               onClick={() => handleClick(teacher.teacherID)}
//             >
//               {teacher.firstName}
//             </Dropdown.Item>
//           ))}
//       </DropdownButton>
//     </>
//   );
// }

// export default TeacherSelect;
