import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { COLORS } from '../utils/Constants';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(COLORS.primary,),
    backgroundColor: COLORS.primary,
    '&:hover': {
        backgroundColor: COLORS.primary,
        boxShadow:COLORS.shadow
    },
}));

export default function CustomizedButtons({label,variant, customStyle,OnClick}) {
    return (
        <ColorButton onClick={OnClick}  variant={variant} {...customStyle}>{label}</ColorButton>
    );
}