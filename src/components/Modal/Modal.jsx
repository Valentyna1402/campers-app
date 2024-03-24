import React, { useState } from "react";
import { TrailerDetails } from "../TrailerDetails/TrailerDetails";
import { Overlay } from "./Modal.styled";

export const Modal = ({ show, close, trailer }) => {
  if (!show) {
    return null;
  }

  return (
    <Overlay onClick={close}>
      <TrailerDetails trailer={trailer} close={close} />
    </Overlay>
  );
};
