import { Box, Grid, Typography } from '@mui/material'

import { useTheme } from '@emotion/react'

import Title from '../components/Title'
import IconContainer from '../components/IconContainer'
import ProjectCard from '../components/ProjectCard'
import FullPageGridItem from '../components/FullPageGridItem'

import CssIcon from '../assets/icons/css3-plain.svg'
import JavascriptIcon from '../assets/icons/javascript-plain.svg'
import MaterialUiIcon from '../assets/icons/materialui-plain.svg'
import NodeJsIcon from '../assets/icons/nodejs-plain.svg'
import PostgresIcon from '../assets/icons/postgresql-plain.svg'
import ReactIcon from '../assets/icons/react-original.svg'
import FigmaIcon from '../assets/icons/figma-plain.svg'
import GitIcon from '../assets/icons/git-plain.svg'

import BootstrapIcon from '../assets/icons/bootstrap-plain.svg'
import DockerIcon from '../assets/icons/docker-plain.svg'
import JavaIcon from '../assets/icons/java-plain.svg'
import KotlinIcon from '../assets/icons/kotlin-plain.svg'
import MysqlIcon from '../assets/icons/mysql-plain.svg'
import PhpIcon from '../assets/icons/php-plain.svg'
import SequelizeIcon from '../assets/icons/sequelize-plain.svg'
import TypescriptIcon from '../assets/icons/typescript-plain.svg'

import GithubIcon from '../assets/icons/github.svg'
import LinkedinIcon from '../assets/icons/linkedin.svg'

import WBWLImage from '../assets/images/wordsbutwithletters.png'
import PortfolioImage from '../assets/images/PortfolioPage.png'

function Home() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        height: 'calc(100vh - 56px)',
        width: '100vw',
        mt: 7,
        overflow: 'hidden',
        background: 'black',
      }}
    >
      <Box sx={{ maxWidth: 2000, margin: 'auto' }}>
        <Box id="stars" />
        <Box id="stars2" />
        <Box id="stars3" />
      </Box>

      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        sx={{ height: '100%', overflowY: 'auto' }}
      >
        <FullPageGridItem sx={{ gap: 4 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                fontSize: '4rem',
                fontWeight: 500,
                fontFamily: 'permanent marker',
              }}
            >
              Seth Welch
            </Typography>
            <Typography
              sx={{
                fontSize: '2rem',
                fontWeight: 500,
                fontFamily: 'monospace',
              }}
            >
              Software Engineer
            </Typography>
          </Box>
        </FullPageGridItem>
        <FullPageGridItem>
          <Box
            id="about-me-box"
            sx={{
              background: theme.palette.background,
              height: '100%',
              width: '100%',
              zIndex: 1,
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
              sx={{ width: '100%', height: '100%' }}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                item
                xs={4}
              >
                <Title>About Me</Title>
              </Grid>
              <Grid
                container
                item
                justifyContent="center"
                sx={{ width: '100%', gap: { xs: 0, sm: 12 }, padding: 2 }}
                xs={8}
              >
                <Grid item sx={{ maxWidth: 500 }}>
                  <Typography sx={{ mb: 4 }}>
                    I am a Full Stack Software Engineer that specializes in
                    Frontend Development. Throughout my career, I have had the
                    opportunity to work with many different languages and
                    frameworks, but Javascript and React are what I have enjoyed
                    using the most.
                  </Typography>
                  <Typography>
                    I am a husband and a father of three kids. My hobbies
                    include retro electronics and video games, soldering, and
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
        <FullPageGridItem>
          <Box
            id="skills-box"
            sx={{
              background: theme.palette.background,
              height: '100%',
              width: '100%',
              zIndex: 1,
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
              sx={{ width: '100%', height: '100%' }}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                item
                xs={4}
              >
                <Title>Skills</Title>
              </Grid>
              <Grid
                container
                item
                xs={8}
                sx={{ '&.MuiGrid-item': { maxWidth: 1600 } }}
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
                    src={FigmaIcon}
                    className="logo figma"
                    alt="Figma logo"
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

            <Typography>
              Other Languages Used During My Professional Career
            </Typography>
          </Box>
        </FullPageGridItem>
        <FullPageGridItem>
          <Box
            sx={{
              background: theme.palette.background,
              height: '100%',
              width: '100%',
              zIndex: 1,
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
              sx={{ width: '100%', height: '100%' }}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                item
                xs={4}
              >
                <Title>Other Skills</Title>
              </Grid>
              <Grid
                container
                item
                xs={8}
                sx={{ '&.MuiGrid-item': { maxWidth: 1600 } }}
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
                <IconContainer text="PHP">
                  <img
                    src={PhpIcon}
                    className="logo PHP"
                    alt="PHP logo"
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
              </Grid>
            </Grid>
          </Box>
        </FullPageGridItem>
        <FullPageGridItem
          sx={{
            height: {
              xs: 'fit-content',
              xl: '100%',
            },
          }}
        >
          <Box
            id="projects-box"
            sx={{
              background: theme.palette.background,
              height: '100%',
              width: '100%',
              zIndex: 1,
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
              sx={{ width: '100%', height: '100%' }}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                item
                xs={4}
              >
                <Title>Projects</Title>
              </Grid>
              <Grid
                container
                item
                xs={8}
                sx={{
                  height: '100%',
                  padding: {
                    xs: 4,
                    xl: 0,
                  },
                }}
                justifyContent="center"
              >
                <Grid
                  container
                  sx={{
                    direction: { xs: 'column', lg: 'row' },
                    gap: { xs: 2 },
                    maxWidth: 1600,
                  }}
                  justifyContent="space-around"
                >
                  <ProjectCard
                    title="Words but with Letters"
                    body="Word game actively being developed with a friend"
                    chips={['React', 'Node']}
                    image={
                      <img
                        src={WBWLImage}
                        style={{ height: 200, background: 'black' }}
                      />
                    }
                  />
                  <ProjectCard
                    title="React Portfolio"
                    body="I created the portfolio that this page is using"
                    chips={['React', 'CSS', 'Javascript']}
                    image={
                      <img
                        src={PortfolioImage}
                        style={{ height: 200, background: 'black' }}
                      />
                    }
                  />
                  <ProjectCard
                    title="React Snake"
                    body="I snake game made with React for my kids"
                    chips={['React', 'CSS', 'Javascript']}
                    image={
                      <img
                        src={PortfolioImage}
                        style={{ height: 200, background: 'black' }}
                      />
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </FullPageGridItem>
        <FullPageGridItem height={64}>
          <Box
            sx={{
              background: 'rebeccapurple',
              height: '100%',
              width: '100%',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            <img
              src={GithubIcon}
              className="logo Github"
              alt="Github logo"
              style={{ height: 40, fill: 'white' }}
            />
            <img
              src={LinkedinIcon}
              className="logo Linkedin"
              alt="Linkedin logo"
              style={{ height: 40, fill: 'white' }}
            />
          </Box>
        </FullPageGridItem>
      </Grid>
    </Box>
  )
}

export default Home
