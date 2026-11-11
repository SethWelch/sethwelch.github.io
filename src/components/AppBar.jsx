import { useState } from 'react'
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'

import { FONT_MONO } from '../themes.js'
import { EMAIL, NAV_HEIGHT, scrollToSection } from '../site.js'

const navItems = [
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience-box' },
  { label: 'Domains', id: 'domains' },
  { label: 'Contact', id: 'contact-box' },
]

export default function AppBar() {
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const muted = alpha(theme.palette.text.primary, 0.6)

  const emailButton = (
    <Button
      href={`mailto:${EMAIL}`}
      variant="outlined"
      sx={{
        textTransform: 'none',
        fontWeight: 500,
        fontSize: '0.875rem',
        color: theme.palette.text.primary,
        borderColor: alpha(theme.palette.text.primary, 0.15),
        borderRadius: 2,
        px: 2,
        '&:hover': {
          borderColor: alpha(theme.palette.text.primary, 0.35),
          background: alpha(theme.palette.text.primary, 0.04),
        },
      }}
    >
      Email
    </Button>
  )

  return (
    <>
      <MuiAppBar
        component="nav"
        position="sticky"
        elevation={0}
        sx={{
          background: alpha(theme.palette.background.default, 0.8),
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: NAV_HEIGHT, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <Typography
                component="a"
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  globalThis.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                sx={{
                  fontFamily: FONT_MONO,
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  color: theme.palette.text.primary,
                  textDecoration: 'none',
                }}
              >
                seth.welch
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: muted,
                    textTransform: 'none',
                    fontWeight: 400,
                    fontSize: '0.9rem',
                    px: 1.5,
                    '&:hover': { color: theme.palette.text.primary, background: 'transparent' },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>{emailButton}</Box>
              <IconButton
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                sx={{ display: { sm: 'none' }, color: theme.palette.text.primary }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: 240, background: theme.palette.background.default },
        }}
      >
        <List sx={{ pt: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => {
                  setMobileOpen(false)
                  scrollToSection(item.id)
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ px: 2 }}>{emailButton}</Box>
      </Drawer>
    </>
  )
}
