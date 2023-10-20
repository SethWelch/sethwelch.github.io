import { Box, Grid, Typography } from '@mui/material'

import { useTheme } from '@emotion/react'

import CssIcon from '../assets/css3-plain.svg'
import JavascriptIcon from '../assets/javascript-plain.svg'
import MaterialUiIcon from '../assets/materialui-plain.svg'
import NodeJsIcon from '../assets/nodejs-plain.svg'
import PostgresIcon from '../assets/postgresql-plain.svg'
import ReactIcon from '../assets/react-original.svg'

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
                fontFamily: 'monospace',
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
            <Typography>About Me</Typography>
            <Typography>
              I am a Full Stack Software Engineer that specializes in Frontend
              Development. Throughout my career, I have had the opportunity to
              work with many different languages and frameworks, but Javascript
              and React are what I have enjoyed using the most.
            </Typography>
            <Typography>
              I am a husband and a father of three kids. My hobbies include
              retro electronics and video games, soldering, and camping.
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
            <Typography>Skills</Typography>
            <img
              src={CssIcon}
              className="logo react"
              alt="React logo"
              style={{ height: 60 }}
            />
            <img
              src={JavascriptIcon}
              className="logo react"
              alt="React logo"
              style={{ height: 60 }}
            />
            <img
              src={MaterialUiIcon}
              className="logo react"
              alt="React logo"
              style={{ height: 60 }}
            />
            <img
              src={NodeJsIcon}
              className="logo react"
              alt="React logo"
              style={{ height: 60 }}
            />
            <img
              src={PostgresIcon}
              className="logo react"
              alt="React logo"
              style={{ height: 60 }}
            />
            <img
              src={ReactIcon}
              className="logo react"
              alt="React logo"
              style={{ height: 60 }}
            />

            <Typography>
              I am a Full Stack Software Engineer that specializes in Frontend
              Development. Throughout my career, I have had the opportunity to
              work with many different languages and frameworks, but Javascript
              and React are what I have enjoyed using the most.
            </Typography>
            <Typography>
              I am a husband and a father of three kids. My hobbies include
              retro electronics and video games, soldering, and camping.
            </Typography>
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
