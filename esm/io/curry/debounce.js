/**
 * Returns curried function.
 * Calling curry will delay execution of funtion until delay time (ms).
 * While delay is in progress, extra function calls will be dropped, but after delay, latest attempted function will be called.
 */
export default function debounce(
/**
 * Function to delay
 */
func, 
/**
 * Delay in milliseconds
 */
delay) {
    let debouncedTimeout = 0;
    let debouncedTimeoutWaiting = false;
    return (...args) => {
        // always clear old timeouts
        window.clearTimeout(debouncedTimeout);
        // standard debounce
        debouncedTimeoutWaiting = true;
        debouncedTimeout = window.setTimeout(() => {
            debouncedTimeoutWaiting = false;
            func.apply(null, args);
        }, delay);
    };
}
