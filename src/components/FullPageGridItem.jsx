import { Grid } from '@mui/material'

import PropTypes from 'prop-types'

function FullPageGridItem({ height, sx, children }) {
  return (
    <Grid
      item
      xs={12}
      sx={{
        height: height || '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
    >
      {children}
    </Grid>
  )
}

FullPageGridItem.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sx: PropTypes.object,
  children: PropTypes.node,
}

FullPageGridItem.defaultProps = {
  height: '100%',
  sx: {},
  children: null,
}

export default FullPageGridItem
