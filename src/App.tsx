import { useState } from "react";
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CreateNewHangoutPage from "./components/CreateNewHangoutPage";
import RespondToHangoutPage from "./components/RespondToHangoutPage";

import("preline");

const App = () => {
	const [dates, setDates] = useState<DateObject | DateObject[] | null>(
		new DateObject()
	);
	const [isCreateHangoutClicked, setIsCreateHangoutClicked] =
		useState<boolean>(false);

	const setNewDates = (newDates: DateObject | DateObject[] | null) => {
		setDates(newDates);
		console.log(newDates);
	};

	return (
		<div className="flex flex-col h-screen items-center">
			{/* <Calendar
					multiples
					value={dates}
					onChange={(newDates) => setNewDates(newDates)}
				/> */}
			<Header />
			<HomePage />
		</div>
	);
};

export default App;
