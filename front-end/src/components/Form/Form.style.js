import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        margin: "0 20vw",
        width: "25vw",
        alignSelf: "center"
    },
    button: {
        width: "15vw",
        margin: "5vh auto",
        padding: "1vw",
    }
}));