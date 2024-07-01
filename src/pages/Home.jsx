import { Box, Grid, IconButton, Typography } from "@mui/material";

import { useTheme } from "@emotion/react";

import Title from "../components/Title";
import IconContainer from "../components/IconContainer";
import ProjectCard from "../components/ProjectCard";
import FullPageGridItem from "../components/FullPageGridItem";

import CssIcon from "../assets/icons/css3-plain.svg";
import JavascriptIcon from "../assets/icons/javascript-plain.svg";
import MaterialUiIcon from "../assets/icons/materialui-plain.svg";
import NodeJsIcon from "../assets/icons/nodejs-plain.svg";
import PostgresIcon from "../assets/icons/postgresql-plain.svg";
import ReactIcon from "../assets/icons/react-original.svg";
import FigmaOriginal from "../assets/icons/figma-original.svg";
import GitIcon from "../assets/icons/git-plain.svg";

import BootstrapIcon from "../assets/icons/bootstrap-plain.svg";
import DockerIcon from "../assets/icons/docker-plain.svg";
import JavaIcon from "../assets/icons/java-plain.svg";
import KotlinIcon from "../assets/icons/kotlin-plain.svg";
import MysqlIcon from "../assets/icons/mysql-plain.svg";
import ReduxIcon from "../assets/icons/redux-original.svg";
import SequelizeIcon from "../assets/icons/sequelize-plain.svg";
import TypescriptIcon from "../assets/icons/typescript-plain.svg";

import GithubIcon from "../assets/icons/github.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";

import WBWLImage from "../assets/images/wordsbutwithletters.png";
import PortfolioImage from "../assets/images/PortfolioPage.png";
import SnakeImage from "../assets/images/Snake.png";
import WindowsImage from "../assets/images/Windows98.png";
import Image2048 from "../assets/images/2048.png";

function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "calc(100vh - 56px)",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Box sx={{ maxWidth: 2000, margin: "auto", height: 0 }}>
        <Box id="stars" />
        <Box id="stars2" />
        <Box id="stars3" />
      </Box>

      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        sx={{ height: "100%", overflowY: "auto" }}
      >
        <FullPageGridItem
          sx={{
            gap: 4,
            background:
              theme.palette.mode === "light" ? "currentColor" : "black",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: "4rem",
                fontWeight: 500,
                fontFamily: "permanent marker",
                color: "white",
              }}
            >
              Seth Welch
            </Typography>
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: 500,
                fontFamily: "monospace",
                color: "white",
              }}
            >
              Software Engineer
            </Typography>
            <Box
              sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 2 }}
            >
              <IconButton
                aria-label="linkedin link"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/seth-welch-89910897",
                    "_blank"
                  )
                }
              >
                <img
                  src={LinkedinIcon}
                  className="logo Linkedin"
                  alt="Linkedin logo"
                  style={{ height: 40, fill: "white" }}
                />
              </IconButton>
              <IconButton
                aria-label="github link"
                onClick={() =>
                  window.open("https://github.com/SethWelch", "_blank")
                }
              >
                <img
                  src={GithubIcon}
                  className="logo Github"
                  alt="Github logo"
                  style={{ height: 40, fill: "white" }}
                />
              </IconButton>
            </Box>
          </Box>
        </FullPageGridItem>
        <FullPageGridItem
          sx={{
            height: "max-content",
          }}
        >
          <Box
            id="about-me-box"
            sx={{
              background: theme.palette.background,
              height: "100%",
              width: "100%",
              minHeight: "100vh",
              zIndex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
              sx={{ width: "100%", height: "100%" }}
            >
              <Title>About Me</Title>
              <Grid
                container
                item
                justifyContent="center"
                sx={{
                  width: "100%",
                  gap: { xs: 0, sm: 12 },
                  padding: 2,
                  mt: 2,
                }}
                xs={8}
              >
                <Grid item sx={{ maxWidth: 500, mb: 4 }}>
                  <Typography sx={{ mb: 4 }}>
                    I am a Full Stack Software Engineer that specializes in
                    Frontend Development. Throughout my career, I have had the
                    opportunity to work with many different languages and
                    frameworks, but Javascript and React are what I have enjoyed
                    using the most.
                  </Typography>
                  <Typography>
                    I am a husband and a father of three kids. My hobbies
                    include retro electronics, video games, soldering, and
                    camping.
                  </Typography>
                </Grid>
                <Grid item>
                  <div className="container">
                    <span className="react-logo">
                      <span className="nucleo"></span>
                    </span>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </FullPageGridItem>
        <FullPageGridItem
          sx={{
            height: "max-content",
            zIndex: 1,
          }}
        >
          <Box
            id="projects-box"
            sx={{
              background: theme.palette.background,
              height: "100%",
              width: "100%",
              zIndex: 1,
            }}
          >
            <Title>Recent Projects</Title>
            <Grid container item justifyContent="center" alignItems="center">
              <Grid
                container
                sx={{
                  direction: { xs: "column", lg: "row" },
                  gap: { xs: 2 },
                  maxWidth: 2000,
                  mt: 4,
                }}
                justifyContent="space-around"
              >
                <ProjectCard
                  title="React Portfolio"
                  body="The portfolio project that this page is using"
                  chips={["React", "CSS", "Javascript", "Recoil"]}
                  links={[
                    "https://www.sethwelch.com",
                    "https://github.com/SethWelch/sethwelch.github.io",
                  ]}
                  image={
                    <img
                      src={PortfolioImage}
                      style={{ height: 200, background: "black" }}
                    />
                  }
                />
                <ProjectCard
                  title="React Snake"
                  body="A snake game made with React for my kids"
                  chips={["React", "CSS", "Javascript"]}
                  links={[
                    "https://www.svoze.com",
                    "https://github.com/SethWelch/Snake",
                  ]}
                  image={
                    <img
                      src={SnakeImage}
                      style={{ height: 200, background: "black" }}
                    />
                  }
                />
                <ProjectCard
                  title="Windows 98"
                  body="Creating a Windows 98 clone for fun"
                  chips={["React", "CSS", "Typescript"]}
                  links={[
                    "https://windows1998.vercel.app",
                    "https://github.com/SethWelch/Windows98",
                  ]}
                  image={
                    <img
                      src={WindowsImage}
                      style={{ height: 200, background: "black" }}
                    />
                  }
                />
                <ProjectCard
                  title="2048"
                  body="Recreating 2048"
                  chips={["React", "CSS", "Typescript", "Vite"]}
                  links={[
                    "https://www.sethwelch.com/2048",
                    "https://github.com/SethWelch/2048",
                  ]}
                  image={
                    <img
                      src={Image2048}
                      style={{ height: 200, background: "black" }}
                    />
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </FullPageGridItem>
        <FullPageGridItem>
          <Box
            id="skills-box"
            sx={{
              background: theme.palette.background,
              height: "100%",
              width: "100%",
              zIndex: 1,
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
              sx={{ width: "100%", height: "100%" }}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
                item
                xs={4}
                sx={{ gap: 3 }}
              >
                <Title>Skills</Title>
                <Typography sx={{ width: 400, textAlign: "center" }}>
                  Skills that I am very familiar with and use almost daily.
                </Typography>
              </Grid>
              <Grid
                container
                item
                xs={8}
                sx={{ "&.MuiGrid-item": { maxWidth: 1200 } }}
              >
                <IconContainer text="React">
                  <img
                    src={ReactIcon}
                    className="logo react"
                    alt="React logo"
                    style={{ height: 60 }}
                  />
                </IconContainer>
                <IconContainer text="Javascript">
                  <img
                    src={JavascriptIcon}
                    className="logo javascript"
                    alt="Javascript logo"
                    style={{ height: 60 }}
                  />
                </IconContainer>
                <IconContainer text="Material UI">
                  <img
                    src={MaterialUiIcon}
                    className="logo mui"
                    alt="MUI logo"
                    style={{ height: 60 }}
                  />
                </IconContainer>
                <IconContainer text="CSS">
                  <img
                    src={CssIcon}
                    className="logo css"
                    alt="CSS logo"
                    style={{ height: 60 }}
                  />
                </IconContainer>
                <IconContainer text="Node">
                  <img
                    src={NodeJsIcon}
                    className="logo node"
                    alt="Node logo"
                    style={{ height: 60 }}
                  />
                </IconContainer>
                <IconContainer text="Postgres">
                  <img
                    src={PostgresIcon}
                    className="logo postgres"
                    alt="Postgres logo"
                    style={{ height: 60 }}
                  />
                </IconContainer>
                <IconContainer text="Figma">
                  <img
                    src={FigmaOriginal}
                    className="logo figma"
                    alt="Figma logo"
                    style={{ height: 60 }}
                  />
                </IconContainer>
                <IconContainer text="Redux">
                  <img
                    src={ReduxIcon}
                    className="logo Redux"
                    alt="Redux logo"
                    style={{ height: 60 }}
                  />
                </IconContainer>
              </Grid>
            </Grid>
          </Box>
        </FullPageGridItem>
        <FullPageGridItem>
          <Box
            id="skills-box-2"
            sx={{
              background: theme.palette.background,
              height: "100%",
              width: "100%",
              zIndex: 1,
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
              sx={{ width: "100%", height: "100%" }}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
                item
                xs={4}
                sx={{ gap: 3 }}
              >
                <Title>Additional Skills</Title>
                <Typography sx={{ width: 400, textAlign: "center" }}>
                  Skills that I have used throughout my career, but am not as
                  familiar with.
                </Typography>
              </Grid>
              <Grid
                container
                item
                xs={8}
                sx={{ "&.MuiGrid-item": { maxWidth: 1200 } }}
              >
                <IconContainer text="Bootstrap">
                  <img
                    src={BootstrapIcon}
                    className="logo Bootstrap"
                    alt="Bootstrap logo"
                    style={{ height: 60 }}
                  />
                </IconContainer>
                <IconContainer text="Docker">
                  <img
                    src={DockerIcon}
                    className="logo Docker"
                    alt="Docker logo"
                    style={{ height: 60 }}
                  />
                </IconContainer>
                <IconContainer text="Java">
                  <img
                    src={JavaIcon}
                    className="logo Java"
                    alt="Java logo"
                    style={{ height: 60 }}
                  />
                </IconContainer>
                <IconContainer text="Kotlin">
                  <img
                    src={KotlinIcon}
                    className="logo Kotlin"
                    alt="Kotlin logo"
                    style={{ height: 60 }}
                  />
                </IconContainer>
                <IconContainer text="MySQL">
                  <img
                    src={MysqlIcon}
                    className="logo MySQL"
                    alt="MySQL logo"
                    style={{ height: 60 }}
                  />
                </IconContainer>
                <IconContainer text="Sequelize">
                  <img
                    src={SequelizeIcon}
                    className="logo Sequelize"
                    alt="Sequelize logo"
                    style={{ height: 60 }}
                  />
                </IconContainer>
                <IconContainer text="Typescript">
                  <img
                    src={TypescriptIcon}
                    className="logo typescript"
                    alt="typescript logo"
                    style={{ height: 60 }}
                  />
                </IconContainer>
                <IconContainer text="Git">
                  <img
                    src={GitIcon}
                    className="logo git"
                    alt="Git logo"
                    style={{ height: 60 }}
                  />
                </IconContainer>
              </Grid>
            </Grid>
          </Box>
        </FullPageGridItem>
      </Grid>
    </Box>
  );
}

export default Home;
