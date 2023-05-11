import CallIcon from '@mui/icons-material/Call';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { ButtonBase } from '@mui/material';

const handleCall = (event, phoneNumber) => {
    // call action
    alert('Calling ' + phoneNumber)
}

const ContactCard = ({ contact }) => {

    return (
        <div className={`contact card flex flex-row text-sm mb-3 ${contact.isPinned ? `bg-secondary text-white` : `bg-white`}`}>
            <div className="contact-info basis-4/5">
                <h4 className={`inline font-bold ${contact.isPinned ? ` text-white` : `text-primary`}`}>{contact.name}</h4>
                <span className="inline-block cursor-pointer ml-1 text-yellow-300">{contact.isPinned ? <StarIcon /> : <StarBorderIcon />}</span>
                <p className="">{contact.number}</p>
            </div>
            <div className="action basis-1/5 flex justify-center items-center">
                <ButtonBase component="button" sx={{ borderRadius: 500 }} onClick={() => handleCall(event, contact.number)}>
                    <div className={`${contact.isPinned ? `bg-white text-secondary` : `bg-secondary text-white`} w-fit p-2 rounded-full`}>
                        <CallIcon />
                    </div>
                </ButtonBase>
            </div>
        </div>
    );
}

export default ContactCard;