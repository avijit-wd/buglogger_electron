import React from "react";
import Button from "react-bootstrap/Button";
import Moment from "react-moment";

const LogItem = ({
  deleteItem,
  log: { priority, _id, text, user, created },
}) => {
  return (
    <tr>
      <td>{priority}</td>
      <td>{text}</td>
      <td>{user}</td>
      <td>
        <Moment format="MMMM Do YYYY, h:mm:ss a">{new Date(created)}</Moment>
      </td>
      <td>
        <Button variant="danger" size="sm" onClick={() => deleteItem(_id)}>
          x
        </Button>
      </td>
    </tr>
  );
};

export default LogItem;
