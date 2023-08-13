/**
 * Check whether the list is sorted
 * This just loops over the list to make sure that it is sorted.
 * @param {number[]} array - The input array to take in.
 * @returns {boolean} - Whether the array is sorted or not
 */
export default function isSorted(array: number[]) {
    for(let i = 0; i < array.length; i++) {
        try {
            if(!(array[i] < array[i+1])) {
                return false;
            }
        }
        catch {
            return true;
        }
    }
}
