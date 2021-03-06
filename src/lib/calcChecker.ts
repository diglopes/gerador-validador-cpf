export const calcFirstChecker = (firstNineDigits: string): number => {
  let sum = 0

  for (let j = 0; j < 9; ++j) {
    sum += Number(firstNineDigits.charAt(j)) * (10 - j)
  }

  const lastSumChecker = sum % 11
  const firstChecker = lastSumChecker < 2 ? 0 : 11 - lastSumChecker

  return firstChecker
}

export const calcSecondChecker = (cpfWithChecker1: string): number => {
  let sum = 0

  for (let k = 0; k < 10; ++k) {
    sum += Number(cpfWithChecker1.charAt(k)) * (11 - k)
  }

  const lastSumChecker2 = sum % 11
  const checker2 = lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2

  return checker2
}
