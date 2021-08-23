import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
      display: "flex",
      flexDirection:"column",
      height: "93vh",

  },
  form: {
      display: "flex",
      flexDirection: "column",
      margin: "auto auto",
      boxShadow: "3px 3px 10px 0px #00000040",
      borderRadius: "10px",
      height: "60vh",
  }, 
  button: {
    width: "15vw",
    margin: "5vh auto",
    padding: "1vw",
  },
  title: {
    margin: "2vh auto",
    fontWeight: "600",
    fontSize: "20px"
  }
}));
