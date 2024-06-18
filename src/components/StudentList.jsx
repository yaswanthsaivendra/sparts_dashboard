import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCheck } from 'react-icons/fa';

const headings = [
  "Photo",
  "ID",
  "First name",
  "Last name",
  "Email",
  "Phone",
  "Year group",
];


const StudentList = ({ filteredStudents }) => {
  // const [students, setStudents] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [selectedStudents, setSelectedStudents] = useState({});
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    axios.get('http://3.223.98.72:1337/api/students', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log(response.data);
        // setStudents(response.data); 
        // setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the students!', error);
      });
  }, []);

  const handleCheckboxClick = (id) => {
    setSelectedStudents(prevSelectedStudents => ({
      ...prevSelectedStudents,
      [id]: !prevSelectedStudents[id]
    }));
  }

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newSelectedStudents = {};
    filteredStudents.forEach(student => {
      newSelectedStudents[student.id] = newSelectAll;
    });
    setSelectedStudents(newSelectedStudents);
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <table className="text-sm text-left border w-full my-6">
      <thead className=" text-gray-400">
        <tr>
          <th className="px-6 py-4 border-b">
            <div className={`border-2 w-4 h-4 cursor-pointer  ${selectAll ? 'bg-blue-500 border-blue-500' : ''}`}  onClick={handleSelectAll}>
              {selectAll && <FaCheck size={12} className="text-white" />}
            </div>
          </th>
          {headings.map((heading, index) => (
            <th key={index} className="px-6 py-4 border-b">
              {heading}
            </th> 
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredStudents.map((student, index) => (
          <tr key={index} className="border-b">
            <td className="px-6 py-1">
              <div className={`border-2 w-4 h-4 cursor-pointer rounded-sm ${selectedStudents[student.id] ? 'bg-blue-500 border-blue-500' : ''}`} onClick={() => handleCheckboxClick(student.id)}>
              {selectedStudents[student.id] && <FaCheck size={12} className="text-white" />}
              </div>
            </td>
            <td className="px-6 py-1.5">
              <img
                src={student.photo}
                alt="student"
                className="h-8 w-8 rounded-full"
              />
            </td>
            <td className="px-6 py-1">{student.id}</td>
            <td className="px-6 py-1">{student.first_name}</td>
            <td className="px-6 py-1">{student.last_name}</td>
            <td className="px-6 py-1">{student.email}</td>
            <td className="px-6 py-1">{student.phone}</td>
            <td className="px-6 py-1">{student.year_group}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
