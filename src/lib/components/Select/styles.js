import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      // borderColor: `${theme.palette.grey['600']} !important`,
    }
  },

  cssFocused: {
    // borderColor: `${theme.palette.grey['600']} !important`,
    '>$cssLabel': {
      // color : theme.palette.grey['600']
    },
  },

  icon: {
    color: theme.palette.grey['600'],
  },

  notchedOutline: {
    // borderColor: `${theme.palette.grey['600']} !important`
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
