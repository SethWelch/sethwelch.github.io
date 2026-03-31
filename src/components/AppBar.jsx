import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'

import { AppBar as MuiAppBar } from '@mui/material'
import React, { useContext } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

import PropTypes from 'prop-types'

import { ThemeContext, THEMES } from '../App'
import { useTheme } from '@emotion/react'

const drawerWidth = 240
const navItems = [
  { label: 'About', id: 'about-me-box' },
  { label: 'Experience', id: 'experience-box' },
  { label: 'Projects', id: 'projects-box' },
  { label: 'Skills', id: 'skills-box' },
]

function AppBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { themeName, setThemeName } = useContext(ThemeContext)
  const muiTheme = useTheme()

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev)
  }

  const changeTheme = (name) => {
    setThemeName(name)
    localStorage.setItem('theme', name)
  }

  const scrollToSection = (id) => {
    const el = document.querySelector(`#${id}`)
    if (!el) return
    const top = el.getBoundingClientRect().top + globalThis.scrollY - 64
    globalThis.scrollTo({ top, behavior: 'smooth' })
  }

  const swatches = (
    <Box sx={{ display: 'flex', gap: 0.75, alignItems: 'center' }}>
      {Object.entries(THEMES).map(([key, { label, swatch }]) => (
        <Tooltip title={label} key={key}>
          <Box
            onClick={() => changeTheme(key)}
            sx={{
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: swatch,
              cursor: 'pointer',
              border: themeName === key
                ? '2px solid white'
                : '2px solid rgba(255,255,255,0.3)',
              transition: 'transform 0.15s',
              '&:hover': { transform: 'scale(1.25)' },
            }}
          />
        </Tooltip>
      ))}
    </Box>
  )

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Seth Welch
      </Typography>
      <Divider />
      <Box onClick={handleDrawerToggle}>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                sx={{ textAlign: 'center' }}
                onClick={() => scrollToSection(item.id)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, p: 2 }}>
        {Object.entries(THEMES).map(([key, { label, swatch }]) => (
          <Tooltip title={label} key={key}>
            <Box
              onClick={() => changeTheme(key)}
              sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: swatch,
                cursor: 'pointer',
                border: themeName === key
                  ? `2px solid ${muiTheme.palette.text.primary}`
                  : '2px solid transparent',
                outline: themeName === key ? '1px solid rgba(128,128,128,0.5)' : 'none',
              }}
            />
          </Tooltip>
        ))}
      </Box>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <MuiAppBar component="nav" position="sticky">
        <Toolbar sx={{ position: 'relative' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{
              fontFamily: 'permanent marker',
              fontSize: '1.2rem',
              color: 'white',
              display: { xs: 'none', sm: 'block' },
              mr: 3,
            }}
          >
            SW
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{ color: 'rgba(255,255,255,0.85)', textTransform: 'none', fontSize: '0.95rem' }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ position: 'absolute', right: 16 }}>
            {swatches}
          </Box>
        </Toolbar>
      </MuiAppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              background: muiTheme.palette.background.paper,
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  )
}

AppBar.propTypes = {
  window: PropTypes.node,
}

AppBar.defaultProps = {
  window: undefined,
}

export default AppBar
