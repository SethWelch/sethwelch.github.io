import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'

import { FONT_MONO } from '../themes.js'

function useHeadingTokens() {
  const theme = useTheme()
  const text = theme.palette.text.primary
  return { text, accent: theme.palette.primary.main, muted: alpha(text, 0.6) }
}

export function Eyebrow({ children }) {
  const { accent } = useHeadingTokens()
  return (
    <Typography
      sx={{
        fontFamily: FONT_MONO,
        fontSize: '0.75rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: accent,
        mb: 1.5,
      }}
    >
      {children}
    </Typography>
  )
}

export default function SectionHeading({ eyebrow, title, subtitle }) {
  const { text, muted } = useHeadingTokens()
  return (
    <Box sx={{ mb: 6 }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Typography
        component="h2"
        sx={{ fontSize: { xs: '1.9rem', md: '2.25rem' }, fontWeight: 600, letterSpacing: '-0.02em', color: text }}
      >
        {title}
      </Typography>
      {subtitle && <Typography sx={{ mt: 2, color: muted, fontSize: '1rem' }}>{subtitle}</Typography>}
    </Box>
  )
}
