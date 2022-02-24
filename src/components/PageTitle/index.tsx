import { FC } from 'react';
import PropTypes from 'prop-types';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Typography, Button, Grid } from '@mui/material';

interface PageTitleProps {
    heading?: string;
    subHeading?: string;
    docs?: string;
}

const PageTitle: FC<PageTitleProps> = ({
    heading = '',
    subHeading = '',
    docs = '',
    ...rest
}) => {
    return  null
};

PageTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    docs: PropTypes.string,
};

export default PageTitle;
