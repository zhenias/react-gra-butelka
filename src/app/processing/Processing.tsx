import CircularProgress from '@mui/material/CircularProgress';
import BoxText from "@/app/components/Box/Box";

export default function Processing() {
    return (
        <>
            <BoxText
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#0000002b',
                    zIndex: 2
                }}
            >
                <CircularProgress 
                    color="secondary"
                    sx={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        zIndex: 3
                    }}
                />
            </BoxText>
        </>
    );
}