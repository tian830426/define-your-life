import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import SubmitAlbumInfo from "./SetupAlbumInfo/SubmitAlbumInfo";
import ConfirmAlbumInfo from "./SetupAlbumInfo/ConfirmAlbumInfo";

import { AuthContext } from "../../AuthPage/UserAuthProvider";
import { StepContext } from "../StepByStep/StepByStep";

function StepMenu(props) {
  const [show, setShow] = useState(true);
  const { currentUser } = useContext(AuthContext);

  return <>{show ? <SubmitAlbumInfo /> : <ConfirmAlbumInfo />}</>;
}

export default StepMenu;
