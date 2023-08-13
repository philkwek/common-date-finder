import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Hangout } from "../interface";

const CreateNewHangoutPage = () => {
	const [dateList, setDateList] = useState([
		new DateObject().subtract(4, "days"),
		new DateObject().add(4, "days"),
	]);
	const [hangoutName, setHangoutName] = useState<string>("");
	const [periodCheckbox, setPeriodCheckbox] = useState<Array<boolean>>([
		true,
		true,
		true,
		true,
	]);

	const inputNameOfHangout = (event: React.FormEvent<HTMLInputElement>) => {
		setHangoutName(event.target.value);
	};

	const inputPeriodOfDay = (period: number) => {
		if (period === 0) {
			let newPeriodList: Array<boolean> = [...periodCheckbox];
			newPeriodList[0] = !newPeriodList[0];
			if (newPeriodList[0] === true) {
				newPeriodList = [true, true, true, true];
			} else {
				newPeriodList = [false, false, false, false];
			}
			setPeriodCheckbox(newPeriodList);
		} else {
			const newPeriodList: Array<boolean> = [...periodCheckbox];
			newPeriodList[period] = !newPeriodList[period];
			if (newPeriodList[period] === false) {
				newPeriodList[0] = false;
			}
			if (
				newPeriodList[1] === true &&
				newPeriodList[2] === true &&
				newPeriodList[3] === true
			) {
				newPeriodList[0] = true;
			}
			setPeriodCheckbox(newPeriodList);
		}
	};

	const createNewHangout = () => {
		const newHangout: Hangout = {
			name: hangoutName,
			dateRange: [dateList[0].format(), dateList[1].format()],
			periodOfDay: periodCheckbox,
		};
		console.log(newHangout);
	};

	return (
		<div className="flex flex-col w-full items-center">
			<div className="flex flex-wrap justify-start sm:flex-nowrap z-50 w-full text-sm py-8 px-4">
				<a className="text-3xl font-bold text-teal-800" href="#">
					Create New Hangout
				</a>
			</div>
			<form className="flex flex-col gap-y-7 px-4 w-full sm:w-1/2">
				<div className="flex flex-col gap-y-2">
					<p className="font-semibold">1. Name of Hangout</p>
					<input
						type="text"
						className="py-3 px-4 block w-full border-2 border-gray-300 rounded-sm text-sm focus:border-teal-500 focus:ring-teal-500"
						onChange={inputNameOfHangout}
					/>
				</div>
				<div className="flex flex-col gap-y-2">
					<p className="font-semibold">2. Date Range</p>
					<DatePicker
						inputClass="w-full h-full border-2 border-gray-300 py-3 px-2 rounded-sm text-center"
						value={dateList}
						onChange={setDateList}
						range
						dateSeparator=" - "
					/>
				</div>
				<div className="flex flex-col gap-y-2">
					<p className="font-semibold">
						3. Period of Day for Hangout
					</p>
					<div className="flex flex-col w-full gap-y-2">
						<label className="flex p-3 w-full bg-white border-2 border-gray-300 rounded-sm text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
							<input
								type="checkbox"
								className="shrink-0 mt-0.5 border-gray-300 rounded-sm text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
								id="hs-vertical-checkbox-in-form"
								onChange={() => inputPeriodOfDay(0)}
								checked={periodCheckbox[0]}
							/>
							<span className="text-sm text-gray-500 ml-3 dark:text-gray-400">
								Whole Day
							</span>
						</label>
						<label className="flex p-3 w-full bg-white border-2 border-gray-300 rounded-sm text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
							<input
								type="checkbox"
								className="shrink-0 mt-0.5 border-gray-300 rounded-sm text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
								id="hs-vertical-checkbox-in-form"
								onChange={() => inputPeriodOfDay(1)}
								checked={periodCheckbox[1]}
							/>
							<span className="text-sm text-gray-500 ml-3 dark:text-gray-400">
								Morning
							</span>
						</label>
						<label className="flex p-3 w-full bg-white border-2 border-gray-300 rounded-sm text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
							<input
								type="checkbox"
								className="shrink-0 mt-0.5 border-gray-300 rounded-sm text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
								id="hs-vertical-checkbox-in-form"
								onChange={() => inputPeriodOfDay(2)}
								checked={periodCheckbox[2]}
							/>
							<span className="text-sm text-gray-500 ml-3 dark:text-gray-400">
								Afternoon
							</span>
						</label>
						<label className="flex p-3 w-full bg-white border-2 border-gray-300 rounded-sm text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
							<input
								type="checkbox"
								className="shrink-0 mt-0.5 border-gray-300 rounded-sm text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
								id="hs-vertical-checkbox-in-form"
								onChange={() => inputPeriodOfDay(3)}
								checked={periodCheckbox[3]}
							/>
							<span className="text-sm text-gray-500 ml-3 dark:text-gray-400">
								Evening
							</span>
						</label>
					</div>
				</div>
				<div className="flex flex-col gap-y-2">
					<button
						type="button"
						className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-teal-800 text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
						onClick={() => createNewHangout()}
					>
						Create New Hangout
					</button>
					<button
						type="button"
						className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-sm border-2 border-gray-500 font-semibold bg-white text-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
						onClick={() => console.log("yes")}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateNewHangoutPage;
