import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterType } from "../../features/filter/filterSlice";

const Header = () => {
	const filter = useSelector((state) => state.filter);
	const dispatch = useDispatch();
	const [type, setType] = useState(filter.type);
	console.log(type);

	useEffect(() => {
		dispatch(filterType(type));
	}, [type]);

	return (
		<div className="flex items-center justify-between mb-12">
			<h4 className="mt-2 text-xl font-bold">Book List</h4>
			<div className="flex items-center space-x-4">
				<button
					onClick={(e) => setType("all")}
					className={`lws-filter-btn ${type === "all" ? "active-filter" : ""}`}
				>
					All
				</button>
				<button
					onClick={(e) => setType("featured")}
					className={`lws-filter-btn ${
						type === "featured" ? "active-filter" : ""
					}`}
				>
					Featured
				</button>
			</div>
		</div>
	);
};

export default Header;
