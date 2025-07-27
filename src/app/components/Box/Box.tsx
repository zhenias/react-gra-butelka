import { FunctionComponent, ReactNode } from 'react';
import Box from '@mui/material/Box';
import BoxProps from './Box.types';

const BoxText: FunctionComponent<BoxProps & { children?: ReactNode }> = (
    {
        children,
        ...props
    }
) => {
    return (
        <Box {...props}>
            {children}
        </Box>
    );
};

export default BoxText;