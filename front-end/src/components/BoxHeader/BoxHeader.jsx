import { Typography, Button } from "@material-ui/core";
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import {useStyles} from './BoxHeader.style'
import { Link } from "react-router-dom";

export const BoxHeader = (props) => {
    const style = useStyles()
    return(
        <div className={style.root}>
            <Typography className={style.header}>
                {props.title}
            </Typography>
            {
            props.button?
            <Button component={Link} to={props.new}><LibraryAddIcon /></Button>
            :<div></div>
            }   
        </div>
    );
}