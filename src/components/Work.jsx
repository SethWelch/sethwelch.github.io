import { useState } from 'react'
import { Box, Button, ButtonBase, Container, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import ViewInArOutlined from '@mui/icons-material/ViewInArOutlined'
import AssignmentOutlined from '@mui/icons-material/AssignmentOutlined'
import QrCodeScannerOutlined from '@mui/icons-material/QrCodeScannerOutlined'
import EditCalendarOutlined from '@mui/icons-material/EditCalendarOutlined'
import StorefrontOutlined from '@mui/icons-material/StorefrontOutlined'
import AutoAwesomeOutlined from '@mui/icons-material/AutoAwesomeOutlined'
import NorthEast from '@mui/icons-material/NorthEast'

import { FONT_MONO } from '../themes.js'
import SectionHeading from './SectionHeading.jsx'
import InventoryImage from '../assets/images/vesta-inventory.webp'
import PosImage from '../assets/images/vesta-pos.webp'
import CalendarImage from '../assets/images/vesta-calendar.webp'
import CatalogImage from '../assets/images/vesta-catalog.webp'
import AssistantImage from '../assets/images/vesta-assistant.webp'

const VESTA_URL = 'https://vestashops.com'

const features = [
  {
    icon: AssignmentOutlined,
    title: 'Multi-location stocktakes',
    body: 'Stocktakes (taking inventory) at each location with reporting, plus inter-store inventory transfers.',
    preview: {
      label: 'vesta / inventory',
      image: InventoryImage,
      alt: 'The Vesta inventory list: items with on-hand quantities, the locations holding them, stock status and price, with Take inventory and Transfers controls',
    },
  },
  {
    icon: QrCodeScannerOutlined,
    title: 'Real-time POS workflows',
    body: 'Scan items in by camera or barcode scanner, then check out with card or cash.',
    preview: {
      label: 'vesta / point of sale',
      image: PosImage,
      alt: 'Vesta point of sale with three items in the basket, per-item stock counts, totals and Cash and Card payment buttons',
    },
  },
  {
    icon: EditCalendarOutlined,
    title: 'Shift & delivery scheduling',
    body: 'An internal calendar system for tracking shipments and schedules.',
    preview: {
      label: 'vesta / calendar',
      image: CalendarImage,
      alt: 'A week on the Vesta calendar with stocktakes, shifts and a delivery pickup across two locations',
    },
  },
  {
    icon: StorefrontOutlined,
    title: 'Online catalog',
    body: 'A public catalog where customers can see what is in stock, order online, and pick up in store.',
    preview: {
      label: 'vesta / catalog',
      image: CatalogImage,
      alt: 'A shop’s public catalog: product cards with photos, category, stock and price',
    },
  },
  {
    icon: AutoAwesomeOutlined,
    title: 'Built-in assistant',
    body: 'Ask questions about stock and sales in plain English and get answers from the shop’s own data.',
    preview: {
      label: 'vesta / assistant',
      image: AssistantImage,
      alt: 'The Vesta assistant answering with a chart of the five most valuable games in stock',
    },
  },
]

const otherWork = [
  {
    kind: 'Co-creator · Game',
    title: 'Letters on Fire',
    url: 'https://lettersonfire.com',
    domain: 'lettersonfire.com',
    body: 'A daily, newspaper-inspired word puzzle with Scrabble-style scoring multipliers, a custom phoenix mechanic, and a daily dictionary solver.',
    tags: ['React', 'TypeScript', 'Game design'],
  },
  {
    kind: 'Client engagement',
    title: 'Strategic Healthcare Solutions',
    url: 'https://strategichealthcaresolutions.org',
    domain: 'strategichealthcaresolutions.org',
    body: 'Delivered a compliant, modern web presence for an executive healthcare compliance consultancy.',
    tags: ['Web', 'Compliance', 'Client delivery'],
  },
]

function useTokens() {
  const theme = useTheme()
  const text = theme.palette.text.primary
  const accent = theme.palette.primary.main
  return {
    theme,
    text,
    accent,
    muted: alpha(text, 0.6),
    faint: alpha(text, 0.45),
    border: alpha(text, 0.1),
    surface: alpha(text, 0.025),
  }
}

function Tag({ children }) {
  const { border, muted } = useTokens()
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        px: 1,
        py: 0.25,
        fontSize: '0.75rem',
        color: muted,
        border: `1px solid ${border}`,
        borderRadius: 1.5,
      }}
    >
      {children}
    </Box>
  )
}

function FlagshipCard() {
  const { theme, text, accent, muted, faint, border, surface } = useTokens()
  const [active, setActive] = useState(1)
  const preview = features[active].preview

  return (
    <Box
      sx={{
        border: `1px solid ${alpha(accent, 0.25)}`,
        borderRadius: 4,
        overflow: 'hidden',
        background: theme.palette.background.paper,
        boxShadow: `0 30px 80px -30px ${alpha(accent, 0.25)}`,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: { xs: 'flex-start', sm: 'center' },
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          p: { xs: 2.5, md: 4 },
          borderBottom: `1px solid ${border}`,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, minWidth: 0 }}>
          <Box
            sx={{
              width: 48,
              height: 48,
              flexShrink: 0,
              display: 'grid',
              placeItems: 'center',
              borderRadius: 2.5,
              border: `1px solid ${alpha(accent, 0.3)}`,
              background: alpha(accent, 0.08),
              color: accent,
            }}
          >
            <ViewInArOutlined />
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Box
              sx={{
                display: 'inline-block',
                px: 1.25,
                py: 0.25,
                mb: 0.5,
                borderRadius: 999,
                border: `1px solid ${alpha(accent, 0.35)}`,
                background: alpha(accent, 0.08),
                fontFamily: FONT_MONO,
                fontSize: '0.7rem',
                color: accent,
              }}
            >
              Founder &amp; Lead Engineer · Vesta Shops LLC
            </Box>
            <Typography sx={{ fontSize: '0.9rem', color: muted }}>vestashops.com</Typography>
          </Box>
        </Box>
        <Button
          href={VESTA_URL}
          target="_blank"
          rel="noopener"
          variant="contained"
          disableElevation
          endIcon={<NorthEast sx={{ fontSize: '0.9rem !important' }} />}
          sx={{
            textTransform: 'none',
            fontWeight: 500,
            borderRadius: 2,
            px: 2,
            background: accent,
            color: theme.palette.getContrastText(accent),
            '&:hover': { background: alpha(accent, 0.85) },
          }}
        >
          Visit live site
        </Button>
      </Box>

      {/* Features + preview */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '4fr 8fr' },
        }}
      >
        <Box
          sx={{
            p: { xs: 2, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            borderRight: { md: `1px solid ${border}` },
            borderBottom: { xs: `1px solid ${border}`, md: 'none' },
          }}
        >
          {features.map((f, i) => {
            const Icon = f.icon
            const selected = i === active
            return (
              <ButtonBase
                key={f.title}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-pressed={selected}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  gap: 1.75,
                  px: 2,
                  py: 1.5,
                  borderRadius: 2.5,
                  border: `1px solid ${selected ? alpha(accent, 0.45) : 'transparent'}`,
                  background: selected ? alpha(accent, 0.06) : 'transparent',
                  transition: 'background 150ms, border-color 150ms',
                }}
              >
                <Icon sx={{ fontSize: 20, mt: 0.25, color: selected ? accent : muted }} />
                <Box>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: text, mb: 0.5 }}>{f.title}</Typography>
                  <Typography sx={{ fontSize: '0.875rem', lineHeight: 1.55, color: muted }}>{f.body}</Typography>
                </Box>
              </ButtonBase>
            )
          })}
        </Box>

        <Box sx={{ p: { xs: 2, md: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box sx={{ border: `1px solid ${border}`, borderRadius: 3, background: surface, overflow: 'hidden' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                px: 2,
                py: 1.5,
                borderBottom: `1px solid ${border}`,
              }}
            >
              <Box sx={{ display: 'flex', gap: 0.75 }}>
                {[0, 1, 2].map((d) => (
                  <Box key={d} sx={{ width: 10, height: 10, borderRadius: '50%', background: alpha(text, 0.2) }} />
                ))}
              </Box>
              <Typography sx={{ fontFamily: FONT_MONO, fontSize: '0.75rem', color: muted }}>{preview.label}</Typography>
            </Box>
            <Box sx={{ position: 'relative', aspectRatio: '16 / 10', background: '#f6f5f0' }}>
              {features.map((f, i) => (
                <Box
                  key={f.title}
                  component="img"
                  src={f.preview.image}
                  alt={i === active ? f.preview.alt : ''}
                  aria-hidden={i !== active}
                  loading="lazy"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'top center',
                    opacity: i === active ? 1 : 0,
                    transition: 'opacity 200ms',
                  }}
                />
              ))}
            </Box>
          </Box>
          <Typography sx={{ mt: 1.5, fontSize: '0.75rem', color: faint }}>Product screenshot · demo data</Typography>
        </Box>
      </Box>
    </Box>
  )
}

function WorkCard({ kind, title, url, domain, body, tags }) {
  const { theme, text, accent, muted, border } = useTokens()
  return (
    <Box
      component="a"
      href={url}
      target="_blank"
      rel="noopener"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: { xs: 2.5, md: 3.5 },
        border: `1px solid ${border}`,
        borderRadius: 4,
        background: theme.palette.background.paper,
        textDecoration: 'none',
        transition: 'border-color 150ms, transform 150ms',
        '&:hover': { borderColor: alpha(accent, 0.4), transform: 'translateY(-2px)' },
        '&:hover .work-arrow': { color: accent },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography sx={{ fontFamily: FONT_MONO, fontSize: '0.75rem', color: muted }}>{kind}</Typography>
        <NorthEast className="work-arrow" sx={{ fontSize: 18, color: muted, transition: 'color 150ms' }} />
      </Box>
      <Typography sx={{ fontSize: '1.25rem', fontWeight: 600, color: text }}>{title}</Typography>
      <Typography sx={{ fontFamily: FONT_MONO, fontSize: '0.75rem', color: accent, mt: 0.5, mb: 2 }}>{domain}</Typography>
      <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.65, color: muted, mb: 3, flex: 1 }}>{body}</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </Box>
    </Box>
  )
}

export default function Work() {
  return (
    <Box component="section" id="work" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Flagship"
          title="Vesta Shops"
          subtitle="Commercial multi-location inventory & POS SaaS platform."
        />
        <FlagshipCard />

        <Box sx={{ mt: { xs: 10, md: 14 } }}>
          <SectionHeading eyebrow="Selected work" title="More things I've built" />
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            {otherWork.map((w) => (
              <WorkCard key={w.title} {...w} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
