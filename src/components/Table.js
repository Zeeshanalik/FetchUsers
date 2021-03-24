import React from 'react';
const Table = ({ items }) => {
  return (
    <>
      <table border='1'>
        <thead>
          <tr>
            <th> User Id</th>
            <th> Name</th>
            <th> User Name</th>
            <th> Email</th>
            <th> Phone</th>
            <th> Website</th>
          </tr>
        </thead>
        <tbody>
          {items?.map(({ id, name, username, email, phone, website }) => (
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{username}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Table;
