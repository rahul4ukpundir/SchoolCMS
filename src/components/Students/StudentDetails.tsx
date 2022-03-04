import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { studentDetails } from '../../Services/studentService';
import {
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Student } from 'src/Model/StudentModel';
const StudentDetails = () => {
  const [studentDetail, setStudentDetail] = useState([]);
  useEffect(() => {
    getStudentDeatails();
  }, []);

  const getStudentDeatails = async () => {
    const result: Student[] = await studentDetails();
    setStudentDetail(result)
  };
  return (
    <>
      <Helmet>
        <title>Student - List</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Student Details"
          subHeading="This form is used to see the available student"
          docs="/students/addstudents"
        />
      </PageTitleWrapper>
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>RollNo</TableCell>
              <TableCell>Class Name</TableCell>
              <TableCell>Section Name</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Father Name</TableCell>
              <TableCell>Mother Name</TableCell>
              <TableCell>Phone No</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentDetail && studentDetail.map((student: Student) => {
              return (
                <TableRow hover key={student.rollNo}>
                    <TableCell>{student.rollNo}</TableCell>
                  <TableCell>{student.classId}</TableCell>
                  <TableCell>{student.sectionId}</TableCell>
                  <TableCell>{student.studentName}</TableCell>
                  <TableCell>{student.fatherName}</TableCell>
                  <TableCell>{student.motherName}</TableCell>
                  <TableCell>{student.phoneNO}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StudentDetails;
