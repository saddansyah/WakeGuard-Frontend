const useContact = ({ setSelectedContact }) => {
    if (!("contacts" in navigator)) {
        console.error("Your device is not supported for contacts api");
    }

    const getContacts = async () => {
        const props = ["name", "tel"];
        const opts = { multiple: true };

        try {
            const contacts = await navigator.contacts.select(props, opts);
            setSelectedContact(contacts);
            alert(contacts);
        }
        catch (err) {
            alert(err);
        }
    }

    return { getContacts }
}

export default useContact;