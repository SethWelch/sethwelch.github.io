import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

function IconContainer({ text, children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width: 90, mb: 2 }}>
      {children}
      <Typography sx={{ textAlign: 'center', fontSize: '0.8rem' }}>{text}</Typography>
    </Box>
  )
}

IconContainer.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
}

IconContainer.defaultProps = {
  text: '',
  children: null,
}

export default IconContainer
