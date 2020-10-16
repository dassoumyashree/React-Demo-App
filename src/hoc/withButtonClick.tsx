import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

interface WithButtonClickProps {
    text: string;
}

const withButtonClick = <P extends object>(
    Component: React.ComponentType<P>
    ): React.FC<P & WithButtonClickProps> => {
    const NewComponent = ({ text, ...props}: WithButtonClickProps) => {
 //           
        const [open, setOpen] = React.useState(false);
//
function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
        const handleClick = () => {
            // alert (`clicked! ${text}` )
            setOpen(true);
        }
//
        const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
            if (reason === 'clickaway') {
              return;
            }
        
            setOpen(false);
          };

        return (
            <div>
        <Component text={text} handleClick={handleClick} {...props as P} />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {text} has been clicked!
        </Alert>
      </Snackbar>
      </div>
        )
    }

    return NewComponent
}

export default withButtonClick