import NLink, { LinkProps } from "next/link";
import { createStyles } from "@mantine/core";
import { Text, ITextProps } from "@/components/common/Typography";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { useRouter } from "next/router";

export interface ILink extends LinkProps {
  label?: string;
  target?: HTMLAttributeAnchorTarget;
  textStyle?: ITextProps;
  children?: ReactNode;
  isText?: boolean;
  onClick?: () => void;
}

export const Link = ({
  children,
  label,
  target,
  textStyle,
  isText = false,
  onClick,
  ...props
}: ILink) => {
  const { classes, cx } = useStyles();
  const router = useRouter();

  if (children) {
    return (
      <NLink {...props} key={label} onClick={onClick}>
        <a target={target} rel="noopener noreferrer">
          {children}
        </a>
      </NLink>
    );
  }

  if (isText) {
    return (
      <NLink {...props} key={label}>
        <a key={label} target={target} onClick={onClick}>
          <Text
            {...textStyle}
            className={cx(classes.linkText, {
              [classes.linkActive]: router.asPath.slice(1) === props.href,
            })}
          >
            {label}
          </Text>
        </a>
      </NLink>
    );
  }

  return (
    <NLink {...props} key={label} onClick={onClick}>
      <a
        key={label}
        target={target}
        className={classes.link}
        onClick={() => {
          close();
        }}
      >
        {label}
      </a>
    </NLink>
  );
};

const useStyles = createStyles((theme) => ({
  link: {
    display: "inline",
    borderRadius: theme.radius.sm,
    fontWeight: 600,
    color: theme.fn.variant({
      variant: "outline",
      color: theme.primaryColor,
    }).color,
    fontSize: theme.fontSizes.sm,

    "&:hover": {
      color:
        theme.colorScheme === "dark"
          ? "white"
          : theme.fn.variant({
              variant: "outline",
              color: theme.primaryColor,
            }).color,
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
    },
  },

  linkText: {
    display: "inline",
    borderRadius: theme.radius.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,

    "&:hover": {
      color:
        theme.colorScheme === "dark"
          ? "white"
          : theme.fn.variant({
              variant: "outline",
              color: theme.primaryColor,
            }).color,
      fontWeight: "bold",
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      display: "block",
    },
  },

  linkActive: {
    color: theme.fn.variant({
      variant: "outline",
      color: theme.primaryColor,
    }).color,
    fontWeight: "bold",
  },
}));
