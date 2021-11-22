import styled from 'styled-components';
// import ButtonStyles from '../../../constants/button';
import FillHoverStyles from '../../../constants/fill-hover';
import FillStyles from '../../../constants/fill';

// $text-light-color: #F4F5F0;
// $link-color: #58B9B6;

export const Input = styled.input`
width: 400px;
padding: 8px 20px;
margin-right: 8px;
border-radius: 7px;
border: none;
  height: 32px;
`;

export const 	Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubmitButton = styled.button`
	background: #58B9B6;
	color: #F4F5F0;
	border: 0;
	cursor: pointer;
	display: inline-block;
	letter-spacing: 1px;
	padding: 1rem 1.5rem;
	border-radius: 5px;
	transition: background 100ms ease-in-out;
	&:hover {
		background: #E1BEE7;
	}
`;

