import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  disabled: {
    borderColor: `rgba(145, 158, 171, 0.24) !important`,
    color: `rgba(255, 255, 255, 0.3) !important`,
    background: `rgba(255, 255, 255, 0.12)`,
  },
}));

export default useStyles;
