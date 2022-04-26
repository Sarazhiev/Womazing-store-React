import React from 'react';
import ContactHeader from "./Crumbs/Crumbs";
import Map from "./Map/Map";
import Contacts from "./Contacts/Contacts";
import ContactFrom from "./ContactForm/ContactFrom";

const Contact = () => {
    return (
        <main>
            <ContactHeader/>
            <Map/>
            <Contacts/>
            <ContactFrom/>
        </main>
    );
};

export default Contact;