import { Box, Button, Container, Link, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { FONT_MONO } from '../themes.js'
import { scrollToSection } from '../site.js'
import PortraitImage from '../assets/images/Portrait.jpg'

const VESTA_URL = 'https://vestashops.com'

// First professional role: Software Engineer at SoFi, May 2015.
const CAREER_START = new Date(2015, 4, 1)

function fullYearsSince(start) {
  const now = new Date()
  let years = now.getFullYear() - start.getFullYear()
  if (now < new Date(now.getFullYear(), start.getMonth(), start.getDate())) years -= 1
  return years
}

const stats = [
  { value: `${fullYearsSince(CAREER_START)}+`, label: 'Years shipping' },
  { value: '3x', label: 'Founding engineer' },
  { value: 'SOC 2', label: 'Program led' },
]

export default function Hero() {
  const theme = useTheme()
  const text = theme.palette.text.primary
  const muted = alpha(text, 0.6)
  const subtle = alpha(text, 0.12)
  const accent = theme.palette.primary.main

  return (
    <Box component="section" id="hero" sx={{ py: { xs: 8, md: 12 } }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          gap: { xs: 5, md: 8 },
        }}
      >
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 1.5,
              py: 0.5,
              mb: 3,
              borderRadius: 999,
              border: `1px solid ${subtle}`,
              background: alpha(text, 0.03),
              fontFamily: FONT_MONO,
              fontSize: '0.8rem',
              color: muted,
            }}
          >
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399' }} />
            Founding Engineer @ Ascension
          </Box>

          <Typography
            component="h1"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4rem' },
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              maxWidth: 720,
              mb: 3,
            }}
          >
            <Box component="span" sx={{ display: 'block', color: text }}>
              Seth Welch
            </Box>
            <Box component="span" sx={{ display: 'block', color: alpha(text, 0.55) }}>
              Founding Engineer &amp; Engineering Lead.
            </Box>
          </Typography>

          <Typography sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.65, color: muted, maxWidth: 600, mb: 4 }}>
            Building resilient full-stack systems from zero to scale, leading teams, and founder of{' '}
            <Link
              href={VESTA_URL}
              target="_blank"
              rel="noopener"
              underline="always"
              sx={{
                color: text,
                textDecorationColor: alpha(accent, 0.6),
                textUnderlineOffset: '4px',
                '&:hover': { textDecorationColor: accent },
              }}
            >
              Vesta Shops LLC
            </Link>
            .
          </Typography>

          <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 7 }}>
            <Button
              variant="contained"
              disableElevation
              endIcon={<ArrowForwardIcon sx={{ fontSize: '1rem !important' }} />}
              onClick={() => scrollToSection('work')}
              sx={{
                textTransform: 'none',
                fontWeight: 500,
                borderRadius: 2,
                px: 2.5,
                py: 1.1,
                background: accent,
                color: theme.palette.getContrastText(accent),
                '&:hover': { background: alpha(accent, 0.85) },
              }}
            >
              View Work
            </Button>
            <Button
              variant="outlined"
              onClick={() => scrollToSection('contact-box')}
              sx={{
                textTransform: 'none',
                fontWeight: 500,
                borderRadius: 2,
                px: 2.5,
                py: 1.1,
                color: text,
                borderColor: subtle,
                background: alpha(text, 0.02),
                '&:hover': { borderColor: alpha(text, 0.3), background: alpha(text, 0.05) },
              }}
            >
              Get In Touch
            </Button>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              columnGap: 2,
              maxWidth: 450,
              pt: 3,
              borderTop: `1px solid ${subtle}`,
            }}
          >
            {stats.map((s) => (
              <Box key={s.label}>
                <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 500, color: text, letterSpacing: '-0.01em' }}>
                  {s.value}
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', color: muted, mt: 0.25 }}>{s.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          component="img"
          src={PortraitImage}
          alt="Seth Welch"
          sx={{
            flexShrink: 0,
            width: { xs: 140, sm: 180, md: 320 },
            height: { xs: 140, sm: 180, md: 320 },
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center top',
            border: `1px solid ${subtle}`,
            boxShadow: `0 0 0 6px ${alpha(text, 0.03)}, 0 24px 60px ${alpha(accent, 0.12)}`,
          }}
        />
      </Container>
    </Box>
  )
}
