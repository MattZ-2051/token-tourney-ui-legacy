// ex. {minimumFractionDigits: 2, maximumFractionDigits: 2}
export function formatDecimals(target: number, options?: object) {
  return target && target.toLocaleString(undefined, options);
}
