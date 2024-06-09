import { Title, createStyles } from "@mantine/core";
// @ts-ignore: Unreachable code error
import Lottie from "react-lottie";
import { Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "@/components/common/Link";
import { AboutLinks } from "@/constants/AboutLinks";

export const Intro = () => {
  const { classes } = useStyles();

  const largeScreen = useMediaQuery("(min-width: 900px)");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    // animationData: animationData,
    path: "https://assets3.lottiefiles.com/private_files/lf30_WdTEui.json",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid
      grow
      gutter="xl"
      align="center"
      mt={largeScreen ? 20 : 0}
      className={classes.container}
    >
      <Grid.Col span={6}>
        <Title order={2} className={classes.hi}>
          👋 Hi There,
        </Title>
        <Title order={1} className={classes.Ah}>{`I'm Ahmed Raza`}</Title>
        <Title order={6}>
          Software Developer{" "}
          <Link
            label={AboutLinks.IntechVenture.label}
            href={AboutLinks.IntechVenture.link}
            target={AboutLinks.IntechVenture.target}
          />
        </Title>
      </Grid.Col>
      <Grid.Col
        span={6}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <div>
          <Lottie options={defaultOptions} style={{ minWidth: 250 }} />
        </div>
      </Grid.Col>
    </Grid>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: "80vh",
    marginBottom: "10%",
  },
  hi: {
    [theme.fn.largerThan(800)]: {
      fontSize: "1.5em",
    },
  },
  Ah: {
    fontWeight: 600,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    [theme.fn.largerThan(800)]: {
      fontSize: "2.2em",
    },
  },
}));
