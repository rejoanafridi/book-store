import React from "react";

const InputText = ({ title, ...attributes }) => {
	return (
		<>
			<label>{title}</label>
			<input {...attributes} className="text-input" />
		</>
	);
};

export default InputText;
