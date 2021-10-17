import styled from "styled-components";
import { primaryColor, textDarkGrey} from "../../constants/colors";

export const CardContainer = styled.div`
  width: 90vw;
  max-width: 420px;
  height: 250px;
  background: url(${(props) => props.imgUrl}) center bottom/cover;
  border-radius: 10px;
  margin: 10px auto 0 auto;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);
  position: relative;
`;
export const CardInfo = styled.div`
  width: 95.5%;
  color: ${textDarkGrey};
  padding: 8px;
  background: #ffffff;
  opacity: 0.9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;

  h3 {
    color: ${primaryColor};
    font-size: 16px;
    margin-left: 8px;
  }
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 8px 8px 0 0;

  p {
    font-size: 16px;
    color: ${textDarkGrey};
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 8px;
  }
`;
