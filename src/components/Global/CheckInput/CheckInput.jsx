import React, { useState } from "react";

const CheckInput = ({ label }) => {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<div className="form-check form-switch form-check-custom form-check-solid d-flex align-items-center justify-content-start">
			<input
				className="form-check-input"
				type="checkbox"
				value={isChecked}
				id="status"
				name="status"
				checked={isChecked}
				onClick={() => {
					setIsChecked((prev) => !prev);
				}}
			/>
			<label
				className="form-check-label fw-semibold text-gray-800 ms-3 fs-5"
				htmlFor="status"
			>
				{label}
			</label>
		</div>
	);
};

export default CheckInput;