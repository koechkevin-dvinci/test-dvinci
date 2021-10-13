export const styles = (theme) => ({
  root: {
    maxWidth: 362,
    width: '100%',
    minWidth: 320
  },
  pageHeader: {
    padding: 12
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    fontSize: 14
  },
  disabled: {
    maxWidth: 362,
    width: '100%',
    backgroundColor: 'transparent',
    minWidth: 320
  },
  disabledAvatar: {
    backgroundColor: '#202934',
    color: 'rgba(145, 158, 171, 0.86)',
    width: theme.spacing(4),
    height: theme.spacing(4),
    fontSize: 14
  },
  head: {
    textTransform: 'capitalize',
    marginRight: 16,
    fontSize: 16,
  },
  icon: {
    color: 'grey',
  },
});
