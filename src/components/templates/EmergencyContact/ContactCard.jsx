import CallIcon from '@mui/icons-material/Call';

const ContactCard = ({contact}) => {

    return (
        <div className={`contact card flex flex-row text-sm mb-3 ${contact.isPinned ? `bg-secondary text-white` : `bg-white`}`}>
            <div className="contact-info basis-4/5">
                <h4 className={`font-bold ${contact.isPinned ? ` text-white` : `text-primary`}`}>{contact.name}</h4>
                <p className="">{contact.number}</p>
            </div>
            <div className="action basis-1/5 flex justify-center items-center">
                <div className={`${contact.isPinned ? `bg-white text-secondary` : `bg-secondary text-white`} w-fit p-2 rounded-full`}>
                    <CallIcon />
                </div>
            </div>
        </div>
    );
}

export default ContactCard;