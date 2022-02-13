import { isNotEmpty } from "./isNotEmpty";
import { throwErrorIfNotString } from "./throwErrorIfNotString";

/**
 * A String of the specified targetLength with padString applied from the start.
 * @param str  - String value
 * @param targetLength - The length of the resulting string once the current str has been padded
 * @param padString - String to pad the current str with. Optional,The default value is the unicode "space"
 * @returns -A String of the specified targetLength with padString applied from the start.
 */
export const padStart = (str: string, targetLength: number, padString?: string): string => {
    throwErrorIfNotString(str);
    padString && throwErrorIfNotString(padString);
    
    if (isNotEmpty(str) && targetLength >= 0) {
        return padString ? str.padStart(targetLength, padString) : str.padStart(targetLength)
    }
    return str
};
