import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { PartialRouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Class
const ClassList =Loader(lazy(() => import('src/components/StudentClass/ClassList')));

const StudentDetails =Loader(lazy(() => import('src/components/Students/StudentDetails')));
const AddStudent =Loader(lazy(() => import('src/components/Students/AddStudent')));


const Transaction =Loader(lazy(() => import('src/components/Transactions/index')));

// Status

const Status404 = Loader(lazy(() => import('src/content/pages/Status/Status404')));
const Status500 = Loader(lazy(() => import('src/content/pages/Status/Status500')));
const StatusComingSoon = Loader(lazy(() => import('src/content/pages/Status/ComingSoon')));
const StatusMaintenance = Loader(lazy(() => import('src/content/pages/Status/Maintenance')));


const routes: PartialRouteObject[] = [
  {
    path: '/',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '/SchoolCMS',
        element: (
          <Navigate
            to="/class/classDetails"
            replace
          />
        )
      }
    ]
  },
  {
    path: 'class',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="/class/classDetails"
            replace
          />
        )
      },
      {
        path: 'classDetails',
        element: <ClassList />
      },
      {
        path: 'addClass',
        element: <Transaction />
      }
    ]
  },
  {
    path: 'students',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="/students/addstudents"
            replace
          />
        )
      },
      {
        path: 'addstudents',
        element: <AddStudent />
      },
      {
        path: 'studentDetails',
        element: <StudentDetails />
      }
    ]
  },
 
];

export default routes;
