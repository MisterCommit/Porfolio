import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Avatar,
} from "@mantine/core";
import { Text } from "@/components/common/Typography";
import { useDisclosure } from "@mantine/hooks";
import { NavLinks } from "@/constants/NavLinks";
import { Link } from "@/components/common/Link";
import { SegmentedToggle } from "@/components/common/SegmentedToggle";

const HEADER_HEIGHT = 80;

export function AppHeader() {
  const { classes } = useStyles();
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = NavLinks.map((link) => (
    <Link
      href={link.link}
      label={link.label}
      key={link.label}
      textStyle={{ mx: "sm" }}
      isText={true}
      onClick={() => {
        close();
      }}
    />
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={10} className={classes.root}>
      <Container className={classes.header} size="xl">
        <Link href="/">
          <div className={classes.info}>
            <Avatar src="/assets/images/me.png" radius="xl" size="md" />

            <Text className={classes.text} mb={0} size="lg">
              Ahmed Raza
            </Text>
          </div>
        </Link>

        <Group spacing={5} className={classes.links}>
          {items}

          <SegmentedToggle />
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
              <SegmentedToggle />
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}

const useStyles = createStyles((theme) => ({
  root: {
    position: "fixed",
    borderWidth: 0,
    zIndex: 1,
    paddingTop: 20,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  info: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    alignSelf: "flex-start",
    height: "100%",
    cursor: "pointer",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  text: {
    fontWeight: 500,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
  },
  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));
