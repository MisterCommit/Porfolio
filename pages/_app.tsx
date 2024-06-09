import { AppProps } from "next/app";
import Head from "next/head";
import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import "../styles/style.css";
import { theme } from "../styles/theme";
import { AppHeader } from "@/components/common/Header";
import { useEffect, useState } from "react";
import { useColorScheme } from "@mantine/hooks";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";
import { useRouter } from "next/router";

export default function App(props: AppProps) {
  const router = useRouter();
  const isPrivacyPolicyPage = router.pathname.includes("PrivacyPolicy");
  const { Component, pageProps } = props;

  const preferredColorScheme = useColorScheme();

  useEffect(() => {
    setColorScheme(preferredColorScheme);
  }, [preferredColorScheme]);

  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>Ahmed Raza | Full Stack Software Developer</title>
        <meta name="author" content="Ahmed Raza" />
        <meta
          name="keywords"
          content="Ahmed, Raza, Ahmed Raza, Ahmed Raza Software developer, Ahmed Software Engineer, Ahmed Raza Full Stack Software developer, Ahmed Full Stack Software Engineer, Best software developer from university of sindh pakistan"
        />
        <meta
          name="description"
          content="Hey, I'm Ahmed Raza, I am a Computer Science graduate with expertise in Software Development with 5 years of experience based in Karachi, Sindh, Pakistan. Currently, I'm working as a Full Stack Software Developer @Intech Venture Uk."
        />
      </Head>

      {isPrivacyPolicyPage ? (
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{ ...theme, colorScheme }}
          >
            <AppShell
              styles={{ body: { padding: 0 } }}
              navbarOffsetBreakpoint="sm"
              asideOffsetBreakpoint="sm"
            >
              <Component {...pageProps} />
            </AppShell>
          </MantineProvider>
        </ColorSchemeProvider>
      ) : (
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{ ...theme, colorScheme }}
          >
            <AppShell
              styles={{ body: { padding: 0 } }}
              navbarOffsetBreakpoint="sm"
              asideOffsetBreakpoint="sm"
              header={<AppHeader />}
            >
              <Component {...pageProps} />
              <AnimatedBackground />
            </AppShell>
          </MantineProvider>
        </ColorSchemeProvider>
      )}
    </>
  );
}
