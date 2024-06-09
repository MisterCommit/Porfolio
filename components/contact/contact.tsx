import { createStyles, Title, Grid } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { IconMail, IconPhoneCall } from "@tabler/icons";
import { Text } from "@/components/common/Typography";
import { Link } from "@/components/common/Link";
import { FollowMELinks } from "@/constants/FollowMeLinks";
// @ts-ignore: Unreachable code error
import Lottie from "react-lottie";

export const Contact = () => {
  const { classes } = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    // animationData: animationData,
    path: "https://assets4.lottiefiles.com/packages/lf20_bt7iqzns.json",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div id="contact" className={classes.container}>
      <Grid grow gutter="xl" align="center">
        <Grid.Col span={6} className={classes.col1}>
          <div>
            <div className={classes.div1}>
              <Title order={1}>Get In Touch</Title>
            </div>

            <div className={classes.div2}>
              <Link href="mailto:ahmedsiddiqui551@gmail.com">
                <ActionIcon variant="subtle" color={"green"} onClick={() => {}}>
                  <IconMail />
                </ActionIcon>
              </Link>
              <Text ml="sm">{`ahmedsiddiqui551@gmail.com`}</Text>
            </div>

            <div className={classes.div2}>
              <Link href="tel:+923078505582">
                <ActionIcon variant="subtle" color={"green"} onClick={() => {}}>
                  <IconPhoneCall />
                </ActionIcon>
              </Link>
              <Text ml="sm">{`+92 307 8505582`}</Text>
            </div>

            <Title order={3} mt="lg">
              {`I'm not hard to find`}
            </Title>
            <Title order={6} mb="xs">
              You can follow me at
            </Title>

            <div className={classes.div3}>
              {FollowMELinks.map((followMeLinks) => {
                return (
                  <Link
                    href={followMeLinks.link}
                    key={followMeLinks.link}
                    passHref
                    target="_blank"
                  >
                    <ActionIcon
                      variant="subtle"
                      size={30}
                      color={followMeLinks.color}
                    >
                      <followMeLinks.icon size={30} />
                    </ActionIcon>
                  </Link>
                );
              })}
            </div>
          </div>
        </Grid.Col>
        <Grid.Col span={6} className={classes.col2}>
          <div>
            <Lottie
              options={defaultOptions}
              style={{ minWidth: 250, maxWidth: 400 }}
            />
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: "5%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  div1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  div2: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    cursor: "pointer",
  },
  div3: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    cursor: "pointer",
    gap: 20,
  },
  col1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.fn.largerThan(750)]: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
  },
  col2: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.fn.smallerThan(750)]: {
      justifyContent: "center",
    },
    [theme.fn.smallerThan(500)]: {
      display: "none",
    },
  },
}));
