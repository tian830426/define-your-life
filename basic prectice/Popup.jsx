import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import styled from "styled-components";
import PropTypes from "prop-types";

const Bgc = styled.div`
  padding-top: 70px;
  width: 90%;
  height: 80%;
  border: 2px solid black;
`;

function Popup(props) {
  //   const handleClick = props.onClose;
  return (
    <Bgc>
      <div>
        {props.children}
        <button onClick={() => props.onClose()}>Close</button>
      </div>
    </Bgc>
  );
}

Popup.propType = {
  onClose: PropTypes.func
};

Popup.defaultProps = {
  onClose: () => {},
};

export default Popup;
