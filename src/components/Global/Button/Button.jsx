import React from "react";

const Button = ({ text }) => {
	return (
		<button
			type="submit"
			id="kt_ecommerce_edit_order_submit"
			className="btn btn-primary"
		>
			<span className="indicator-label">{text}</span>
			<span className="indicator-progress">
				Please wait...
				<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
			</span>
		</button>
	);
};

export default Button;
