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
  Typography,
} from '@mui/material'

import { AppBar as MuiAppBar } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'

import PropTypes from 'prop-types'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import { useRecoilState } from 'recoil'
import { themeState } from '../recoil/atom/themeAtom'

const drawerWidth = 240
const navItems = [
  { label: 'About', id: 'about-me-box' },
  { label: 'Projects', id: 'projects-box' },
  { label: 'Skills', id: 'skills-box' },
]

function AppBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [theme, setTheme] = useRecoilState(themeState)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const changeTheme = () => {
    const newTheme = theme && theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const scrollToComponent = (event, id) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${id}`
    )

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Seth Welch
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={(e) => scrollToComponent(e, item.id)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <MuiAppBar component="nav" sx={{ position: 'relative' }}>
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
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{ color: '#fff' }}
                onClick={(e) => scrollToComponent(e, item.id)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <IconButton
            sx={{ position: 'absolute', right: 25 }}
            onClick={changeTheme}
          >
            <Brightness4Icon sx={{ fill: 'white' }} />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
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
