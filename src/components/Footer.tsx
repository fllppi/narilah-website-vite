import { Container, Group, ActionIcon, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBrandApplePodcast, IconBrandInstagram, IconBrandDiscordFilled, IconMug } from '@tabler/icons-react';

import NarilahLogo from '../assets/logo-white.svg';
import classes from '../styles/Footer.module.css';

const footerLinks = [
    {
        name: "Podcast",
        link: "https://linktr.ee/waswird.podcast",
        icon: IconBrandApplePodcast
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/narilah.twitch/",
        icon: IconBrandInstagram
    },
    {
        name: "Discord",
        link: "https://discord.gg/narilah",
        icon: IconBrandDiscordFilled
    },
    {
        name: "Ko-fi",
        link: "https://ko-fi.com/narilah",
        icon: IconMug
    }
]

export function Footer() {
    const isMobile = useMediaQuery(`(max-width: 900px)`);
    const currentYear = new Date().getFullYear();
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                {!isMobile &&
                    <img
                        src={NarilahLogo}
                        className={classes.logo}
                        alt="Narilah Logo"
                        onClick={() => window.location.href = "/"}
                    />
                }
                <Text className={classes.text}>
                    &copy; {currentYear}
                    <Text
                        component='a'
                        href="https://narilah.de"
                        target="_blank"
                        rel="noopener noreferrer"
                        ml="6px"
                        style={{ textDecoration: 'underline' }}
                    >
                        Narilah
                    </Text>
                </Text>
                <Group gap={0} justify="flex-end" wrap="nowrap" className={classes.links}>
                    {footerLinks.map((link) => (
                        <ActionIcon
                            component='a'
                            key={link.name}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="subtle"
                            color="gray"
                            radius="xl"
                            size={40}
                        >
                            <link.icon />
                        </ActionIcon>
                    ))}
                </Group>
            </Container>
        </div>
    );
}
