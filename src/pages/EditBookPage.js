import React, { useState } from "react";
import InputText from "../ui/inputText/InputText";
import { useNavigate, useParams } from "react-router-dom";
import Success from "../ui/Success";
import { useGetBookQuery } from "../features/api/apiSlice";
import EditBookForm from "../components/editBook/EditBookForm";

const EditBookPage = () => {
	const { bookId } = useParams();
	console.log(bookId);
	const { data: book, isLoading, isError } = useGetBookQuery(bookId);

	console.log(book);

	// what to render
	let content = null;
	if (isLoading) {
		content = <p>Loading.......</p>;
	}
	if (!isLoading && isError) {
		content = <p>There was an error loading!!</p>;
	}

	if (!isLoading && !isError && book?.id) {
		content = <EditBookForm book={book} />;
	}
	return (
		<main className="py-6 2xl:px-6">
			<div className="container">
				<div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
					<h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
					{content}
				</div>
			</div>
		</main>
	);
};

export default EditBookPage;
