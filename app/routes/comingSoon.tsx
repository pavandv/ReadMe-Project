import {
  alpha,
  Backdrop,
  Box,
  Container,
  IconButton,
  styled,
  Typography,
  Stack,
  keyframes,
  Fade,
} from "@mui/material";
import { LinkedInIcon, TwitterIcon, GithubIcon } from "~/components/icons";

const animateGradient = keyframes`
  0% { background-position:50% 0% }

  50% { background-position:50% 100% }

  100% { background-position:50% 0% }
`;

const BlurBackdrop = styled(Box)(({ theme }) => ({
  height: "100%",
  background: alpha(theme.palette.background.default, 0.12),
  backdropFilter: "blur(145px)",
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}));

const TopRectangle = styled(Box)(() => ({
  animation: `${animateGradient} 30s ease infinite`,
  background: `linear-gradient(0deg, #FFA726, #E65100, #1A73E8, #00EC89, #1976d2, #9c27b0)`,
  backgroundSize: "800% 800%",
  borderRadius: "12px",
  height: 240,
  // left: "50%",
  position: "absolute",
  // transform: "translateX(-50%)",
  width: 180,
}));

const BottomRectangle = styled(Box)(() => ({
  animation: `${animateGradient} 30s ease infinite`,
  background: `linear-gradient(0deg, #1A73E8, #00EC89, #1976d2, #9c27b0, #FFA726, #E65100)`,
  backgroundSize: "800% 800%",
  borderRadius: "12px",
  bottom: 0,
  height: 240,
  left: 440,
  position: "absolute",
  transform: "rotate(45deg)",
  width: 180,
}));

const Circle = styled(Box)(() => {
  return {
    animation: `${animateGradient} 30s ease infinite`,
    background: `linear-gradient(0deg, #1976d2, #9c27b0, #FFA726, #E65100, #1A73E8, #00EC89)`,
    backgroundSize: "800% 800%",
    borderRadius: "50%",
    height: 240,
    position: "absolute",
    right: -10,
    top: "50%",
    transform: "translateY(-50%)",
    width: 240,
  };
});

const Divider = styled("div")({
  height: 8,
  width: 530,
  borderRadius: 10,
  backgroundImage: "linear-gradient(45deg, #1A73E8, #00EC89)",
});

export default function Index() {
  return (
    <Box height="100vh">
      <Box position="relative" overflow="hidden" height="100%">
        <TopRectangle />
        <Circle />
        <BottomRectangle />
      </Box>
      <BlurBackdrop>
        <Container maxWidth="md" sx={{ height: "100%" }}>
          <Stack height="100%" justifyContent="center" spacing={3}>
            <Typography variant="h1" fontWeight="bold">
              Hey there!
            </Typography>

            <Divider />

            <Stack spacing={8}>
              <Typography variant="h4">
                🚧 I'm still working on my Portfolio
              </Typography>
              <Stack spacing={1.5}>
                <Typography variant="h5">
                  <Typography
                    component="span"
                    variant="h5"
                    sx={{ color: "text.secondary" }}
                  >
                    Meanwhile you can catch me on -
                  </Typography>
                  {/* <span> ✌️</span> */}
                </Typography>
                <Stack direction="row">
                  <IconButton
                    color="primary"
                    size="large"
                    edge="start"
                    href="https://linkedin.com/in/pavandv/"
                  >
                    <LinkedInIcon />
                  </IconButton>

                  <IconButton
                    color="primary"
                    size="large"
                    href="https://twitter.com/pavan_divi"
                  >
                    <TwitterIcon />
                  </IconButton>

                  <IconButton size="large" href="https://github.com/pavandv">
                    <GithubIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </BlurBackdrop>
    </Box>
  );
}
