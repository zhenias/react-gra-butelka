import { FunctionComponent, useMemo } from 'react';
import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps
} from '@mui/material';

export interface Props {
    hasAccess?: boolean,
    variant?: string,
}

const Button: FunctionComponent<Props> = (props) => {
    const { hasAccess = true, variant, ...buttonProps } = props;
    const ButtonParameters = useMemo((): MuiButtonProps => {
        switch (variant) {
            case 'action':
                return { color: 'secondary', variant: 'contained' };
            case 'dismiss':
                return { variant: 'text' };
            case 'outlined':
            default:
                return { variant: 'outlined' };
        }
    }, [variant]);

    if (!hasAccess) {
        return <MuiButton disabled {...buttonProps} {...ButtonParameters} />;
    }

    return <MuiButton {...buttonProps} {...ButtonParameters} />;
};

export default Button;
