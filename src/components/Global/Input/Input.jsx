import React from "react";

const Input = ({ label, placeholder, type }) => {
	return (
		<div className="fv-row w-100 ">
			<label className="form-label">{label}</label>
			<input
				className="form-control mb-2"
				name="billing_order_postcode"
				placeholder={placeholder}
				type={type}
				value=""
			/>
		</div>
	);
};

export default Input;
