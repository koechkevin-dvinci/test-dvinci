import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    active: {
      padding: 16,
      background: 'rgba(86, 100, 210, 0.08)',
      borderRadius: 32,
    },
    inActive: {
      padding: 16,
      background: "transparent",
      borderRadius: 32,
    },
    iconButton: {
      pointerEvents: 'none',
      height: 40,
      width: 40,
      border: `1px solid`,
      color: theme.palette.background.paper,
    }
  }
})
