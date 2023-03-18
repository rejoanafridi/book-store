import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import Card from "./Card";
import { useSelector } from "react-redux";

const Cards = () => {
	const { isLoading, isError, data: books } = useGetBooksQuery();
	const { type, search } = useSelector((state) => state.filter);
	// const filter by type
	const filterByType = (book) => {
		if (type === "featured") {
			return book.featured;
		}
		return true;
	};

	// filter by search name
	const filterBySearch = (book) => {
		return book.name.toLowerCase().includes(search.toLowerCase());
	};

	console.log(books);
	let content = null;
	if (isLoading) {
		content = <p>Loading...</p>;
	}
	if (!isLoading && isError) {
		content = <p>Something went wrong</p>;
	}
	if (!isLoading && !isError && books?.length === 0) {
		content = <p>No data found !!</p>;
	}
	if (!isLoading && !isError && books?.length > 0) {
		content = books
			.filter(filterByType)
			.filter(filterBySearch)
			?.map((book) => <Card key={book.id} book={book} />);
	}
	return (
		<div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
			{content}
		</div>
	);
};

export default Cards;

// search by name useMemo hook using show me the code
