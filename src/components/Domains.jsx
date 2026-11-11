import { Box, Container, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import LayersOutlined from '@mui/icons-material/LayersOutlined'
import VerifiedUserOutlined from '@mui/icons-material/VerifiedUserOutlined'
import GroupOutlined from '@mui/icons-material/GroupOutlined'

import { FONT_MONO } from '../themes.js'
import SectionHeading from './SectionHeading.jsx'

const domains = [
  {
    icon: LayersOutlined,
    title: 'Full-Stack Architecture',
    body: 'Greenfield systems designed for correctness first and scale second.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'],
  },
  {
    icon: VerifiedUserOutlined,
    title: 'Security & Compliance',
    body: 'A SOC 2 program that keeps the company compliant without slowing the team down.',
    tags: ['Vanta', 'SOC 2', 'RBAC', 'Vulnerability Management'],
  },
  {
    icon: GroupOutlined,
    title: 'Engineering Leadership',
    body: 'Hiring, rituals, and delivery across product, design, and engineering.',
    tags: ['Hiring pipelines', 'Agile sprints', 'Cross-functional delivery', 'Mentorship'],
  },
]

export default function Domains() {
  const theme = useTheme()
  const text = theme.palette.text.primary
  const accent = theme.palette.primary.main
  const muted = alpha(text, 0.6)
  const border = alpha(text, 0.1)

  return (
    <Box component="section" id="domains" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading eyebrow="Technical domains" title="What I specialize in" />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 3 }}>
          {domains.map((d, i) => {
            const Icon = d.icon
            return (
              <Box
                key={d.title}
                sx={{
                  p: { xs: 2.5, md: 3.5 },
                  border: `1px solid ${border}`,
                  borderRadius: 4,
                  background: theme.palette.background.paper,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Icon sx={{ color: accent, fontSize: 26 }} />
                  <Typography sx={{ fontFamily: FONT_MONO, fontSize: '0.75rem', color: muted }}>
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                </Box>
                <Typography component="h3" sx={{ fontSize: '1.15rem', fontWeight: 600, color: text, mb: 1 }}>
                  {d.title}
                </Typography>
                <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: muted, mb: 3 }}>{d.body}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {d.tags.map((t) => (
                    <Box
                      component="span"
                      key={t}
                      sx={{
                        px: 1.25,
                        py: 0.5,
                        borderRadius: 1.5,
                        background: alpha(text, 0.06),
                        fontFamily: FONT_MONO,
                        fontSize: '0.72rem',
                        color: alpha(text, 0.8),
                      }}
                    >
                      {t}
                    </Box>
                  ))}
                </Box>
              </Box>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}
