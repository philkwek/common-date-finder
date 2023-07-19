const HomePage = () => {
	return (
		<div className="grow flex flex-col gap-y-4 px-12 justify-center items-center w-full sm:w-1/2">
			<div className="w-full flex flex-col items-center gap-y-3">
				<input
					type="text"
					className="py-3 px-4 block w-full border-2 border-gray-300 rounded-md text-sm focus:border-teal-500 focus:ring-teal-500"
					placeholder="Input Hangout Code"
				/>
				<button
					type="button"
					className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-teal-800 text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
				>
					Find Hangout
				</button>
			</div>
			<p>or</p>
			<button
				type="button"
				className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-teal-800 text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
			>
				Create Hangout
			</button>
		</div>
	);
};

export default HomePage;
