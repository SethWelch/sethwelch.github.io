import { Box } from '@mui/material'

import PropTypes from 'prop-types'

function WordChip({ children }) {
  return (
    <Box
      sx={{
        background: 'darkslateblue',
        color: 'white',
        width: 'fit-content',
        padding: '2px 8px',
        borderRadius: 2,
      }}
    >
      {children}
    </Box>
  )
}

WordChip.propTypes = {
  children: PropTypes.string,
}

WordChip.defaultProps = {
  children: '',
}

export default WordChip
