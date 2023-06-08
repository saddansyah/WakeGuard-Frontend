import ButtonBase from '@mui/material/ButtonBase';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';

import AddIcon from '@mui/icons-material/Add';


const AddContact = ({ isOpen, handleDialogClose, handleDialogOpen, handleAdd, selectedContact, setSelectedContact, handleSelectContact, isPending }) => {

    const handleRemoveAll = () => {
        setSelectedContact([])
    }


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
                <button className="card py-2 bg-primary text-white font-bold my-2 w-full" onClick={handleSelectContact}>Select Contacts</button>
                <button className="card py-2 bg-gray-200 text-gray-600 font-bold mb-4 w-full" onClick={handleRemoveAll}>Remove All</button>
                <div className="contacts mt-2 flex flex-col gap-1 text-black overflow-x-hidden overflow-y-auto h-fit max-h-64">
                    {selectedContact && selectedContact?.map((contact, id) =>
                        <>
                            <div key={id} ontouch className="card flex justify-between py-1 bg-white">
                                <div className="content-left">
                                    <h4 className='font-bold text-primary'>{contact.name[0]}</h4>
                                    <p>{contact.tel[0]}</p>
                                </div>
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
                        {isPending ? <CircularProgress size={'1em'} color='inherit' /> : <>Add <AddIcon /></>}
                    </button>
                </ButtonBase>
            </DialogActions>
        </Dialog>
    </>);
}

export default AddContact;