import React, { useState } from "react";
import InputText from "../../ui/inputText/InputText";
import { useNavigate } from "react-router-dom";
import Success from "../../ui/Success";
import { useEditBookMutation } from "../../features/api/apiSlice";

const EditBookForm = ({ book }) => {
	const [editBook, { isLoading, isError, isSuccess }] = useEditBookMutation();
	const {
		id,
		name: initialName,
		author: initialAuthor,
		thumbnail: initialThumbnail,
		price: initialPrice,
		rating: initialRating,
		featured: initialFeatured,
	} = book;

	const [inputForm, setInputForm] = useState({
		name: initialName,
		author: initialAuthor,
		thumbnail: initialThumbnail,
		price: initialPrice,
		rating: initialRating,
		featured: initialFeatured,
	});

	const navigate = useNavigate();

	const handlerSubmit = (e) => {
		e.preventDefault();

		editBook({
			id: id,
			data: {
				name: inputForm.name,
				author: inputForm.author,
				thumbnail: inputForm.thumbnail,
				price: inputForm.price,
				rating: inputForm.rating,
				featured: inputForm.featured,
			},
		});

		navigate("/");
	};
	return (
		<form onSubmit={handlerSubmit} className="book-form">
			<div className="space-y-2">
				<InputText
					id="lws-name"
					type="text"
					title="Book Name"
					required
					onChange={(e) => setInputForm({ ...inputForm, name: e.target.value })}
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
						setInputForm({ ...inputForm, thumbnail: e.target.value })
					}
					value={inputForm.thumbnail}
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
					checked={inputForm.featured}
					name="featured"
					className="w-4 h-4"
					onChange={(e) =>
						setInputForm({ ...inputForm, featured: e.target.checked })
					}
					// value={inputForm.featured}
				/>
				<label htmlFor="lws-featured" className="ml-2 text-sm">
					This is a featured book
				</label>
			</div>
			<button
				disabled={isLoading}
				type="submit"
				className="submit"
				id="lws-submit"
			>
				Edit Book
			</button>
			{isSuccess ? <Success message="Edit Successfully" /> : ""}
		</form>
	);
};

export default EditBookForm;

// How to handle checkbox checked status in reactJS toggle to change cheked type
