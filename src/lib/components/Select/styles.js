import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(145, 158, 171, 0.24)',
    },
  },
  clearIndicator: {
    display: 'none'
  },
  popupIndicator: {
    color: 'rgba(145, 158, 171, 0.86)'
  },

  popper: {
    top: '8px !important'
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },

  cssFocused: {
    borderColor: `${theme.palette.primary.main} !important`,
    '>$cssLabel': {},
  },

  notchedOutline: {
    borderColor: `${theme.palette.grey['600']} !important`,
    '>.Mui-focused': {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
