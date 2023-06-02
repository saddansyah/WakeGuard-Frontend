import ButtonBase from '@mui/material/ButtonBase';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import AddIcon from '@mui/icons-material/Add';


const AddContact = ({isOpen, handleDialogClose, handleDialogOpen, handleAdd}) => {
    return (<>
        <Dialog
            open={isOpen}
            onClose={handleDialogClose}
        >
            <DialogTitle id="alert-dialog-title">
                Add Contact
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    You can add contact from your Google account contacts
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <ButtonBase component="div">
                    <button className="p-2 text-primary" onClick={handleDialogClose}>
                        Close
                    </button>
                </ButtonBase>
                <ButtonBase component="div">
                    <button className="p-2 rounded-lg bg-accent text-white" onClick={handleAdd}>
                        Add  <AddIcon />
                    </button>
                </ButtonBase>
            </DialogActions>
        </Dialog>
    </>);
}

export default AddContact;