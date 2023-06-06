import { useEffect, useMemo, useState } from "react";

import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { Avatar, Divider, Fab, Grow } from "@mui/material";

import { Navbar, ContactCard, SearchBar, ContactLoading, NoContactCard, AddContact } from "@/utils/componentsLoader";
import useFetch from "@/hooks/useFetch";
import { useContactContext } from "@/hooks/context/useContactContext";
import { useDisplayContext } from "@/hooks/context/useDisplayContext";
import useContact from "@/hooks/useContact";
import useAddContact from "../hooks/contacts/useAddContact";

const Emergency = () => {

    const url = import.meta.env.VITE_APP_DUMMY_URL + '/contacts';
    const [selectedContact, setSelectedContact] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const { contacts, dispatch } = useContactContext();
    const { isPending, message, setLoading, setMessage } = useDisplayContext();

    const { getContacts } = useContact({ setSelectedContact });
    const { handleAdd, add } = useAddContact({ 
        url, 
        data: selectedContact, 
        dispatch,
        type: 'added_contact',
        setLoading,
        setMessage
     });


    useFetch({ url, dispatch, type: 'get_contacts', setLoading, setMessage });

    // Add Contact
    const handleDialogOpen = () => {
        setIsOpen(true);
    }

    const handleDialogClose = () => {
        setIsOpen(false);
    }

    const handleSelectContact = (event) => {
        getContacts();
    }

    // Searching
    const [searchText, setSearchText] = useState('')
    const [filteredContacts, setFilteredContacts] = useState([]);
    useEffect(() => setFilteredContacts(contacts), [contacts])

    const filter = (value) => {
        const filtered = contacts?.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase()) || item.number.toLowerCase().includes(value.toLowerCase())
        );

        filtered[0] ? setFilteredContacts(filtered) : setFilteredContacts([]);
    }

    return (
        <>
            <Navbar>
                <Avatar>WG</Avatar>
                <SearchBar
                    placeholder={'Type name/number..'}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    filter={filter}
                />
            </Navbar>
            <h1 className="font-bold text-2xl text-primary mb-6">Emergency</h1>
            <div className="contacts h-[70vh] overflow-y-auto">
                <div className="one-tap-call">
                    <h2 className="font-bold mb-2">One-tap Call</h2>
                    <div className="cards grid grid-cols-1 gap-2">
                        <div className="one-tap-call">
                            {/* {!filteredContacts.length && (isPending ? <ContactLoading /> : <NoContactCard />)} */}
                            {filteredContacts[0] && filteredContacts?.map((contact, id) => contact.isPinned && <ContactCard key={contact._id} contact={contact} />)}
                        </div>

                    </div>
                </div>
                <Divider />
                <div className="contacts mt-3">
                    <h2 className="font-bold mb-2">Contacts</h2>
                    {!filteredContacts.length && (isPending ? <ContactLoading /> : <NoContactCard />)}
                    {filteredContacts[0] && filteredContacts?.map((contact, id) => !contact.isPinned && <ContactCard key={contact._id} contact={contact} />)}
                </div>
            </div>
            <Grow in={true}>
                <div className="button-wrapper fixed right-0 bottom-16 m-6 z-10">
                    <Fab color="primary" aria-label="person-add" onClick={handleDialogOpen}>
                        <PersonAddIcon />
                    </Fab>
                </div>
            </Grow>
            <AddContact
                isOpen={isOpen}
                handleAdd={handleAdd}
                handleSelectContact={handleSelectContact}
                handleDialogOpen={handleDialogOpen}
                handleDialogClose={handleDialogClose}
                selectedContact={selectedContact}
            />
            {/* <Dialog
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
                        <button className="p-2 rounded-lg bg-accent text-white" onClick={handleDialogClose}>
                        Add  <AddIcon/> 
                        </button>
                    </ButtonBase>
                </DialogActions>
            </Dialog> */}
        </>
    );
}

export default Emergency;