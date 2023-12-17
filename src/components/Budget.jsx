import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Budget({ handleSubmitBtn, SetInputVal, inputval, setAmount, amount }) {
  return (
    <div className="mainDiv">
      <h1 className="text-center mx-auto">Shopping List Tracker</h1>
      <div className="inputDiv">
        <InputGroup className="mb-3">
          <div className="formdiv">
            <Form.Control
              placeholder="Add expenses"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={inputval}
              onChange={(e) => SetInputVal(e.target.value)}
            />
            <Form.Control
              placeholder="Expenses Amount"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button
              variant="outline-secondary"
              type="submit"
              id="button-addon2"
              onClick={handleSubmitBtn}
            >
              Submit
            </Button>
          </div>
        </InputGroup>
      </div>
    </div>
  );
}

export default Budget;
