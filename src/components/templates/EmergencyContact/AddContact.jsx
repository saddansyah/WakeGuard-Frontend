import ButtonBase from '@mui/material/ButtonBase';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import AddIcon from '@mui/icons-material/Add';


const AddContact = ({ isOpen, handleDialogClose, handleDialogOpen, handleAdd, selectedContact, handleSelectContact }) => {
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
                <div className="contacts mt-2 flex flex-col gap-1 text-black overflow-x-hidden overflow-y-auto h-fit max-h-64">
                    <button className="card py-2 bg-primary text-white font-bold" onClick={handleSelectContact}>Select Contacts</button>
                    {selectedContact && selectedContact?.map(contact =>
                        <>
                            <div className="card py-1 bg-white">
                                <h4 className='font-bold text-primary'>{contact.name}</h4>
                                <p>{contact.tel[0]}</p>
                            </div>
                        </>
                    )}
                </div>
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