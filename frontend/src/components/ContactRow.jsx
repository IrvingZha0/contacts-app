import React from "react";
import { connect } from "react-redux";
import moment from "moment";

const ContactRow = ({
  BirthDate,
  ContactCount,
  IsFavorite,
  Name,
  Title,
  UserID
}) => {
  let birthdayYear = moment().format(BirthDate.split(' ')[0], 'DD.MM.YYYY');
  let age = moment().diff(birthdayYear, 'years');
  return (
    <tr>
      <td>{UserID}</td>
      <td>{Title}</td>
      <td>{Name}</td>
      <td>{age}</td>
      <td>{IsFavorite ? 'Yes': 'No'}</td>
      <td>{ContactCount}</td>
      <td>
        <button onClick={() => {}}>view details</button>
      </td>
    </tr>
  );
};

export default connect()(ContactRow);
