import React, { useState } from "react";
import Flatpickr from "react-flatpickr";

const Calender = () => {
	const [date, setDate] = useState(new Date());
	console.log(date);
	return (
		<Flatpickr
			options={{ dateFormat: "Y-m-d" }}
			onChange={([date]) => {
				setDate(date);
			}}
		/>
	);
};

export default Calender;
