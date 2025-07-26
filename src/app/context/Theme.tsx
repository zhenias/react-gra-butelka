"use client";

import { FunctionComponent, ReactNode } from 'react';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';

const theme = createTheme({
    palette: {
        text: {
            primary: '#202020'
        },
        primary: {
            main: '#00bcd4',
            contrastText: '#fff'
        },
        secondary: {
            main: '#ff9800',
            contrastText: '#fff'
        },
    },
    typography: {
        fontSize: 13
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    borderRadius: '2px',
                    fontSize: '14px',
                    fontWeight: 600,
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                    lineHeight: 1.5,
                    ...(ownerState.size === 'small' && {
                        fontSize: '12px'
                    }),
                }),
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: '14px',
                    letterSpacing: '0.00938em'
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: '0px',
                    boxShadow: 'none'
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    font: '600 18px/24px "Roboto", sans-serif',
                    paddingBottom: 0
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    paddingBottom: 8
                }
            }
        },
        MuiDialogContentText: {
            styleOverrides: {
                root: {
                    color: '#333',
                    fontSize: '15px',
                    lineHeight: '18px'
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    background: '#fafafa',
                    color: '#111',
                    fontSize: '12px',
                    borderRadius: '3px',
                    border: '1px solid #e1e1e1',
                    boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.4)'
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                variant: 'standard'
            }
        }
    }
});

const ThemeProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    '.MuiButtonBase-root.MuiPickersDay-root:focus.Mui-selected': {
                        backgroundColor: '#00bcd4'
                    },
                    '.MuiButtonBase-root.MuiPickersDay-root.MuiPickersDay-today:not(.Mui-selected)': {
                        border: 'none',
                        color: '#00bcd4',
                        backgroundColor: 'transparent',
                        fontWeight: 600
                    },
                    'body': {
                        backgroundColor: '#EEC643'
                    }
                }}
            />
            {children}
        </MuiThemeProvider>
    );
};

export default ThemeProvider;