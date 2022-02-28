import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';
import { useState } from 'react';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  TextareaAutosize
} from '@mui/material';
import Footer from 'src/components/Footer';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';


import Switch from '@mui/material/Switch';
import Label from '../Label';

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
    value:2,
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
  return (
    <>
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
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 2, width: '50ch' }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="filled-select-currency"
                    select
                    label="Select Class"
                    // value={currency}
                    //onChange={handleChange}
                    // helperText="Please select your currency"
                  >
                    {classData.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="filled-select-currency"
                    select
                    label="Select Section"
                    //value= {sectionData[0].value}
                    //onChange={handleChange}
                    // helperText="Please select your currency"
                  >
                    {sectionData.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField label="Enter Name*" />

                  <TextField label="Father Name*" />
                  <TextField label="Mother Name*" />
                  <TextField label="DOB*" />
                  <TextField label="Email" />
                  <TextField label="Phone" />
                  <FormControl component="fieldset"   sx={{ width: "50ch", margin:2 }} >
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </RadioGroup>
                  
                </FormControl>
                  <TextField label="Address" multiline={true} minRows={3} />
                  <Button
                    href={"docs"}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: { xs: 2, md: 2,width: "30ch" } }}
                    variant="contained"
                >
                    Add Student
                </Button>
                </Box>
              </CardContent>
              <Divider sx={{ my: 5 }} />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddStudent;
