import React from 'react';
import withButtonClick from '../hoc/withButtonClick';
import Button from '@material-ui/core/Button';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    }
  }),
);

interface AlertButtonProps {
    handleClick?: ()=>void,
    text: string
}

const AlertButton = (props: AlertButtonProps) => {
    console.log('new', props)
    const classes = useStyles();
    return (
        <Button 
            variant="contained"  
            color="primary" 
            className={classes.margin}
            onClick={props.handleClick}
            disableElevation
        >
            {props.text}
        </Button>
    ) 
}

export default withButtonClick(AlertButton) 