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
  paddingLeft: "3%",
});

const Header = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
}));

export default function Resume() {
  const theme = useTheme();
  return (
    <Box height="100%" marginY={7} marginX={7}>
      <Header>
        <Aside sx={{ display: "flex", alignItems: "flex-end" }}>
          <Stack spacing={1}>
            <Box>
              <Stack alignItems="center" spacing={0.5} direction="row">
                <Icon color="action" fontSize="small">
                  language
                </Icon>
                <Typography
                  variant="caption"
                  sx={{ textDecoration: "underline" }}
                >
                  www.pavandivi.com
                </Typography>
              </Stack>

              <Stack alignItems="center" spacing={0.5} direction="row">
                <Icon color="action" fontSize="small">
                  mail
                </Icon>
                <Typography variant="caption">
                  pavan.divi@outlook.com
                </Typography>
              </Stack>

              <Stack alignItems="center" spacing={0.5} direction="row">
                <Icon color="action" fontSize="small">
                  phone
                </Icon>
                <Typography variant="caption">+91-8885847537</Typography>
              </Stack>
            </Box>
            <Stack direction="row">
              <IconButton
                edge="start"
                size="small"
                href="https://www.linkedin.com/in/pavandv/"
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                edge="start"
                size="small"
                href="https://twitter.com/pavan_divi"
              >
                <TwitterIcon />
              </IconButton>

              <IconButton
                edge="start"
                size="small"
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
          <Typography marginTop={-1} variant="h4" fontWeight="bold">
            Pavan Divi
          </Typography>
          <Typography
            marginTop={0.5}
            color="primary"
            variant="h6"
            fontWeight="bold"
          >
            Staff Engineer | Full Stack, DevOps
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

          <HGroup title="Open Source Projects">
            <Article title="Module Federation Typescript">
              <Stack alignItems="center" spacing={0.3} direction="row">
                <GithubIcon fill={theme.palette.primary.main} />
                <Typography color="primary">/</Typography>
                <Link
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  variant="caption"
                  href="https://github.com/module-federation/nextjs-mf/tree/main/packages/typescript"
                >
                  module-federation/nextjs-mf
                </Link>
              </Stack>
            </Article>
          </HGroup>

          <HGroup title="Skills">
            <Article isTitlePrimary title="Design.">
              <Typography variant="body2">
                Figma, Adobe XD, Sketch, Material Design, Mobile-first
                Responsive web design.
              </Typography>
            </Article>

            <Article isTitlePrimary title="Code.">
              <Article spacing={0} title="Frontend">
                <Typography variant="body2">
                  HTML, CSS, ES6, Typescript, Javascript, ReactJs, NextJs,
                  AngularJS, Redux.
                </Typography>
              </Article>

              <Article spacing={1} title="Backend">
                <Typography variant="body2">
                  NodeJs, ExpressJs, gRPC, GraphQL, .Net Core, .Net, HTTP, REST
                  API.
                </Typography>
              </Article>

              <Article spacing={1} title="Data">
                <Typography variant="body2">
                  DynamoDB, Azure Storage (Table, Blob & Queue), Cosmos DB,
                  MSSQL
                </Typography>
              </Article>

              <Article spacing={1} title="Bundlers">
                <Typography variant="body2">
                  WebPack, RollUp, ESBuild
                </Typography>
              </Article>
            </Article>

            <Article isTitlePrimary title="Deploy.">
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
          <HGroup title="Work Experience">
            <ArticleWithSubheading
              spacing={1}
              title="Altimetrik"
              subheading="Staff engineer"
              caption="Dec 2021 - Present"
            >
              <RMPList dense>
                <RMPListItem disableGutters>
                  Improving Federated MFE Architecture with SSR capabilities and
                  ability to deploy at the edge locations using Edge runtime for
                  maximum availability and scalability.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Responsible for providing new Micro Frontends Architecture
                  using Module Federation.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Sharing common vendor and feature code between multiple apps.
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
                  Creating design, documents and action plans.
                </RMPListItem>
              </RMPList>
            </ArticleWithSubheading>

            <ArticleWithSubheading
              spacing={1}
              title="CDK Global"
              subheading="Senior software engineer"
              caption="July 2015 - Dec 2021"
            >
              <RMPList dense>
                <RMPListItem disableGutters>
                  Proposed and implemented Module federation driven Architecture
                  for large scale micro frontend.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Designing & Developing UI Design system using ATOMIC design
                  methodology that follow Material Design.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Developed 10+ project from scratch providing UI architecture
                  for most of the projects.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Worked on an Identity Provider project powered by Okta
                  deployed to AWS lambda.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Implementing End-to-End testing using Cypress, which also led
                  for automation testing.
                </RMPListItem>
                <RMPListItem disableGutters>
                  Collaborating with product, owners, designers, front end and
                  backend engineers across different multiple teams.
                </RMPListItem>
              </RMPList>
            </ArticleWithSubheading>
          </HGroup>
        </Section>
      </Stack>
    </Box>
  );
}
