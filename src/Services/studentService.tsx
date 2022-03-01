import { Student } from 'src/Model/StudentModel';
import { apiService } from './apiService';

let apiBaseUrl = '';

const triggerFetchClass = async () => {
  const url = `${apiBaseUrl}/getClassDeatails`;
  return await apiService.GETCALL(url, 3000, '');
};

const triggerFetchSection = async () => {
  const url = `${apiBaseUrl}/getSectionDeatails`;
  return await apiService.GETCALL(url, 3000, '');
};

const triggerFetchStudent = async () => {
  const url = `${apiBaseUrl}/getStudentDeatails`;
  return await apiService.GETCALL(url, 3000, '');
};

const triggerAddStudent = async (studentModel: Student) => {
  const url = `${apiBaseUrl}/addStudent`;
  return await apiService.POSTCALL(apiBaseUrl, studentModel, 3000);
};
export const fetchClasses = async () => {
 // const result = await triggerFetchClass();
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
  
  return classData;
};
export const fetchSections = async () => {
  //const result = await triggerFetchSection();
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
  return sectionData;
};
export const fetchStudents = async () => {
  const result = await triggerFetchStudent();
  return result;
};
export const addStudent = async (studentModel: Student) => {
  const result = await triggerAddStudent(studentModel);
  return result;
};
