import { SimpleTimerOptions, StandardTimerOptions, TimerPreset, TimerType } from "./interfaces";

export const StandardBaseOptions: StandardTimerOptions = {
	betweenEndTime: 60,
	extraEndThinkingTime: 4.5 * 60,
	lengthOfSecond: 1000,
	midGameBreakTime: 5 * 60,
	numEnds: 10,
	numTimeouts: 1,
	teams: ["Red", "Yellow"],
	thinkingTime: 38 * 60,
	timeoutTime: 60,
	timerName: "",
	travelTime: { home: 20, away: 40 },
	warmupTime: 9 * 60,
};

export const SimpleBaseOptions: SimpleTimerOptions = {
	allowableAdditionalEnds: 0,
	lengthOfSecond: 1000,
	noMoreEndsTime: 10 * 60,
	numEnds: 8,
	showPacing: true,
	timerName: "",
	totalTime: 120 * 60,
	warningTime: 15 * 60,
};

export const TimerPresets: TimerPreset[] = [
	{
		id: "10-end",
		name: "10 Ends",
		options: { ...StandardBaseOptions } as StandardTimerOptions,
		type: TimerType.Standard,
	},
	{
		id: "8-end",
		name: "8 Ends",
		options: {
			...StandardBaseOptions,
			thinkingTime: 30 * 60,
			numEnds: 8,
		} as StandardTimerOptions,
		type: TimerType.Standard,
	},
	{
		id: "mixed-doubles",
		name: "Mixed Doubles",
		options: {
			...StandardBaseOptions,
			thinkingTime: 22 * 60,
			numEnds: 8,
		} as StandardTimerOptions,
		type: TimerType.Standard,
	},
	{
		id: "1.5-hour",
		name: "1½ Hours (6 Ends)",
		options: {
			...SimpleBaseOptions,
			numEnds: 6,
			totalTime: 90 * 60,
		} as SimpleTimerOptions,
		type: TimerType.Simple,
	},
	{
		id: "2-hour",
		name: "2 Hours (8 Ends)",
		options: {
			...SimpleBaseOptions,
		} as SimpleTimerOptions,
		type: TimerType.Simple,
	},
	{
		id: "2.5-hour",
		name: "2½ Hours (10 Ends)",
		options: {
			...SimpleBaseOptions,
			numEnds: 10,
			totalTime: 150 * 60,
		} as SimpleTimerOptions,
		type: TimerType.Simple,
	},
];
