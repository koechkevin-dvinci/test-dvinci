import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(145, 158, 171, 0.24)',
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },

  cssFocused: {
    borderColor: `${theme.palette.primary.main} !important`,
    '>$cssLabel': {
      // color : theme.palette.grey['600']
    },
  },

  icon: {
    color: theme.palette.grey['600'],
  },

  notchedOutline: {
    borderColor: `${theme.palette.grey['600']} !important`,
    '>.Mui-focused': {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  cssLabel: {
    // color : `${theme.palette.grey['600']} !important`
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
