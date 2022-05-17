import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/Features/addSlice";

export const Form = () => {
  const [datas, setDatas] = useState({
    no: "",
    kontrol: "",
    teklif: "",
    dummy: "",
  });

  const dispatch = useDispatch();

  const onSave = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        no: datas.no,
        kontrol: datas.kontrol,
        teklif: datas.teklif,
        dummy: datas.dummy,
      })
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatas((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div style={{ display: "flex" }}>
      <input
        id="no"
        type="text"
        placeholder="No Giriniz"
        name="no"
        value={datas.no}
        onChange={handleChange}
      />
      <input
        id="kontrol"
        type="text"
        placeholder="Kontrol Giriniz"
        name="kontrol"
        value={datas.kontrol}
        onChange={handleChange}
      />
      <input
        id="teklif"
        type="text"
        placeholder="Teklif Giriniz"
        name="teklif"
        value={datas.teklif}
        onChange={handleChange}
      />
      <input
        id="dummy"
        type="text"
        placeholder="dummy Giriniz"
        name="dummy"
        value={datas.dummy}
        onChange={handleChange}
      />
      <button onClick={onSave}>Kaydet</button>
    </div>
  );
};
