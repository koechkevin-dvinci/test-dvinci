export const styles = theme => ({
  container: {
  },

  cssLabel: {
    color : `${theme.palette.grey['600']} !important`
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.grey['600']} !important`,
    }
  },

  cssFocused: {
    '>$cssLabel': {
      color : theme.palette.grey['600']
    },
  },

  notchedOutline: {
    borderColor: `${theme.palette.grey['600']} !important`
  },

});
