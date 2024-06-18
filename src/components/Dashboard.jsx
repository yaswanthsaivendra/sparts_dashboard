import MainSection from "./MainSection";
import TopBar from "./TopBar"
import students from "../constant";
import { useState } from "react";


const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter(student => {
    return (
      student.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.year_group.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const studentsCount = filteredStudents.length;


  return (
    <div className="bg-white flex flex-col w-full m-8 rounded-2xl shadow-lg shadow-primary">
        <TopBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} studentsCount={studentsCount}  />
        <MainSection filteredStudents={filteredStudents}/>
    </div>
  )
}

export default Dashboard;