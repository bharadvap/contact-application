import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";
import { useIndexedDB } from "react-indexed-db";
import CreateEditFormForContact from "./createEditFromForContact";
import history from "../../history";
const ContactComponent = (props) => {
  // Here we are managing all the state
  const [contactList, setContactList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [contact, setContact] = useState({});

  // This is giving all the hooks for perform any action on particular table
  const { getAll, add, getByID, update } = useIndexedDB("contact");

  // Use effect is use to get all the contact
  useEffect(() => {
    getAllContact();
  }, []);

  // This method will useful for getting all the contact and check its from current user then we need to display
  const getAllContact = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    getAll().then(
      (responses) => {
        let contactData = responses.filter((response) => {
          return response.userId === user.id;
        });
        setContactList(contactData);
      },
      (error) => {}
    );
  };

  // This method is useful for close the modal
  const onClose = () => {
    setContact({});
    setIsOpen(!isOpen);
  };

  // This method is used when you need to click on edit button.
  const onEdit = (id) => {
    onClose();
    getByID(id).then((response) => {
      setContact(response);
    });
  };

  // This method is useful for create or edit the contact on database.
  const onCreateOrEdit = (contact) => {
    let contactData = contact;
    const user = JSON.parse(localStorage.getItem("user"));
    contactData.userId = user.id;
    console.log("contactData", contactData);
    if (contactData.id) {
      update(contactData).then((event) => {
        getAllContact();
      });
    } else {
      add(contactData).then(
        (event) => {
          getAllContact();
        },
        (error) => {
          console.log(error);
        }
      );
    }
    onClose();
  };

  // This method is useful for logout the current user.
  const logout = () => {
    localStorage.removeItem("user");
    history.push("/signIn");
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Add New Contact</button>
      <button onClick={() => logout()}>Logout</button>
      {contactList && contactList.length > 0 ? (
        <ContactList contactList={contactList} onEdit={onEdit} />
      ) : (
        <div>
          <h1>There is no contact found"</h1>
        </div>
      )}
      {isOpen && (
        <CreateEditFormForContact
          onClose={onClose}
          onCreateOrEdit={onCreateOrEdit}
          contact={contact}
        />
      )}
    </>
  );
};

export default ContactComponent;
