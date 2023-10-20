import { Box, Grid, Typography } from '@mui/material'

import { useTheme } from '@emotion/react'

import CssIcon from '../assets/css3-plain.svg'
import JavascriptIcon from '../assets/javascript-plain.svg'
import MaterialUiIcon from '../assets/materialui-plain.svg'
import NodeJsIcon from '../assets/nodejs-plain.svg'
import PostgresIcon from '../assets/postgresql-plain.svg'
import ReactIcon from '../assets/react-original.svg'
import FigmaIcon from '../assets/figma-plain.svg'
import GitIcon from '../assets/git-plain.svg'

import BootstrapIcon from '../assets/bootstrap-plain.svg'
import DockerIcon from '../assets/docker-plain.svg'
import JavaIcon from '../assets/java-plain.svg'
import KotlinIcon from '../assets/kotlin-plain.svg'
import MysqlIcon from '../assets/mysql-plain.svg'
import PhpIcon from '../assets/php-plain.svg'
import SequelizeIcon from '../assets/sequelize-plain.svg'
import TypescriptIcon from '../assets/typescript-plain.svg'

function CustomGridItem({ height, sx, children }) {
  return (
    <Grid
      item
      xs={12}
      sx={{
        height: height || '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
    >
      {children}
    </Grid>
  )
}

function Title({ children }) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 40,
          fontWeight: 500,
          fontFamily: 'permanent marker',
        }}
      >
        {children}
      </Typography>
      <Box sx={{ width: '100%', height: 5, background: 'blueviolet' }} />
    </Box>
  )
}

function IconContainer({ text, children }) {
  return (
    <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ textAlign: 'center' }}>
        {children}
        <Typography sx={{ textAlign: 'center' }}>{text}</Typography>
      </Box>
    </Grid>
  )
}

function Home() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        height: 'calc(100vh - 64px)',
        width: '100vw',
        mt: 6,
        overflow: 'hidden',
        background: 'black',
      }}
    >
      <Box id="stars" />
      <Box id="stars2" />
      <Box id="stars3" />
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        sx={{ height: '100%', overflowY: 'auto' }}
      >
        <CustomGridItem sx={{ gap: 4 }}>
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
        </CustomGridItem>
        <CustomGridItem>
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
                <Title>About Me</Title>
              </Grid>
              <Grid
                container
                item
                justifyContent="center"
                sx={{ width: '100%', gap: 12 }}
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
        </CustomGridItem>
        <CustomGridItem>
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
                <Title>Skills</Title>
              </Grid>
              <Grid container item xs={8}>
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
        </CustomGridItem>
        <CustomGridItem>
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
              <Grid container item xs={8}>
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
        </CustomGridItem>
        <CustomGridItem height={64}>
          <Box
            sx={{
              background: 'rebeccapurple',
              height: '100%',
              width: '100%',
              zIndex: 1,
            }}
          >
            Footer
          </Box>
        </CustomGridItem>
      </Grid>
    </Box>
  )
}

export default Home
