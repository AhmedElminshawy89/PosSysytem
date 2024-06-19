import React from "react";
import classes from "./StatisticsCard.module.css";

const StatisticsCard = () => {
	return (
		<div className="col-xl-3">
			<a href="#" className="card bg-body hoverable card-xl-stretch mb-xl-8">
				<div className={`card-body ${classes.alignItemsInCard}`}>
					<div>
						<div className="text-gray-900 fw-bold fs-2 mb-2 mt-5">500M$</div>
						<div className="fw-semibold text-gray-400">SAP UI Progress</div>
					</div>
					<i className="ki-outline ki-chart-simple text-primary fs-2x ms-n1"></i>
				</div>
			</a>
		</div>
	);
};

export default StatisticsCard;
