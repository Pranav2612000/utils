/*
	arr - array on which the binary search is to be run
	compareFunc - function used to compare the element while binary searching
			returns 0 if the element is found
			returns -1 to move the search to the higher part of the array
			returns 1 to move the search to the lower part of the array
*/
export default function binarySearchInArray(arr, compareFunc) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let middle = Math.floor((start + end) / 2);

		let result = compareFunc(arr[middle]);
		// NOTE the ".email" part added
		if (result === 0) {
			return arr[middle];
		} else if (result < 0) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
	}
	return -1;
};