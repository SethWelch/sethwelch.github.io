import { useTheme } from '@emotion/react'
import { Box } from '@mui/material'

import PropTypes from 'prop-types'

function WordChip({ children }) {
  const theme = useTheme()

  return (
    <Box
      sx={{
        background:
          theme.palette.mode === 'light' ? 'darkslateblue' : 'darkcyan',
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
