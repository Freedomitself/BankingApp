import styled from "styled-components"
import { Colors } from "./colors"

interface IButton {
  variant: string
}

export const Button = styled.button<IButton>`
  background-color: ${(props) => props.variant === 'textButton' ? Colors.Green60 : Colors.AbsoluteBlack};
  border-radius: 82px;
  height: 27px;
  width: 72px;
  border: none;
  color: ${(props) => props.variant === 'textButton' ? Colors.AbsoluteWhite : Colors.Green60};
  cursor: pointer;
`
