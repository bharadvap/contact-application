import React from "react";
const ContactList = (props) => {
  // This method is return the contact details
  const returnItemList = (item) => {
    return (
      <tr>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phoneNumber}</td>
        <td>
          <button
            onClick={() => {
              props.onEdit(item.id);
            }}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  };
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.contactList &&
          props.contactList.length > 0 &&
          props.contactList.map((item) => returnItemList(item))}
      </tbody>
    </table>
  );
};
export default ContactList;
