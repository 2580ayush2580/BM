import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import Card from "../../container/card";
import { addBill, editBill, deleteBill } from "../../app/reducers/billReducer";
import Form from "react-bootstrap/Form";
import { Modal } from "react-bootstrap";
import styles from "./bill.module.css";

export function Bill() {
  const { bills, categories } = useSelector((state) => state.bills);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({
    heading: "",
    edit: false,
  });
  const initialForm = {
    id: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  };
  const [formData, setFormData] = useState(initialForm);

  const submissionAllowed =
    formData.description !== "" &&
    formData.category !== "" &&
    formData.amount !== "" &&
    formData.date !== "";

  const handleOpen = (heading, isEdit, data) => {
    setFormData(data);
    setModalData({
      heading,
      edit: isEdit,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialForm);
  };

  const handleDelete = (id) => {
    dispatch(deleteBill(id));
  };

  const handleEdit = (d) => {
    if (formData?.id) {
      dispatch(
        editBill({
          id: formData?.id,
          description: formData?.description,
          category: formData?.category,
          amount: formData?.amount,
          date: formData?.date,
        })
      );
      handleClose();
    }
  };

  const handleAddBill = () => {
    if (submissionAllowed) {
      const id = uuid();
      dispatch(
        addBill({
          id,
          description: formData?.description,
          category: formData?.category,
          amount: formData?.amount,
          date: formData?.date,
        })
      );
      handleClose();
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="fixed-container">
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData?.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label className="required-field mt-3">Description</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              value={formData?.description}
              placeholder="Description"
              name="description"
            />

            <Form.Label className="required-field mt-3">Category</Form.Label>
            <Form.Select
              onChange={handleChange}
              value={formData?.category}
              name="category"
            >
              <option defaultValue disabled={formData?.category}>
                Select Category
              </option>
              {categories && categories.length > 0
                ? categories.map((val, index) => {
                    return <option key={`${val} ${index}`}>{val}</option>;
                  })
                : null}
            </Form.Select>

            <Form.Label className="required-field mt-3">Amount</Form.Label>
            <Form.Control
              type="number"
              onChange={handleChange}
              value={formData?.amount}
              placeholder="Amount"
              name="amount"
            />

            <Form.Label className="required-field mt-3">Date</Form.Label>
            <Form.Control
              type="date"
              onChange={handleChange}
              value={formData?.date}
              name="date"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className="btn btn-outline-danger">
            Close
          </button>
          <button
            disabled={!submissionAllowed}
            onClick={modalData?.edit ? handleEdit : handleAddBill}
            className="btn btn-outline-primary"
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
      <div className={styles.billLeftPart}>
        <div className="mb-3">
          <button
            onClick={() => handleOpen("Add Bill", false, initialForm)}
            className="btn btn-outline-success"
          >
            + Add Bill
          </button>
        </div>
        {bills && bills.length > 0
          ? bills.map((data) => {
              return (
                <Card
                  key={data?.id}
                  data={data}
                  handleDelete={handleDelete}
                  handleEdit={() => handleOpen("Edit Bill", true, data)}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
