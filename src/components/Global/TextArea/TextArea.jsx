import React from "react";

const TextArea = ({ label, placeholder }) => {
	return (
		<div className="fv-row w-100 ">
			<label className="form-label">{label}</label>
			<textarea
				class="form-control form-control-solid"
				name=""
				placeholder={placeholder}
			></textarea>
		</div>
	);
};

export default TextArea;
