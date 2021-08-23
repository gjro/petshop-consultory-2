import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: "flex",
    width: "70.6vw",
    height: "80.85vh",
    flexDirection:"column",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "3px 3px 10px 0px rgba(0, 0, 0, 0.25)",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    margin: "46px 0",
    alignSelf:"center",
  },
  form: {
    margin: "0 10px",
  },
  divButton: {
    display: "flex",
    justifyContent:"space-between",
    margin: "25vh 5vw",
  },
  button: {
    width: "15vw",
  }
}));
