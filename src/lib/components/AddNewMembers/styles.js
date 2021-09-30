const styles = (theme) => ({
  listMembers: {
    marginTop: 16,
  },
  body: {
    padding: `16px 0`,
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    minWidth: 0,
    marginRight: 16,
    color: '#fff',
    fontSize: 14,
    fontWeight: 400,
  },
  disabledAvatar: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.grey['600']}`
  },
  teamManagerAvatar: {
    backgroundColor: theme.palette.primary.main
  },
  icon: {
    color: 'rgba(145, 158, 171, 0.86)',
    fontSize: 32,
    height: 32,
    width: 32,
    // padding: 0,
    '&:hover': {
      color: theme.palette.primary.main
    },
    '&:disabled': {
      color: 'rgba(145, 158, 171, 0.86)',
    }
  },
  teamManager: {
    fontSize: 32,
    height: 32,
    width: 32,
    // padding: 0,
  },
  listItem: {
    padding: 0,
    marginTop: 16,
  },
});

export default  styles;
