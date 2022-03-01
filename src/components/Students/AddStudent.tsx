import { useFormik } from 'formik';
import * as yup from 'yup';
import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
// import {fetchClasses, fetchSections} from "../../Services/studentService"
import DateAdapter from '@mui/lab/AdapterDayjs';
import DatePicker from '@mui/lab/DatePicker';
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
  FormLabel
} from '@mui/material';

import { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/lab';
const validationSchema = yup.object({
  classId: yup.string().required('Select your class.'),
  sectionId: yup.string().required('Select your section.'),
  email: yup.string().email().required('Email is required.'),
  studentName: yup
    .string()
    .max(16, 'Name shoud not be more than 16 character.')
    .required('Name is required'),
  fatherName: yup
    .string()
    .max(16, 'Father name shoud not be more than 16 character.')
    .required('Father name is required'),
  motherName: yup
    .string()
    .max(16, 'mother name shoud not be more than 16 character.')
    .required('Mother name is required'),
  phone: yup
    .string()
    .max(16, 'Phone should be of minimum 10 characters length.')
    .required('Phone is required')
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
]
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
      classId: '',
      sectionId: '',
      studentName: '',
      fatherName: '',
      motherName: '',
      dob: '',
      phone: '',
      gender: '',
      email: '',
      address: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  useEffect(() => {
    //getClassDeatails();
  }, []);
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
                  sx={{ '& .MuiTextField-root': { m: 2, width: '50ch' } }}
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
                    select
                    label="Select section*"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.classId && Boolean(formik.errors.sectionId)
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
                      value={dobValue}
                      onChange={(newValue) => {
                        setDobValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <TextField
                    fullWidth
                    id="phone"
                    label="Phone No*"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                  <FormControl
                    component="fieldset"
                    sx={{ width: '50ch', margin: 2 }}
                  >
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      row
                      aria-label="gender"
                      name="row-radio-buttons-group"
                      defaultValue={"male"}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio defaultChecked={true} />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
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
