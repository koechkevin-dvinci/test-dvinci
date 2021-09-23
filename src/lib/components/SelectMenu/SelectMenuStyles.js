import makeStyles from '@material-ui/core/styles/makeStyles';

export const styles = (theme) => ({
  root: {
    cursor: 'pointer',
    borderRadius: 16,
    border: '1px solid transparent',
    paddingLeft: 16,
    paddingRight: 16,
    '&:hover': {
      border: `1px solid rgba(145, 158, 171, 0.86)`,
      // color: theme.palette.primary.main
    },
  },
  open: {
    border: `1px solid ${theme.palette.primary.main}`,
  },
  icon: {
    color: 'rgba(145, 158, 171, 0.86)',
    fontSize: 16,
    '&:hover': {
      // color: theme.palette.primary.main
    },
    '&:disabled': {
      color: 'rgba(145, 158, 171, 0.86)',
    }
  },
  menu: {
    width: '100%'
  },

})
