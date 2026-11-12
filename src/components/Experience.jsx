import { Box, Container, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'

import { FONT_MONO } from '../themes.js'
import SectionHeading from './SectionHeading.jsx'

// Months are 1-based. `end: null` means the role is current.
const jobs = [
  {
    company: 'Ascension',
    roles: [{ title: 'Founding Engineer', start: [2025, 1], end: null }],
    categories: [
      {
        name: 'Engineering',
        bullets: [
          'Designed and built the full application stack from scratch: React and Tailwind frontend, Node.js and TypeORM backend, PostgreSQL database.',
          'Engineered complex domain-specific calculation engines requiring high accuracy and reliability across multiple interdependent variables.',
          'Built and maintained multiple customer-facing product surfaces, including authenticated application experiences and public-facing tools.',
        ],
      },
      {
        name: 'Security & Compliance',
        bullets: [
          "Lead the company's SOC 2 compliance program, maintaining compliance across vulnerability management, penetration testing, vendor risk assessments, and Vanta compliance monitoring.",
          "One of two engineers who built the company's infrastructure and security architecture: encryption at rest and in transit, MFA enforcement, Redis-backed session management, and role-based access control.",
        ],
      },
      {
        name: 'Leadership & Operations',
        bullets: [
          'Own the engineering hiring pipeline: first point of contact for candidates, co-organized the technical assessments, run background checks, and handle candidate outreach.',
          'Lead daily engineering standups, driving task prioritization and cross-functional communication using a Kanban workflow.',
          'Onboard and mentor incoming senior engineers, establishing technical context and development workflows.',
        ],
      },
    ],
  },
  {
    company: 'Themis',
    roles: [{ title: 'Engineering Team Lead', start: [2024, 1], end: [2024, 12] }],
    categories: [
      {
        name: 'Engineering',
        bullets: [
          'Led a ground-up rewrite of the frontend, replacing a monolithic, inconsistent codebase with a component-based React and Tailwind architecture.',
          "Established the company's design system and component library, bringing visual consistency and reusable patterns across the product.",
          'Improved site performance by more than 50% through architectural changes and frontend best practices.',
        ],
      },
      {
        name: 'Leadership & Operations',
        bullets: [
          'Led daily engineering standups and owned sprint-level task prioritization and team coordination.',
          'Primary liaison between engineering, product, and design, keeping priorities and delivery aligned.',
          'Held biweekly one-on-ones with direct reports, supporting individual growth and team health.',
        ],
      },
    ],
  },
  {
    company: 'Stage',
    location: 'Hayden, Idaho · Remote',
    roles: [{ title: 'Founding Engineer', start: [2022, 1], end: [2023, 12] }],
    categories: [
      {
        name: 'Engineering',
        bullets: [
          'Founding engineer on a SaaS platform letting business users control and monetize features within their own sites; shipped to two paying customers before the company wound down.',
          'One of five engineers working directly alongside two C-level founders, with high individual ownership across the product.',
          'Owned the full stack from day one: React frontend, Kotlin backend, and the database layer including schema design and migrations.',
          'Participated in core architectural decisions and collaborated closely with the designer on an experience built for non-technical business users.',
        ],
      },
    ],
  },
  {
    company: 'SoFi',
    roles: [
      { title: 'Senior Software Engineer', start: [2019, 10], end: [2022, 1] },
      { title: 'Software Engineer', start: [2015, 5], end: [2019, 10] },
    ],
    categories: [
      {
        name: 'Engineering',
        bullets: [
          'Built internal tooling and developer-productivity software for other engineering teams, across Node.js, React, Redux, Postgres, Kubernetes, and ActiveMQ.',
          'Worked with the Communications team on a Live Chat solution and Kafka integration, across Java, Spring Boot, PHP, Apache, and MySQL.',
        ],
      },
      {
        name: 'Training & Mentorship',
        bullets: [
          'Technical Trainer (Sep 2017 – Oct 2018) alongside engineering: created and delivered onboarding curriculum for new engineering hires, including a full-stack second-week program.',
          'Mentored junior engineers through technical guidance and code reviews, and interviewed engineering candidates.',
          'Organized company-wide knowledge sharing sessions and sourced secure programming training for the engineering org.',
        ],
      },
    ],
  },
]

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function today() {
  const d = new Date()
  return [d.getFullYear(), d.getMonth() + 1]
}

const formatMonth = ([y, m]) => `${MONTHS[m - 1]} ${y}`

// Counts both the first and last month, the way LinkedIn does (Jan–Dec is 1 yr).
function formatDuration(start, end) {
  const [ey, em] = end ?? today()
  const months = (ey - start[0]) * 12 + (em - start[1]) + 1
  const y = Math.floor(months / 12)
  const m = months % 12
  const parts = []
  if (y) parts.push(`${y} yr${y > 1 ? 's' : ''}`)
  if (m) parts.push(`${m} mo${m > 1 ? 's' : ''}`)
  return parts.join(' ')
}

const formatRange = (start, end) => `${formatMonth(start)} – ${end ? formatMonth(end) : 'Present'}`

function JobCard({ job }) {
  const theme = useTheme()
  const text = theme.palette.text.primary
  const accent = theme.palette.primary.main
  const muted = alpha(text, 0.6)
  const border = alpha(text, 0.1)

  const current = job.roles[0]
  const first = job.roles[job.roles.length - 1]
  const promoted = job.roles.length > 1

  return (
    <Box
      sx={{
        flex: 1,
        minWidth: 0,
        p: { xs: 2.5, md: 4 },
        border: `1px solid ${border}`,
        borderRadius: 4,
        background: theme.palette.background.paper,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, mb: 3 }}>
        <Box>
          <Typography component="h3" sx={{ fontSize: '1.15rem', fontWeight: 600, color: text }}>
            {promoted ? job.company : current.title}
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', mt: 0.25 }}>
            <Box component="span" sx={{ color: accent }}>
              {promoted ? 'Promoted to Senior' : job.company}
            </Box>
            {job.location && (
              <Box component="span" sx={{ color: muted }}>
                {' '}· {job.location}
              </Box>
            )}
          </Typography>
        </Box>
        <Typography sx={{ fontFamily: FONT_MONO, fontSize: '0.75rem', color: muted, pt: 0.5 }}>
          {formatRange(first.start, current.end)} · {formatDuration(first.start, current.end)}
        </Typography>
      </Box>

      {promoted && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0.5,
            mb: 3,
            pl: 1.5,
            borderLeft: `2px solid ${alpha(accent, 0.4)}`,
          }}
        >
          {job.roles.map((r) => (
            <Typography key={r.title} sx={{ fontSize: '0.85rem', color: muted }}>
              <Box component="span" sx={{ color: text }}>
                {r.title}
              </Box>
              <Box component="span" sx={{ fontFamily: FONT_MONO, fontSize: '0.75rem', ml: 1 }}>
                {formatRange(r.start, r.end)} · {formatDuration(r.start, r.end)}
              </Box>
            </Typography>
          ))}
        </Box>
      )}

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: { xs: 3, md: 4 } }}>
        {job.categories.map((cat) => (
          <Box key={cat.name}>
            <Typography
              sx={{
                fontFamily: FONT_MONO,
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: muted,
                mb: 1.5,
              }}
            >
              {cat.name}
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {cat.bullets.map((b) => (
                <Box
                  component="li"
                  key={b}
                  sx={{
                    position: 'relative',
                    pl: 1.75,
                    fontSize: '0.875rem',
                    lineHeight: 1.65,
                    color: alpha(text, 0.75),
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: '0.6em',
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: accent,
                    },
                  }}
                >
                  {b}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default function Experience() {
  const theme = useTheme()
  const accent = theme.palette.primary.main
  const line = alpha(theme.palette.text.primary, 0.1)

  return (
    <Box component="section" id="experience-box" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading eyebrow="Leadership & experience" title="A decade of shipping, from IC to lead" />

        <Box sx={{ position: 'relative', pl: { xs: 0, md: 4 } }}>
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '1px',
              background: line,
            }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {jobs.map((job) => (
              <Box key={job.company} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    position: 'absolute',
                    left: -32 - 5,
                    top: 28,
                    width: 11,
                    height: 11,
                    borderRadius: '50%',
                    background: accent,
                    boxShadow: `0 0 0 4px ${alpha(accent, 0.15)}`,
                  }}
                />
                <JobCard job={job} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
