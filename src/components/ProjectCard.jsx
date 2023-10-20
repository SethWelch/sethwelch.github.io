import { Box, Typography } from '@mui/material'
import WordChip from './WordChip'

import PropTypes from 'prop-types'

function ProjectCard({ title, body, chips, image }) {
  return (
    <Box
      sx={{
        height: 400,
        width: 400,
        border: '1px solid white',
        borderRadius: '8px',
        padding: 2,
        position: 'relative',
      }}
    >
      {image}
      <Typography sx={{ fontWeight: '600', fontSize: 18 }}>{title}</Typography>
      <Typography>{body}</Typography>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          gap: 1,
          bottom: 16,
          position: 'absolute',
        }}
      >
        {chips.map((c) => {
          return <WordChip key={`WordChip-${c}`}>{c}</WordChip>
        })}
      </Box>
    </Box>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  chips: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.node,
}

ProjectCard.defaultProps = {
  title: '',
  body: '',
  chips: [],
  image: null,
}

export default ProjectCard
