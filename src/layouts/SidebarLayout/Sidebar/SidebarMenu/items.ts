import { ReactNode } from 'react';

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'School CMS',
        link: '/overview',
        icon: DesignServicesTwoToneIcon
      }
    ]
  },
  
  {
    heading: 'Class',
    items: [
      {
        name: 'Manage Class',
        icon: TableChartTwoToneIcon,
        link: '/management/transactions',
        items: [
          {
            name: 'Add Class',
            icon: TableChartTwoToneIcon,
            link: '/management/profile/details'
          },
          {
            name: 'Edit Class',
            icon: TableChartTwoToneIcon,
            link: '/management/profile/settings'
          },
          {
            name: 'In Active Class',
            icon: TableChartTwoToneIcon,
            link: '/management/profile/settings'
          }
        ]
      }
    ]
  },
  {
    heading: 'Section',
    items: [
      {
        name: 'Manage Section',
        icon: TableChartTwoToneIcon,
        link: '/components/forms',
        items: [
          {
            name: 'Add Section',
            icon: TableChartTwoToneIcon,
            link: '/components/forms'
          },
          {
            name: 'Edit Section',
            icon: TableChartTwoToneIcon,
            link: '/management/profile/settings'
          },
          {
            name: 'In Active Section',
            icon: TableChartTwoToneIcon,
            link: '/management/profile/settings'
          }
        ]
      }
    ]
  },
  {
    heading: 'Students',
    items: [
      {
        name: 'Manage Student',
        icon: TableChartTwoToneIcon,
        link: '/management/transactions',
        items: [
          {
            name: 'Student List',
            icon: TableChartTwoToneIcon,
            link: '/management/transactions'
          },
          {
            name: 'Add Student',
            icon: TableChartTwoToneIcon,
            link: '/students/addstudents'
          },
          {
            name: 'Edit Student',
            icon: TableChartTwoToneIcon,
            link: '/management/profile/settings'
          },
          {
            name: 'In Active Student',
            icon: TableChartTwoToneIcon,
            link: '/management/profile/settings'
          }
        ]
      }
    ]
  },

];

export default menuItems;
