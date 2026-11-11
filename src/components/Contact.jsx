import { Box, Button, Container, IconButton, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import MailOutlined from '@mui/icons-material/MailOutlined'
import LinkedIn from '@mui/icons-material/LinkedIn'
import GitHub from '@mui/icons-material/GitHub'

import { FONT_MONO } from '../themes.js'
import { EMAIL } from '../site.js'
import { Eyebrow } from './SectionHeading.jsx'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/seth-welch-89910897', icon: LinkedIn },
  { label: 'GitHub', href: 'https://github.com/SethWelch', icon: GitHub },
]

export default function Contact() {
  const theme = useTheme()
  const text = theme.palette.text.primary
  const accent = theme.palette.primary.main
  const muted = alpha(text, 0.6)
  const border = alpha(text, 0.1)

  return (
    <Box component="footer" id="contact-box" sx={{ pt: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            px: { xs: 2.5, md: 6 },
            py: { xs: 6, md: 9 },
            textAlign: 'center',
            border: `1px solid ${alpha(accent, 0.25)}`,
            borderRadius: 4,
            background: theme.palette.background.paper,
          }}
        >
          <Eyebrow>Contact</Eyebrow>
          <Typography
            component="h2"
            sx={{ fontSize: { xs: '1.9rem', md: '2.25rem' }, fontWeight: 600, letterSpacing: '-0.02em', color: text }}
          >
            Let&apos;s build something durable.
          </Typography>
          <Typography sx={{ mt: 2, mx: 'auto', maxWidth: 520, fontSize: '1rem', lineHeight: 1.6, color: muted }}>
            Founding roles, engineering leadership, or a hard systems problem — I&apos;d like to hear about it.
          </Typography>

          <Button
            href={`mailto:${EMAIL}`}
            variant="contained"
            disableElevation
            startIcon={<MailOutlined sx={{ fontSize: '1.1rem !important' }} />}
            sx={{
              mt: 4,
              textTransform: 'none',
              fontFamily: FONT_MONO,
              fontWeight: 500,
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              borderRadius: 2,
              px: 2.5,
              py: 1.1,
              background: accent,
              color: theme.palette.getContrastText(accent),
              '&:hover': { background: alpha(accent, 0.85) },
            }}
          >
            {EMAIL}
          </Button>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 3 }}>
            {socials.map(({ label, href, icon: Icon }) => (
              <IconButton
                key={label}
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={label}
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: 2.5,
                  border: `1px solid ${border}`,
                  color: muted,
                  '&:hover': { color: text, borderColor: alpha(text, 0.3), background: alpha(text, 0.04) },
                }}
              >
                <Icon sx={{ fontSize: 20 }} />
              </IconButton>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 1,
            mt: { xs: 6, md: 6 },
            py: 4,
            borderTop: `1px solid ${border}`,
            fontFamily: FONT_MONO,
            fontSize: '0.75rem',
            color: muted,
          }}
        >
          <span>© {new Date().getFullYear()} Seth Welch</span>
          <span>sethwelch.com</span>
        </Box>
      </Container>
    </Box>
  )
}
