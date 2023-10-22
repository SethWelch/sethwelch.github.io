import { Box, Link, Typography } from '@mui/material'
import WordChip from './WordChip'

import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'

function ProjectCard({ title, body, chips, links, image }) {
  const theme = useTheme()

  return (
    <Box
      sx={{
        height: 430,
        width: 380,
        border: '1px solid grey',
        borderRadius: '8px',
        padding: 1,
        position: 'relative',
        background: theme.palette.mode === 'light' ? 'lavender' : '#2f406a',
        '@media (max-height: 480px)': {
          scale: '80%',
        },
      }}
    >
      {image}
      <Box sx={{ padding: 1 }}>
        <Typography sx={{ fontWeight: '600', fontSize: 20 }}>
          {title}
        </Typography>
        <Typography sx={{ mt: 0.5, fontSize: 16, height: 48 }}>
          {body}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            gap: 2,
            mt: 3,
          }}
        >
          {links.map((l, i) => {
            return (
              <Link href={l} target="_blank" key={`Link-${i}`}>
                {i === 0 ? 'Website' : 'Github'}
              </Link>
            )
          })}
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            gap: 1,
            bottom: 16,
            position: 'absolute',
          }}
        >
          {chips.map((c) => (
            <WordChip key={`WordChip-${c}`}>{c}</WordChip>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  chips: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.node,
}

ProjectCard.defaultProps = {
  title: '',
  body: '',
  chips: [],
  links: [],
  image: null,
}

export default ProjectCard
