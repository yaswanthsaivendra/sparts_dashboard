// import { useEffect, useState } from 'react';
// import axios from 'axios';

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
    id: 12345,
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@mail.com",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    phone: "01234 567890",
    year_group: "Year 1",
  },
  {
    id: 14444,
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@mail.com",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    phone: "01234 567890",
    year_group: "Year 1",
  },
  {
    id: 19854,
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@mail.com",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    phone: "01234 567890",
    year_group: "Year 1",
  },
];

const StudentList = () => {
  // const [students, setStudents] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios.get('http://3.223.98.72:1337/api/students')
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
    <div>
      <div className="flex justify-center">
      <table className="text-sm text-left border m-4">
        <thead className="text-xs text-gray-400">
          <tr>
            {headings.map((heading, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="border-b">
              <td className="px-6 py-4">
                <img
                  src={student.photo}
                  alt="student"
                  className="h-10 w-10 rounded-full"
                />
              </td>
              <td className="px-6 py-4">{student.id}</td>
              <td className="px-6 py-4">{student.first_name}</td>
              <td className="px-6 py-4">{student.last_name}</td>
              <td className="px-6 py-4">{student.email}</td>
              <td className="px-6 py-4">{student.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    
  );
};

export default StudentList;
