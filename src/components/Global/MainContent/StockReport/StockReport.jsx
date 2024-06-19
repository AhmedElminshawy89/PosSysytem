import React from "react";

const StockReport = () => {
	return (
		<div className="col-xl-8">
			<div className="card card-flush h-xl-100">
				<div className="card-header pt-7">
					<h3 className="card-title align-items-start flex-column">
						<span className="card-label fw-bold text-gray-900">
							Stock Report
						</span>
						<span className="text-gray-500 mt-1 fw-semibold fs-6">
							Total 2,356 Items in the Stock
						</span>
					</h3>
					<div className="card-toolbar">
						<div className="d-flex flex-stack flex-wrap gap-4">
							<div className="d-flex align-items-center fw-bold">
								<div className="text-muted fs-7 me-2">Cateogry</div>
								<select
									className="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto"
									data-control="select2"
									data-hide-search="true"
									data-dropdown-css-className="w-150px"
									data-placeholder="Select an option"
								>
									<option></option>
									<option value="Show All" selected="selected">
										Show All
									</option>
									<option value="a">Category A</option>
									<option value="b">Category B</option>
								</select>
							</div>
							<div className="d-flex align-items-center fw-bold">
								<div className="text-muted fs-7 me-2">Status</div>
								<select
									className="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto"
									data-control="select2"
									data-hide-search="true"
									data-dropdown-css-className="w-150px"
									data-placeholder="Select an option"
									data-kt-table-widget-5="filter_status"
								>
									<option></option>
									<option value="Show All" selected="selected">
										Show All
									</option>
									<option value="In Stock">In Stock</option>
									<option value="Out of Stock">Out of Stock</option>
									<option value="Low Stock">Low Stock</option>
								</select>
							</div>
							<a
								href="apps/ecommerce/catalog/products.html"
								className="btn btn-light btn-sm"
							>
								View Stock
							</a>
						</div>
					</div>
				</div>
				<div className="card-body" style={{ overflowX: "auto" }}>
					<table
						className="table align-middle table-row-dashed fs-6 gy-3"
						id="kt_table_widget_5_table"
					>
						<thead>
							<tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
								<th className="min-w-150px">Item</th>
								<th className="text-end pe-3 min-w-100px">Product ID</th>
								<th className="text-end pe-3 min-w-150px">Date Added</th>
								<th className="text-end pe-3 min-w-100px">Price</th>
								<th className="text-end pe-3 min-w-100px">Status</th>
								<th className="text-end pe-0 min-w-75px">Qty</th>
							</tr>
						</thead>
						<tbody className="fw-bold text-gray-600">
							<tr>
								<td>
									<a
										href="apps/ecommerce/catalog/edit-product.html"
										className="text-gray-900 text-hover-primary"
									>
										Macbook Air M1
									</a>
								</td>
								<td className="text-end">#XGY-356</td>
								<td className="text-end">02 Apr, 2024</td>
								<td className="text-end">$1,230</td>
								<td className="text-end">
									<span className="badge py-3 px-4 fs-7 badge-light-primary">
										In Stock
									</span>
								</td>
								<td className="text-end" data-order="58">
									<span className="text-gray-900 fw-bold">58 PCS</span>
								</td>
							</tr>
							<tr>
								<td>
									<a
										href="apps/ecommerce/catalog/edit-product.html"
										className="text-gray-900 text-hover-primary"
									>
										Surface Laptop 4
									</a>
								</td>
								<td className="text-end">#YHD-047</td>
								<td className="text-end">01 Apr, 2024</td>
								<td className="text-end">$1,060</td>
								<td className="text-end">
									<span className="badge py-3 px-4 fs-7 badge-light-danger">
										Out of Stock
									</span>
								</td>
								<td className="text-end" data-order="0">
									<span className="text-gray-900 fw-bold">0 PCS</span>
								</td>
							</tr>
							<tr>
								<td>
									<a
										href="apps/ecommerce/catalog/edit-product.html"
										className="text-gray-900 text-hover-primary"
									>
										Logitech MX 250
									</a>
								</td>
								<td className="text-end">#SRR-678</td>
								<td className="text-end">24 Mar, 2024</td>
								<td className="text-end">$64</td>
								<td className="text-end">
									<span className="badge py-3 px-4 fs-7 badge-light-primary">
										In Stock
									</span>
								</td>
								<td className="text-end" data-order="290">
									<span className="text-gray-900 fw-bold">290 PCS</span>
								</td>
							</tr>
							<tr>
								<td>
									<a
										href="apps/ecommerce/catalog/edit-product.html"
										className="text-gray-900 text-hover-primary"
									>
										AudioEngine HD3
									</a>
								</td>
								<td className="text-end">#PXF-578</td>
								<td className="text-end">24 Mar, 2024</td>
								<td className="text-end">$1,060</td>
								<td className="text-end">
									<span className="badge py-3 px-4 fs-7 badge-light-danger">
										Out of Stock
									</span>
								</td>
								<td className="text-end" data-order="46">
									<span className="text-gray-900 fw-bold">46 PCS</span>
								</td>
							</tr>
							<tr>
								<td>
									<a
										href="apps/ecommerce/catalog/edit-product.html"
										className="text-gray-900 text-hover-primary"
									>
										HP Hyper LTR
									</a>
								</td>
								<td className="text-end">#PXF-778</td>
								<td className="text-end">16 Jan, 2024</td>
								<td className="text-end">$4500</td>
								<td className="text-end">
									<span className="badge py-3 px-4 fs-7 badge-light-primary">
										In Stock
									</span>
								</td>
								<td className="text-end" data-order="78">
									<span className="text-gray-900 fw-bold">78 PCS</span>
								</td>
							</tr>
							<tr>
								<td>
									<a
										href="apps/ecommerce/catalog/edit-product.html"
										className="text-gray-900 text-hover-primary"
									>
										Dell 32 UltraSharp
									</a>
								</td>
								<td className="text-end">#XGY-356</td>
								<td className="text-end">22 Dec, 2024</td>
								<td className="text-end">$1,060</td>
								<td className="text-end">
									<span className="badge py-3 px-4 fs-7 badge-light-warning">
										Low Stock
									</span>
								</td>
								<td className="text-end" data-order="8">
									<span className="text-gray-900 fw-bold">8 PCS</span>
								</td>
							</tr>
							<tr>
								<td>
									<a
										href="apps/ecommerce/catalog/edit-product.html"
										className="text-gray-900 text-hover-primary"
									>
										Google Pixel 6 Pro
									</a>
								</td>
								<td className="text-end">#XVR-425</td>
								<td className="text-end">27 Dec, 2024</td>
								<td className="text-end">$1,060</td>
								<td className="text-end">
									<span className="badge py-3 px-4 fs-7 badge-light-primary">
										In Stock
									</span>
								</td>
								<td className="text-end" data-order="124">
									<span className="text-gray-900 fw-bold">124 PCS</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default StockReport;
