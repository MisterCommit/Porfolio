import type { NextPage } from "next";
import { Container, useMantineTheme } from "@mantine/core";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Work } from "@/components/work/Work";
import { Contact } from "@/components/contact/contact";
import { Intro } from "@/components/about/Intro";

const Home: NextPage = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Container size="lg">
        <Intro />
      </Container>
      <div
        style={{
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.blurColor[0]
              : theme.colors.blurColor[1],
        }}
      >
        <Container size="lg">
          <About />
          <Skills />
          <Work />
          <Contact />
        </Container>
      </div>
    </>
  );
}; // test
export default Home;
