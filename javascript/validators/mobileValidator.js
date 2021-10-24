export const validateMobile = (mobileNumber) => {
	if (!mobileNumber) {
		return false;
	}

	if (mobileNumber == "") {
		return false;
	}
	//const phoneRegex = new RegExp(/^\+\d{1,3}-\d{9,10}$/);
	// Depends on Country
	const phoneRegex = new RegExp(/^[6-9][0-9]{9}$/);
	return phoneRegex.test(mobileNumber);
};