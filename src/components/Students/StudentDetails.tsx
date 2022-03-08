import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { studentDetails } from '../../Services/studentService';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import {
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  IconButton,
  Tooltip,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Student } from 'src/Model/StudentModel';
import { useNavigate } from 'react-router-dom';

const StudentDetails = () => {
  const [studentDetail, setStudentDetail] = useState([]);
  const theme = useTheme();
  const navigate = useNavigate();
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
              <TableCell>Photo</TableCell>
              <TableCell>RollNo</TableCell>
              <TableCell>Class Name</TableCell>
              <TableCell>Section Name</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Father Name</TableCell>
              <TableCell>Mother Name</TableCell>
              <TableCell>Phone No</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentDetail && studentDetail.map((student: Student) => {
              return (
                <TableRow hover key={student.rollNo}>
                  <TableCell >
                  <img src={student.photo}
                  alt="Student"
                  height={50}
                  width={50} />
                  </TableCell>
                  <TableCell>{student.rollNo}</TableCell>
                  <TableCell>{student.classId}</TableCell>
                  <TableCell>{student.sectionId}</TableCell>
                  <TableCell>{student.studentName}</TableCell>
                  <TableCell>{student.fatherName}</TableCell>
                  <TableCell>{student.motherName}</TableCell>
                  <TableCell>{student.phoneNO}</TableCell>
                  <TableCell align="right">
                        <Tooltip title="Edit Order" arrow>
                          <IconButton
                            sx={{
                              '&:hover': {
                                background: theme.colors.primary.lighter
                              },
                              color: theme.palette.primary.main
                            }}
                            color="inherit"
                            size="small"
                          >
                            <EditTwoToneIcon fontSize="small" onClick={()=>navigate(`/students/editStudent/${student.rollNo}`)}/>
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete Order" arrow>
                          <IconButton
                            sx={{
                              '&:hover': {
                                background: theme.colors.error.lighter
                              },
                              color: theme.palette.error.main
                            }}
                            color="inherit"
                            size="small"
                          >
                            <DeleteTwoToneIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
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
