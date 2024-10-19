import {
  Box,
  Icon,
  IconButton,
  Link,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";

import {
  GithubIcon,
  LinkedInIcon,
  PavanDiviIcon,
  TwitterIcon,
} from "~/components/icons";
import {
  Article,
  ArticleWithSubheading,
  HGroup,
  RMPList,
  RMPListItem,
} from "~/components/resume";

const Aside = styled("aside")({
  width: "30%",
});

const Section = styled("section")({
  width: "70%",
  paddingLeft: "7%",
});

const Header = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
}));

export default function Resume() {
  const theme = useTheme();
  return (
    <Box height="100%" marginY={0} marginX={0}>
      <Header>
        <Aside sx={{ display: "flex", alignItems: "flex-end" }}>
          <Stack spacing={1}>
            <Stack spacing={0.5}>
              {/* <Stack alignItems="center" spacing={0.5} direction="row">
                <Icon color="action" fontSize="small">
                  language
                </Icon>
                <Typography
                  variant="caption"
                  sx={{ textDecoration: "underline" }}
                >
                  www.pavandivi.com
                </Typography>
              </Stack> */}

              <Stack alignItems="center" spacing={0.5} direction="row">
                <Icon color="action" fontSize="small">
                  mail
                </Icon>
                <Typography variant="caption" fontSize={14}>
                  pavan.divi@outlook.com
                </Typography>
              </Stack>

              <Stack alignItems="center" spacing={0.5} direction="row">
                <Icon color="action" fontSize="small">
                  phone
                </Icon>
                <Typography variant="caption" fontSize={14}>
                  +91-8885847537
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row">
              <IconButton
                edge="start"
                size={"14" as "small"}
                href="https://www.linkedin.com/in/pavandv/"
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                edge="start"
                size={"14" as "small"}
                href="https://twitter.com/pavan_divi"
              >
                <TwitterIcon />
              </IconButton>

              <IconButton
                edge="start"
                size={"14" as "small"}
                href="https://github.com/pavandv"
              >
                <GithubIcon />
              </IconButton>
              {/* <Stack spacing={1} direction="row">
                    <TwitterIcon />
                    <Typography variant="body2">@pavan_divi</Typography>
                  </Stack>

                  <Stack spacing={1} direction="row">
                    <LinkedInIcon />
                    <Typography variant="body2">@pavandv</Typography>
                  </Stack>

                  <Stack spacing={1} direction="row">
                    <GithubIcon />
                    <Typography variant="body2">@pavandv</Typography>
                  </Stack> */}
            </Stack>
          </Stack>
        </Aside>

        <Section>
          <PavanDiviIcon width={46} height={46} />
          <Typography marginTop={0} variant="h5" fontWeight="bold">
            Pavan Divi
          </Typography>
          <Typography
            marginTop={0.5}
            color="primary"
            variant="subtitle2"
            fontWeight="bold"
          >
            Staff Engineer | Member of Module Federation Org | Full Stack,
            DevOps
          </Typography>
        </Section>
      </Header>

      {/* Skills & Work experience */}
      <Stack direction="row">
        <Aside>
          <HGroup title="Education">
            <Article
              title="MLR Institute of Technology."
              caption="2011 - 2015 | Hyd, India"
            >
              <Typography variant="body2">
                Bachelors in Electronics & Communication
              </Typography>
            </Article>
          </HGroup>

          {/* <HGroup title="Open Source Projects">
            <Article
              title="Module Federation"
              caption="Member of Module Federation Org"
            >
              <Stack alignItems="center" spacing={0.3} direction="row">
                <Link
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    gap: 0.5,
                  }}
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  variant="caption"
                  href="https://github.com/module-federation"
                >
                  <GithubIcon size={20} fill={theme.palette.primary.main} />
                  <Typography color="primary">/</Typography>
                  <Typography color="primary">Module Federation</Typography>
                </Link>
              </Stack>
            </Article>
          </HGroup> */}

          <HGroup title="Skills">
            <Article title="Design." enablePrimaryTitle>
              <Typography variant="body2">
                Figma, Adobe XD, Sketch, Material Design, Mobile-first
                Responsive web design.
              </Typography>
            </Article>

            <Article title="Code." enablePrimaryTitle>
              <Article spacing={0} title="Frontend">
                <Typography variant="body2">
                  React Js, Remix, Next Js, Angular, Typescript, Redux, HTML,
                  CSS3, SCSS, ES6.
                </Typography>
              </Article>

              <Article spacing={1} title="Backend">
                <Typography variant="body2">
                  Node.js, Java, Rust, gRPC, GraphQL, .Net Core, .Net, HTTP,
                  REST API.
                </Typography>
              </Article>

              <Article spacing={1} title="Data">
                <Typography variant="body2">
                  DynamoDB, Azure Storage (Table, Blob & Queue), Cosmos DB,
                  MSSQL, Postgres
                </Typography>
              </Article>

              <Article spacing={1} title="Bundlers">
                <Typography variant="body2">
                  WebPack, RollUp, ESBuild
                </Typography>
              </Article>
            </Article>

            <Article title="Deploy." enablePrimaryTitle>
              <Article spacing={1} title="CI / CD Tools">
                <Typography>
                  Jenkins, Github Actions, Azure pipelines, Bamboo
                </Typography>
              </Article>
              <Article spacing={1} title="Cloud computing">
                <Typography>Azure, AWS, GCP</Typography>
              </Article>

              <Article spacing={1} title="Orchestration">
                <Typography>Kubernetes, Docker, Terraform, Pulumi</Typography>
              </Article>
            </Article>
          </HGroup>
        </Aside>

        <Section>
          <HGroup title="Professional Summary">
            <Typography variant="body2">
              As a Staff Engineer, I have extensive knowledge and expertise in
              developing and implementing Frontend as a Microservice with
              modular, scalable, high-performance and maintainable architectures
              driven by Module Federation for large scale applications with SSR
              configurations improving development speed, performance,
              reliability & efficiency.
            </Typography>
          </HGroup>
          <HGroup title="Open Source Projects">
            <ArticleWithSubheading
              spacing={1}
              title="Module Federation"
              subheading="Member of the Org"
            >
              <Stack spacing={2}>
                <Typography>
                  Created & Open sourced a Webpack Plugin, which enables
                  Typescript Type support for Module Federated Components.
                </Typography>
                <Typography>Links:</Typography>
                <Stack flexDirection="row" gap={7}>
                  <Link
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      gap: 0.5,
                    }}
                    target="_blank"
                    rel="noopener"
                    underline="none"
                    variant="caption"
                    href="https://github.com/module-federation"
                  >
                    <GithubIcon size={20} fill={theme.palette.primary.main} />
                    <Typography color="primary">/</Typography>
                    <Typography color="primary">module-federation</Typography>
                  </Link>
                  <Link
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      gap: 0.5,
                    }}
                    target="_blank"
                    rel="noopener"
                    underline="none"
                    variant="caption"
                    href="https://github.com/module-federation/universe/tree/main/packages/typescript"
                  >
                    <GithubIcon size={20} fill={theme.palette.primary.main} />
                    <Typography color="primary">/</Typography>
                    <Typography color="primary">typescript</Typography>
                  </Link>
                </Stack>
              </Stack>
            </ArticleWithSubheading>
          </HGroup>
          <HGroup title="Work Experience">
            <ArticleWithSubheading
              title="Altimetrik"
              subheading="Staff engineer"
              caption={
                <>
                  <b>Client - Citi Bank</b> | Dec 2021 - Present"
                </>
              }
            >
              <RMPList dense>
                <RMPListItem disableGutters>
                  Improving Federated MFE Architecture with SSR capabilities and
                  ability to deploy at the edge locations using Edge runtime for
                  maximum availability and scalability.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Significantly improved
                  <b> application performance to approx. 40%</b> by migrating
                  existing MFE Architecture to new Architecture using{" "}
                  <b>Module Federation.</b>
                </RMPListItem>
                <RMPListItem disableGutters>
                  Implemented various techniques to <b>improve performance </b>
                  like{" "}
                  <b>
                    lazy loading resources, reduce bundle sizes, use singleton
                    modules for Redux, i18n etc.,
                  </b>
                </RMPListItem>
                <RMPListItem disableGutters>
                  Sharing common vendor and feature code between multiple apps
                  as a <b>federated library</b> instead of using traditional
                  approaches like <b>NPM modules.</b>
                </RMPListItem>
                <RMPListItem disableGutters>
                  Micro frontends which operate like monoliths, at runtime.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Technical Decision’s regarding technologies, quality, system
                  design.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Establishing new UI standards and best practices across teams
                  on remote apps.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Collaborating with product, owners, designers, front end and
                  backend engineers across different multiple teams.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Creating clear, comprehensive technical design documents,
                  writing clean, optimized, and reusable code
                </RMPListItem>
              </RMPList>
            </ArticleWithSubheading>

            <ArticleWithSubheading
              title="CDK Global"
              subheading="Senior software engineer"
              caption="July 2015 - Dec 2021"
            >
              <RMPList dense>
                <RMPListItem disableGutters>
                  Proposed and implemented <b>Module federation</b> driven
                  Architecture for large scale micro frontend.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Designing & Developing UI Design system using ATOMIC design
                  methodology that follow Material Design.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Developed <b>10+ project from scratch</b> providing{" "}
                  <b>UI architecture</b> for most of the projects.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Worked on an implementing Identity and Access Management (IAM)
                  system using <b>OAuth & OpenID specifications.</b>
                </RMPListItem>
                <RMPListItem disableGutters>
                  Implementing End-to-End testing using Cypress, which also led
                  for automation testing.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Collaborating with product, owners, designers, front end and
                  backend engineers across different multiple teams.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Creating design, documents and action plans.
                </RMPListItem>
              </RMPList>
            </ArticleWithSubheading>
          </HGroup>
        </Section>
      </Stack>
    </Box>
  );
}
