export default function Success({ message }) {
	return (
		<div
			className="mb-4 rounded-lg bg-success-100 py-5 px-6 text-base text-success-700"
			role="alert"
		>
			{message}
		</div>
	);
}
