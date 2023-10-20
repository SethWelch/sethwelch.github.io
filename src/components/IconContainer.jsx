import { Box, Grid, Typography } from '@mui/material'

import PropTypes from 'prop-types'

function IconContainer({ text, children }) {
  return (
    <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ textAlign: 'center' }}>
        {children}
        <Typography sx={{ textAlign: 'center' }}>{text}</Typography>
      </Box>
    </Grid>
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
