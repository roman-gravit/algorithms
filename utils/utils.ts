export { IsEqualArrays };

/**
 * Compare arrays
 * 
 * @param   arr1
 * @param   arr2
 * @returns     True - length of two arrays are equal and elements are identical (===)
 */
function IsEqualArrays<T>(arr1: ArrayLike<T> | null | undefined,
                          arr2: ArrayLike<T> | null | undefined
                          ): boolean
{
    if (arr1 === arr2) {
        return true;
    }
    if (!arr1 || !arr2) {
        return false;
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
