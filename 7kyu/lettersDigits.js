function countLettersAndDigits(input) {
    let letters = input.replace(/[^a-z]/gi, '').length
    let numbers = input.replace(/[^0-9]/g, '').length
    return letters + numbers;
  }