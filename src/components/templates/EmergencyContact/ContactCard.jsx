import { useNavigate } from 'react-router-dom';

import CallIcon from '@mui/icons-material/Call';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonBase from '@mui/material/ButtonBase';
import LinearProgress from '@mui/material/LinearProgress';
import Skeleton from "@mui/material/Skeleton";

const ContactCard = ({ contact, handleDelete, isPending, handlePin }) => {
    const navigate = useNavigate();

    const formatNumber = (phoneNumber) => {
        return phoneNumber?.replace(/^0/, '+62');
    }

    return (
        <div className={`contact card ${contact.isPinned ? `bg-secondary text-white` : `bg-white`} mb-3`} >
            {isPending ? <Skeleton variant="rounded" height={40} />
                :
                <div className={` flex flex-row text-sm `}>
                    <div className="contact-info basis-4/5">
                        <h4 className={`inline font-bold ${contact.isPinned ? ` text-white` : `text-primary`}`}>{contact.name}</h4>
                        <button className="inline-block cursor-pointer ml-1 text-yellow-300" onClick={(e) => handlePin(e, contact._id, contact.name, !contact.isPinned)}>{contact.isPinned ? <StarIcon /> : <StarBorderIcon />}</button>
                        <p className="">{contact.number}</p>
                    </div>
                    <div className="action basis-1/5 flex justify-center items-center gap-2">
                        <ButtonBase component="button" onClick={(e) => handleDelete(e, contact._id, contact.name)}>
                            <div className='bg-white text-gray-300 w-fit p-2 rounded-full'>
                                <DeleteIcon />
                            </div>
                        </ButtonBase>
                        <ButtonBase component="a" sx={{ borderRadius: 500 }} href={`tel:${formatNumber(contact.number)}`}>
                            <div className={`${contact.isPinned ? `bg-white text-secondary` : `bg-secondary text-white`} w-fit p-2 rounded-full`}>
                                <CallIcon />
                            </div>
                        </ButtonBase>
                    </div>
                </div>
            }
            {/* {isPending && <LinearProgress color='inherit' className='mt-2' />} */}
        </div>

    );
}

export default ContactCard;