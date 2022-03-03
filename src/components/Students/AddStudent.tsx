import { useFormik } from 'formik';
import * as yup from 'yup';
import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { addStudent } from '../../Services/studentService';
import DateAdapter from '@mui/lab/AdapterDayjs';
import DatePicker from '@mui/lab/DatePicker';
import DateFnsUtils from '@date-io/date-fns';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  TextField,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box
} from '@mui/material';

import { useState } from 'react';
import { LocalizationProvider } from '@mui/lab';
import { Student } from 'src/Model/StudentModel';
import Label from '../Label';
import Thumb from './Thumb';
dayjs.extend(utc)
const validationSchema = yup.object({
  classId: yup.number().integer().min(1, "Please select class").required('Please select class.'),
  sectionId: yup.number().integer().min(1, "Please select section").required('Please select section.'),
  email: yup.string().email().required('Email is required.'),
  studentName: yup
    .string()
    .max(32, 'Name shoud not be more than 16 character.')
    .required('Name is required'),
  fatherName: yup
    .string()
    .max(32, 'Father name shoud not be more than 16 character.')
    .required('Father name is required'),
  motherName: yup
    .string()
    .max(32, 'mother name shoud not be more than 16 character.')
    .required('Mother name is required'),
  phoneNo: yup
    .string()
    .max(10, 'Phone should be of minimum 10 characters length.')
    .required('Phone is required'),
  address: yup.string().max(64, 'Phone should not be more than 64 length.')
});

const sectionData = [
  {
    value: 1,
    label: 'A'
  },
  {
    value: 2,
    label: 'B'
  }
];
const classData = [
  {
    value: 1,
    label: 'Pre_Nuresery'
  },
  {
    value: 2,
    label: 'Nuresery'
  },
  {
    value: 3,
    label: 'First'
  },
  {
    value: 4,
    label: 'Second'
  },
  {
    value: 5,
    label: 'Third'
  },
  {
    value: 6,
    label: 'Fourth'
  },
  {
    value: 7,
    label: 'Fifth'
  }
];

const AddStudent = () => {
  const [dobValue, setDobValue] = useState();
  const formik = useFormik({
    initialValues: {
      classId: 0,
      sectionId: 0,
      studentName: '',
      fatherName: '',
      motherName: '',
      dob: dayjs().utc().format(),
      phoneNo: '',
      gender: true,
      email: '',
      address: '',
      photo: '',
      isActive: true,
      file:null
    },
    validationSchema: validationSchema,
    onSubmit: (values: Student) => {
      debugger;
      addStudent(values).then((data) => {});
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Helmet>
          <title>Add Student</title>
        </Helmet>
        <PageTitleWrapper>
          <PageTitle
            heading="Add Student"
            subHeading="This form is used to add students"
          />
        </PageTitleWrapper>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12}>
              <Card>
                <CardHeader title="New Student Registration" />
                <Divider />
                <CardContent
                  sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' } }}
                >
                  {' '}
                  <TextField
                    id="classId"
                    name="classId"
                    select
                    label="Select Class*"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.classId && Boolean(formik.errors.classId)
                    }
                    helperText={formik.touched.classId && formik.errors.classId}
                  >
                    {classData.map((option) => (
                      <MenuItem key={option?.value} value={option?.value}>
                        {option?.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="sectionId"
                    name="sectionId"
                    select
                    label="Select section*"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.sectionId &&
                      Boolean(formik.errors.sectionId)
                    }
                    helperText={
                      formik.touched.sectionId && formik.errors.sectionId
                    }
                  >
                    {sectionData.map((option) => (
                      <MenuItem key={option?.value} value={option?.value}>
                        {option?.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    id="studentName"
                    label="Student Name*"
                    value={formik.values.studentName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.studentName &&
                      Boolean(formik.errors.studentName)
                    }
                    helperText={
                      formik.touched.studentName && formik.errors.studentName
                    }
                  />
                  <TextField
                    fullWidth
                    id="fatherName"
                    label="Father Name*"
                    value={formik.values.fatherName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.fatherName &&
                      Boolean(formik.errors.fatherName)
                    }
                    helperText={
                      formik.touched.fatherName && formik.errors.fatherName
                    }
                  />
                  <TextField
                    fullWidth
                    id="motherName"
                    label="Mother Name*"
                    value={formik.values.motherName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.motherName &&
                      Boolean(formik.errors.motherName)
                    }
                    helperText={
                      formik.touched.motherName && formik.errors.motherName
                    }
                  />
                  <LocalizationProvider dateAdapter={DateAdapter}>
                    <DatePicker
                      value={formik.values.dob}
                      onChange={(newValue) => {
                        formik.setFieldValue('dob', newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          name="dob"
                          value={formik.values.dob}
                          onBlur={formik.handleBlur}
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                  <TextField
                    fullWidth
                    id="phoneNo"
                    label="Phone No*"
                    value={formik.values.phoneNo}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.phoneNo && Boolean(formik.errors.phoneNo)
                    }
                    helperText={formik.touched.phoneNo && formik.errors.phoneNo}
                  />
                  <FormControl component="fieldset" style={{ marginLeft: 22 }}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      row
                      aria-label="gender"
                      name="gender"
                      defaultValue={formik.values.gender}
                      onChange={(event) => {
                        formik.setFieldValue(
                          'gender',
                          event.currentTarget.value
                        );
                      }}
                    >
                      <FormControlLabel
                        value={true}
                        control={<Radio defaultChecked={true} />}
                        label="Male"
                      />
                      <FormControlLabel
                        value={false}
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                  </FormControl>
                  <TextField
                    fullWidth
                    id="address"
                    label="Address"
                    multiline={true}
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    minRows={3}
                  />
                  <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    maxRows={5}
                  />
                  
                  <div className="form-group">
                  <Label>Photo upload</Label>
                  <input id="file" name="file" type="file" onChange={(event) => {
                    formik.setFieldValue("file", event.currentTarget.files[0]);
                    console.log(event.currentTarget.files[0])
                    
                  }} style ={{margin:20}} />

                  {formik.values.file && <Thumb fileData={formik.values.file} />}
                </div>
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                  >
                    Submit
                  </Button>
                </CardContent>
                <Divider sx={{ my: 5 }} />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </form>
    </div>
  );
};

export default AddStudent;
