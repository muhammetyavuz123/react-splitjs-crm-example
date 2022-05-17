/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { Form } from "../Form";
import { getTasks } from "../../Redux/Features/addSlice";
import { useDispatch, useSelector } from "react-redux";

export const AddTable = () => {
  const [formHide, setFormHide] = useState(false);
  const datas = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const count = useRef(true);

  useEffect(() => {
    if (count.current) {
      dispatch(getTasks());
      count.current = false;
    }
  });

  return (
    <div>
      <table>
        {datas?.map(({ no, kontrol, teklif, id }) => (
          <tbody key={id}>
            <tr>
              <td>{no}</td>
              <td>{kontrol}</td>
              <td>{teklif}</td>
            </tr>
          </tbody>
        ))}
      </table>
      {formHide ? <Form /> : ""}
      <button onClick={() => setFormHide((value) => !value)}>Yeni Ekle</button>
    </div>
  );
};
