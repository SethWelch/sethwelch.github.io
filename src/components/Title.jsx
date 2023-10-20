import { Box, Typography } from '@mui/material'

import PropTypes from 'prop-types'

function Title({ children }) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 40,
          fontWeight: 500,
          fontFamily: 'permanent marker',
          color: 'white',
        }}
      >
        {children}
      </Typography>
      <Box sx={{ width: '100%', height: 5, background: 'blueviolet' }} />
    </Box>
  )
}

Title.propTypes = {
  children: PropTypes.string,
}

Title.defaultProps = {
  children: '',
}

export default Title
