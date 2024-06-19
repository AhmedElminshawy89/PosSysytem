import React from "react";

const Select = ({ label, options }) => {
	return (
		<div className="fv-row w-100 ">
			{/* <label className="required form-label">{label}</label> */}
			<label className="form-label">{label}</label>
			<select
				className="form-select mb-2"
				name="tax"
				data-control="select2"
				data-hide-search="true"
				data-placeholder="Select an option"
				pla
			>
				<option></option>
				{options.map((option) => (
					<option value={option}>{option}</option>
				))}
			</select>
			{/* <div className="text-muted fs-7">Set the product tax class.</div> */}
		</div>
	);
};

export default Select;
