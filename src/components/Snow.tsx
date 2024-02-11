import Snowfall from 'react-snowfall';
import { useMediaQuery } from '@mantine/hooks';

export default function Snow() {
    const isMobile = useMediaQuery(`(max-width: 800px)`);
    return (
        <>
            <Snowfall
                snowflakeCount={isMobile ? 50 : 150}
                style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    zIndex: '1'
                }}
            />
        </>
    )
}
