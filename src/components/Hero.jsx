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
  { value: `${fullYearsSince(CAREER_START)}+`, label: 'Years building software' },
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
    <Box component="section" id="hero" sx={{ position: 'relative', overflow: 'hidden', py: { xs: 8, md: 12 } }}>
      {/* Faint grid that fades out toward the edges and the bottom of the hero. */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `linear-gradient(${alpha(text, 0.04)} 1px, transparent 1px), linear-gradient(90deg, ${alpha(text, 0.04)} 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          backgroundPosition: 'center top',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 25%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 25%, #000 30%, transparent 100%)',
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
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
            <Box component="span" sx={{ display: 'block', color: theme.palette.text.secondary }}>
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

        <Box sx={{ position: 'relative', flexShrink: 0 }}>
          {/* One soft glow, centred on the portrait so it moves with it. */}
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: { xs: 360, md: 640 },
              height: { xs: 360, md: 640 },
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              background: `radial-gradient(circle, ${alpha(accent, 0.12)} 0%, transparent 65%)`,
            }}
          />
          <Box
            sx={{
              position: 'relative',
              p: { xs: 1, md: 1.5 },
              borderRadius: { xs: 3, md: 4 },
              border: `1px solid ${alpha(accent, 0.25)}`,
              background: alpha(theme.palette.background.paper, 0.7),
              backdropFilter: 'blur(6px)',
            }}
          >
            <Box
              component="img"
              src={PortraitImage}
              alt="Seth Welch"
              sx={{
                display: 'block',
                width: { xs: 132, sm: 168, md: 300 },
                height: { xs: 132, sm: 168, md: 300 },
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
