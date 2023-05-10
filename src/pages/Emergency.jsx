import Menu from "@mui/icons-material/Menu";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Avatar, Divider, Fab, Grow } from "@mui/material";

import { Navbar, ContactCard, SearchBar, ContactLoading, NoContactCard } from "@/utils/componentsLoader";
import useFetch from "@/hooks/useFetch";
import { useContactContext } from "@/hooks/context/useContactContext";
import { useDisplayContext } from "@/hooks/context/useDisplayContext";

const Emergency = () => {

    const url = import.meta.env.VITE_APP_DUMMY_URL + '/contacts';
    const { contacts, dispatch } = useContactContext();
    const { isPending, message, setLoading, setMessage } = useDisplayContext();

    useFetch({ url, dispatch, type: 'get_contacts', setLoading, setMessage });

    return (
        <>
            <Navbar>
                <Avatar>WG</Avatar>
                {/* <Menu /> */}
                <SearchBar placeholder={'Search contact..'} />
            </Navbar>
            <h1 className="font-bold text-2xl text-primary mb-6">Emergency</h1>
            <div className="contacts h-[70vh] overflow-y-auto">
                <div className="one-tap-call">
                    <h2 className="font-bold mb-2">One-tap Call</h2>
                    <div className="cards grid grid-cols-1 gap-2">
                        <div className="one-tap-call">
                            {!contacts.length && (isPending ? <ContactLoading /> : <NoContactCard/>)}
                            {contacts[0] && contacts?.map(contact => contact.isPinned && <ContactCard key={contact.number} contact={contact} />)}
                        </div>

                    </div>
                </div>
                <Divider />
                <div className="contacts mt-3">
                    <h2 className="font-bold mb-2">Contacts</h2>
                    {!contacts.length && (isPending ? <ContactLoading /> : <NoContactCard/>)}
                    {contacts[0] && contacts?.map(contact => !contact.isPinned && <ContactCard key={contact.number} contact={contact} />)}
                </div>
            </div>
            <Grow in={true}>
                <div className="button-add absolute right-0 bottom-16 m-6 z-20">
                    <Fab color="primary" aria-label="person-add">
                        <PersonAddIcon />
                    </Fab>
                </div>
            </Grow>
        </>
    );
}

export default Emergency;