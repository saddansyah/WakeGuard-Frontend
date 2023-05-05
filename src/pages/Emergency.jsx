import Menu from "@mui/icons-material/Menu";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { Avatar, Divider, Fab, Grow } from "@mui/material";
import { Navbar, ContactCard, SearchBar } from "@/utils/componentsLoader";

const Emergency = () => {

    const dummyContact = [
        {
            name: "Pak Pulici",
            number: "08112394902",
            isPinned: true
        },
        {
            name: "Pak Pulizi",
            number: "08112393124",
            isPinned: false
        },
        {
            name: "Pak Polici",
            number: "08113394902",
            isPinned: false
        }
    ];

    return (
        <>
            <Navbar>
                <Avatar>WG</Avatar>
                {/* <Menu /> */}
                <SearchBar placeholder={'Search contact..'}/>
            </Navbar>
            <h1 className="font-bold text-2xl text-primary mb-6">Emergency</h1>
            <div className="contacts h-[70vh] overflow-y-auto">
                <div className="one-tap-call">
                    <h2 className="font-bold mb-2">One-tap Call</h2>
                    <div className="cards grid grid-cols-1 gap-2">
                        <div className="one-tap-call">
                            {dummyContact && dummyContact
                                ?.map((contact) => contact.isPinned && <ContactCard key={contact.number} contact={contact} />)
                            }
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="contacts mt-3">
                    <h2 className="font-bold mb-2">Contacts</h2>
                    {dummyContact && dummyContact
                        ?.map((contact) => !contact.isPinned && <ContactCard key={contact.number} contact={contact} />)
                    }
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