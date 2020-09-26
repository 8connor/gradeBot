import React, { useContext, useEffect, useState } from "react";
import CanvasJSReact from "../../canvasjs.react";
import Axios from "axios";
import Grid from "@material-ui/core/Grid";

import { AuthContext } from "../../Context/AuthContext";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Dashboard() {
  const authContext = useContext(AuthContext);
  const [userRole, setUserRole] = useState("");
  const [averages, setAverages] = useState([]);

  useEffect(() => {
    console.log("In dashboard");
    console.log(authContext);
    let role = "";

    if (authContext.user.accessType === "admin") role = "Admin Dashboard";
    else if (authContext.user.accessType === "teacher")
      role = "Teacher Dashboard";
    else if (authContext.user.accessType === "student")
      role = "Student Dashboard";

    setUserRole(role);
  });

  useEffect(() => {
    Axios.get("/api/allGrades").then((res) => {
      setAverages(res.data);
    });
  }, []);

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2", // "light1", "dark1", "dark2"
    title: {
      text: "Averages for assignments",
    },
    data: [
      {
        type: "column",
        indexLabel: "{label}: {y}%",
        startAngle: -90,
        dataPoints: averages.map((assignment, i) => {
          return { y: assignment.grades, label: assignment.Assignment };
        }),
      },
    ],
  };

  // Based on the Access Type we can populate the Header below
  return (
    <Grid container>
      <Grid item xs={24} lg={24} md={24}>
        <CanvasJSChart options={options} />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
