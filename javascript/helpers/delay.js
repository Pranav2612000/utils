export async function delay(seconds) {
	if (!Number.isInteger(seconds)) {
		throw new Error("seconds parameter should be a number");
	}

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, [seconds]);
	});
}
