import { useEffect, useState } from 'react';
import axios from 'axios';

const headings = [
  "Photo",
  "ID",
  "First name",
  "Last name",
  "Email",
  "Phone",
  "Year group",
];

const students = [
  {
    id: 1,      
    first_name: "John",
    last_name: "Doe",
    email: "john.doe",
    phone: "123456789",
    year_group: "Grade 10",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,      
    first_name: "Jane",
    last_name: "Doe",
    email: "jane.doe",
    phone: "123456789",
    year_group: "Grade 10",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,      
    first_name: "John",
    last_name: "Doe",
    email: "john.doe",
    phone: "123456789",
    year_group: "Grade 12",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 4,      
    first_name: "Jane",
    last_name: "Doe",
    email: "jane.doe",
    phone: "123456789",
    year_group: "Grade 11",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 5,      
    first_name: "John",
    last_name: "Doe",
    email: "john.doe",
    phone: "123456789",
    year_group: "Grade 12",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 6,      
    first_name: "Jane",
    last_name: "Doe",
    email: "jane.doe",
    phone: "123456789",
    year_group: "Grade 12",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 7,      
    first_name: "John",
    last_name: "Doe",
    email: "john.doe",
    phone: "123456789",
    year_group: "Grade 12",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 8,      
    first_name: "Jane",
    last_name: "Doe",
    email: "jane.doe",
    phone: "123456789",
    year_group: "Grade 12",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 9,      
    first_name: "John",
    last_name: "Doe",
    email: "john.doe",
    phone: "123456789",
    year_group: "Grade 12",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 10,      
    first_name: "Jane",
    last_name: "Doe",
    email: "jane.doe",
    phone: "123456789",
    year_group: "Grade 12",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
  }

]

const StudentList = () => {
  // const [students, setStudents] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios.get('http://3.223.98.72:1337/api/students', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(response => {
  //       setStudents(response.data); 
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('There was an error fetching the students!', error);
  //     });
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <table className="text-sm text-left border w-full my-6">
      <thead className=" text-gray-400">
        <tr>
          <th className="px-6 py-4 border-b">
            <div className="border-2 w-4 h-4 cursor-pointer"></div>
          </th>
          {headings.map((heading, index) => (
            <th key={index} className="px-6 py-4 border-b">
              {heading}
            </th> 
          ))}
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index} className="border-b">
            <td className="px-6 py-1">
              <div className="border-2 w-4 h-4 cursor-pointer"></div>
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
