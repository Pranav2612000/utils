// word should not contain digits
export const validateWord = (name) => {
	if (!name) {
		return false;
	}
	const re = /^[A-Za-z\s]+$/;
	return re.test(String(name).toLowerCase());
};