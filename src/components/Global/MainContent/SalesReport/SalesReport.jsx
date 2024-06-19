import React from "react";

const SalesReport = () => {
	return (
		<div
			id="kt_app_content_container"
			className="app-container container-fluid"
		>
			<div className="card card-flush">
				<div className="card-header align-items-center py-5 gap-2 gap-md-5">
					<div className="card-title">
						<div className="d-flex align-items-center position-relative my-1">
							<span className="card-label fw-bold text-gray-900">
								Recent Sales
							</span>
						</div>
						<div id="kt_ecommerce_report_sales_export" className="d-none"></div>
					</div>
				</div>
				<div className="card-body pt-0" style={{ overflowX: "auto" }}>
					<table
						className="table align-middle table-row-dashed fs-6 gy-5"
						id="kt_ecommerce_report_sales_table"
					>
						<thead>
							<tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
								<th className="min-w-100px">Date</th>
								<th className="text-end min-w-75px">No. Orders</th>
								<th className="text-end min-w-75px">Products Sold</th>
								<th className="text-end min-w-75px">Tax</th>
								<th className="text-end min-w-100px">Total</th>
							</tr>
						</thead>
						<tbody className="fw-semibold text-gray-600">
							<tr>
								<td>Jun 24, 2024</td>
								<td className="text-end pe-0">3</td>
								<td className="text-end pe-0">8</td>
								<td className="text-end pe-0">$81.00</td>
								<td className="text-end">$542.00</td>
							</tr>
							<tr>
								<td>Feb 21, 2024</td>
								<td className="text-end pe-0">10</td>
								<td className="text-end pe-0">13</td>
								<td className="text-end pe-0">$36.00</td>
								<td className="text-end">$237.00</td>
							</tr>
							<tr>
								<td>Sep 22, 2024</td>
								<td className="text-end pe-0">17</td>
								<td className="text-end pe-0">22</td>
								<td className="text-end pe-0">$75.00</td>
								<td className="text-end">$500.00</td>
							</tr>
							<tr>
								<td>Oct 25, 2024</td>
								<td className="text-end pe-0">2</td>
								<td className="text-end pe-0">6</td>
								<td className="text-end pe-0">$4.00</td>
								<td className="text-end">$25.00</td>
							</tr>
							<tr>
								<td>Jun 24, 2024</td>
								<td className="text-end pe-0">16</td>
								<td className="text-end pe-0">19</td>
								<td className="text-end pe-0">$74.00</td>
								<td className="text-end">$496.00</td>
							</tr>
							<tr>
								<td>Apr 15, 2024</td>
								<td className="text-end pe-0">3</td>
								<td className="text-end pe-0">8</td>
								<td className="text-end pe-0">$73.00</td>
								<td className="text-end">$489.00</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default SalesReport;
