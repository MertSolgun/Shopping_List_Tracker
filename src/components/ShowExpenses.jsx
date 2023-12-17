import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Swal from 'sweetalert2'

function ShowExpenses({ everyexpenses, handleDelete, handleEdit }) {
  const [expenval, setExpenVal] = useState(everyexpenses.expenses);

  const [isediting, setIsEditing] = useState(false);

  const handleChange = (editingExpenses, id) => {
    setExpenVal(editingExpenses);
  };

  const handleSubmit = () => {
    if (!expenval.trim()) {
      Swal.fire({
        icon: "warning",
        title: "The field to be edited cannot be empty.",
      });
    } else {
      handleEdit(everyexpenses.id, expenval);
      setIsEditing(false);
    }
  };

  return (
    <div className="expenseMain">
      <div key={everyexpenses.id}>
        <div className="expenses">
          {isediting ? (
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Edit expenses"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={expenval}
                onChange={(e) => handleChange(e.target.value, everyexpenses.id)}
              />
              <Button
                variant="outline-secondary"
                type="submit"
                id="button-addon2"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </InputGroup>
          ) : (
            <>
              <div>{everyexpenses.expenses}</div>
              <div className="IconDiv">
                <div className="text-danger">
                  -${everyexpenses.expensesAmount}
                </div>
                <FaEdit onClick={() => setIsEditing(true)} />
                <FaDeleteLeft onClick={() => handleDelete(everyexpenses.id)} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowExpenses;
