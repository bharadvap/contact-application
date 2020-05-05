import React, { useState, useEffect } from "react";
import "./style.css";
const CreateEditFormForContact = (props) => {
  const [contact, setContact] = useState({});

  // This method will use full for handle on change of every input
  const handleOnChange = (event) => {
    event.persist();
    setContact((contact) => ({
      ...contact,
      [event.target.name]: event.target.value,
    }));
  };

  // This useEffect is use for set contact detail when use is in edit mode
  useEffect(() => {
    setContact(props.contact);
  }, [props.contact]);

  // Handle submit and create or edit the contact
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onCreateOrEdit(contact);
  };

  return (
    <div className="modal contact-application" tabindex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-weight-bold">
              Create Contact
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => props.onClose()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body mx-3">
            <div className="md-form mb-5">
              <i className="fas fa-user prefix grey-text"></i>
              <input
                type="text"
                name="name"
                value={contact.name}
                className="form-control validate"
                onChange={(e) => handleOnChange(e)}
              />
              <label data-error="wrong" data-success="right" for="form3">
                Your name
              </label>
            </div>

            <div className="md-form mb-4">
              <i className="fas fa-envelope prefix grey-text"></i>
              <input
                type="email"
                name="email"
                value={contact.email}
                className="form-control validate"
                onChange={(e) => handleOnChange(e)}
              />
              <label data-error="wrong" data-success="right">
                Your email
              </label>
            </div>
            <div className="md-form mb-4">
              <i className="fas fa-envelope prefix grey-text"></i>
              <input
                type="text"
                name="phoneNumber"
                value={contact.phoneNumber}
                onChange={(e) => handleOnChange(e)}
                className="form-control validate"
              />
              <label data-error="wrong" data-success="right">
                Your Phone Number
              </label>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button className="btn btn-indigo" onClick={(e) => handleSubmit(e)}>
              Submit <i className="fas fa-paper-plane-o ml-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEditFormForContact;
