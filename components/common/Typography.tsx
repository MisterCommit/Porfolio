import { MantineNumberSize, Text as MText, TextProps } from "@mantine/core";
import React, { ReactNode } from "react";

export interface ITextProps extends TextProps {
  children?: ReactNode;
  ws?: Number | string | undefined;
  ls?: Number | string | undefined;
  size?: MantineNumberSize;
}

export function Text({
  children,
  ws = 2,
  ls = 2,
  size = "sm",
  ...props
}: ITextProps) {
  return (
    <MText
      {...props}
      size={size}
      // @ts-ignore: Unreachable code error
      style={{ wordSpacing: ws, lineHeight: ls }}
    >
      {children}
    </MText>
  );
}
