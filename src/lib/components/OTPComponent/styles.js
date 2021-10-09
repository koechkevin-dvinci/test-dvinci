import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => {
  return {
    inputStyle: {
      width: '56px !important',
      height: '56px !important',
      fontSize: 16,
      outline: 'none',
      backgroundColor: 'transparent',
      color: theme.palette.text.primary,
      border: `1px solid rgba(145, 158, 171, 0.24)`,
      borderRadius: 16
    },
    focusStyle: {
      borderColor: theme.palette.primary.main
    },
    errorStyle: {
      borderColor: theme.palette.secondary.main
    },
    disabledStyle: {
      color: theme.palette.text.secondary
    },
    containerStyle : {

    },
    spaceStyle: {
      minWidth: 16,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
});
export default useStyles;
