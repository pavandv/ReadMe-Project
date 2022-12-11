import { List, ListItem, Stack, styled, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";
import { Children } from "react";

interface Props {
  title?: string;
  marginTop?: number;
}

export const HGroup = ({
  children,
  title,
  marginTop,
}: PropsWithChildren<Props>) => {
  return (
    <Stack marginTop={marginTop ?? 5} direction="row">
      <Stack spacing={3}>
        {title && (
          <Typography fontWeight="bold" variant="h6">
            {title}
          </Typography>
        )}
        {children}
      </Stack>
    </Stack>
  );
};

interface TitleWithSubheadingProps {
  title: string;
  subheading: string;
  caption?: string;
}

export const TitleWithSubheading = ({
  caption,
  subheading,
  title,
}: TitleWithSubheadingProps) => {
  return (
    <Stack>
      <Stack spacing={1} direction="row">
        <Typography fontWeight="bold" variant="subtitle1" color="primary">
          {title}.
        </Typography>
        <Typography fontWeight="bold" variant="subtitle2">
          {subheading}
        </Typography>
      </Stack>
      {caption && (
        <Typography
          fontWeight="500"
          sx={{ color: "text.secondary" }}
          variant="caption"
        >
          {caption}
        </Typography>
      )}
    </Stack>
  );
};

interface TitleWithCaptionProps {
  isTitlePrimary?: boolean;
  title: string;
  caption?: string;
}

export const TitleWithCaption = ({
  isTitlePrimary,
  title,
  caption,
}: TitleWithCaptionProps) => {
  return (
    <Stack>
      <Typography
        color={isTitlePrimary ? "primary" : "inherit"}
        fontWeight={isTitlePrimary ? "bold" : 800}
        variant={isTitlePrimary ? "h6" : "subtitle2"}
      >
        {title}
      </Typography>
      {caption && (
        <Typography
          fontWeight="500"
          sx={{ color: "text.secondary" }}
          variant="caption"
        >
          {caption}
        </Typography>
      )}
    </Stack>
  );
};

interface ArticleProps extends TitleWithCaptionProps {
  spacing?: number;
}

export const Article = ({
  children,
  spacing,
  ...titleProps
}: PropsWithChildren<ArticleProps>) => {
  return (
    <Stack spacing={spacing ?? 2}>
      <TitleWithCaption {...titleProps} />
      {children}
    </Stack>
  );
};

interface ArticleWithSubheadingProps extends TitleWithSubheadingProps {
  spacing?: number;
}

export const ArticleWithSubheading = ({
  children,
  spacing,
  ...titleProps
}: PropsWithChildren<ArticleWithSubheadingProps>) => {
  return (
    <Stack spacing={spacing ?? 2}>
      <TitleWithSubheading {...titleProps} />
      {children}
    </Stack>
  );
};

export const RMPList = styled(List)({
  paddingLeft: 16,
  listStyle: "disc",
});

export const RMPListItem = styled(ListItem)(({ theme }) => ({
  ...theme.typography.body2,
  // lineHeight: "1.25rem",
  display: "list-item",
  padding: 0,
}));
