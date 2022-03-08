import AddStudent from './AddStudent';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Student } from 'src/Model/StudentModel';
import { getStudentByRollNo } from '../../Services/studentService';

const EditStudent = () => {
  let { id } = useParams();
  const [studentDetail, setStudentDetails] = useState({});
  const getStudentDetail = async () => {
    const student: Student = await getStudentByRollNo(parseInt(id));
    setStudentDetails(student);
  };

  useEffect(() => {
    getStudentDetail();
  }, []);
  return <div>{ Object.keys(studentDetail).length >0 && <AddStudent student={studentDetail} />}</div>;
};

export default EditStudent;
