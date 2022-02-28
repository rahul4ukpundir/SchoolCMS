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
  const result = await triggerFetchClass();
  return result;
};
export const fetchSections = async () => {
  const result = await triggerFetchSection();
  return result;
};
export const fetchStudents = async () => {
  const result = await triggerFetchStudent();
  return result;
};
export const addStudent = async (studentModel: Student) => {
  const result = await triggerAddStudent(studentModel);
  return result;
};
