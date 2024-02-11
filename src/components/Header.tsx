import { Button, Container, Group } from '@mantine/core';

import classes from '../styles/Header.module.css';
import NarilahLogo from '../assets/logo-white.svg';

import { IconBrandTwitch } from '@tabler/icons-react';

export function Header() {
    return (
        <div className={classes.header}>
            <Container size="lg" className={classes.inner}>
                <Group align='center'>
                    <img
                        src={NarilahLogo}
                        className={classes.logo}
                        alt="Narilah Logo"
                        onClick={() => window.location.href = "/"}
                    />
                </Group>
                <Group className={classes.links} align='center'>
                    <Button
                        variant='outline'
                        color='white'
                        size='md'
                        leftSection={<IconBrandTwitch />}
                        component='a'
                        href='https://www.twitch.tv/narilah'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Twitch
                    </Button>
                </Group>
            </Container>
        </div>
    )
}
