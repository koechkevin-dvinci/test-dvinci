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
  icon: {
    color: 'rgba(145, 158, 171, 0.86)',
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  listItem: {
    padding: 0,
    marginTop: 16,
  },
});

export default  styles;
