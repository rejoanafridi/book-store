import React, { useEffect, useState } from "react";
import InputText from "../ui/inputText/InputText";
import { useAddBookMutation } from "../features/api/apiSlice";
import Success from "../ui/Success";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
	const [addBook, { isLoading, isSuccess }] = useAddBookMutation();
	const [inputForm, setInputForm] = useState({
		name: "",
		author: "",
		image: "",
		price: "",
		rating: "",
		featured: "",
	});

	const navigate = useNavigate();

	const reset = () => {
		setInputForm({
			name: "",
			author: "",
			image: "",
			price: "",
			rating: "",
			featured: "",
		});
	};

	const handlerSubmit = (e) => {
		e.preventDefault();

		addBook({
			name: inputForm.name,
			author: inputForm.author,
			thumbnail: inputForm.image,
			price: inputForm.price,
			rating: inputForm.rating,
			featured: inputForm.featured,
		});
		reset();
		navigate("/");
	};

	return (
		<main className="py-6 2xl:px-6">
			<div className="container">
				<div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
					<h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
					<form onSubmit={handlerSubmit} className="book-form">
						<div className="space-y-2">
							<InputText
								id="lws-name"
								type="text"
								title="Book Name"
								required
								onChange={(e) =>
									setInputForm({ ...inputForm, name: e.target.value })
								}
								value={inputForm.name}
							/>
						</div>
						<div className="space-y-2">
							<InputText
								id="lws-author"
								type="text"
								title="Author"
								required
								onChange={(e) =>
									setInputForm({ ...inputForm, author: e.target.value })
								}
								value={inputForm.author}
							/>
						</div>
						<div className="space-y-2">
							<InputText
								id="lws-image"
								type="text"
								title="image URL"
								required
								onChange={(e) =>
									setInputForm({ ...inputForm, image: e.target.value })
								}
								value={inputForm.image}
							/>
						</div>
						<div className="grid grid-cols-2 gap-8 pb-4">
							<div className="space-y-2">
								<InputText
									id="lws-price"
									type="text"
									title="Price"
									required
									onChange={(e) =>
										setInputForm({ ...inputForm, price: e.target.value })
									}
									value={inputForm.price}
								/>
							</div>
							<div className="space-y-2">
								<InputText
									id="lws-rating"
									type="text"
									title="Rating"
									required
									onChange={(e) =>
										setInputForm({ ...inputForm, rating: e.target.value })
									}
									value={inputForm.rating}
								/>
							</div>
						</div>
						<div className="flex items-center">
							<input
								id="lws-featured"
								type="checkbox"
								name="featured"
								className="w-4 h-4"
								onChange={(e) =>
									setInputForm({ ...inputForm, featured: e.target.checked })
								}
								value={inputForm.featured}
							/>
							<label htmlFor="lws-featured" className="ml-2 text-sm">
								This is a featured book
							</label>
						</div>
						<button type="submit" className="submit" id="lws-submit">
							Add Book
						</button>
						{isSuccess ? <Success message="Book is added successfully!" /> : ""}
					</form>
				</div>
			</div>
		</main>
	);
};

export default AddBook;

// how to get input true onChange handeler react
