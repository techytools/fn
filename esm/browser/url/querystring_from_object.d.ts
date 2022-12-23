/**
 * Convert JavaScript Object to URL querystring
 * ex: "?one=1&two=something"
 * @param params - JS Object of key-value query params
 * @return - starting with "?". Just that if empty object
 */
export default function (params?: Record<string, string>): string;
