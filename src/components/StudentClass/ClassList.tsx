import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { classData } from '../services/classServices';
import { useState } from 'react';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader,
  Container
} from '@mui/material';

const statusOptions = [
  {
    id: 'all',
    name: 'All'
  },
  {
    id: 'completed',
    name: 'Completed'
  },
  {
    id: 'pending',
    name: 'Pending'
  },
  {
    id: 'failed',
    name: 'Failed'
  }
];


const ClassList = () => {
  const theme = useTheme();
  const [page, setPage] = useState<number>(0);
  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };
  return (
    <>
      <Helmet>
        <title>Class - List</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Class Details"
          subHeading="This form is used to see the available class"
          docs="/students/addstudents"
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Card>
          <CardHeader
            action={
              <Box width={150}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={'all'}
                    //onChange={handleStatusChange}
                    label="Status"
                    autoWidth
                  >
                    {statusOptions.map((statusOption) => (
                      <MenuItem key={statusOption.id} value={statusOption.id}>
                        {statusOption.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            }
            title="Class Details"
          />
          <Divider />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Class Name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {classData().map((classData) => {
                  return (
                    <TableRow hover key={classData.ClassId}>
                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {classData.ClassName}
                        </Typography>
                      </TableCell>
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={classData.IsAcive}
                          //   onChange={(event: ChangeEvent<HTMLInputElement>) =>
                          //     handleSelectOneCryptoOrder(event, cryptoOrder.id)
                          //   }
                          value={classData.IsAcive}
                        />
                      </TableCell>
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
                            <EditTwoToneIcon fontSize="small" />
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
            <Box p={2}>
              <TablePagination
                component="div"
                count={classData().length}
                onPageChange={handlePageChange}
               // onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={5}
                rowsPerPageOptions={[5, 10, 25, 30]}
              />
            </Box>
          </TableContainer>
        </Card>
      </Container>
    </>
  );
};

export default ClassList;
