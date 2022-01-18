function strictEquals(a, b) {
  let equalNumbers = Object.is(a, b);

  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  }
  if (Object.is(a, 0) && Object.is(b * -1, 0)) {
    return true;
  }
  if (Object.is(a * -1, 0) && Object.is(b, 0)) {
    return true;
  }

  return equalNumbers;
}

describe("When have two numbers", () => {
  test("Then it should return true", () => {
    // Arrange
    let firstValue = 1;
    let secondValue = 1;
    const expectedResult = true;

    // Act
    const strictEqualsResult = strictEquals(firstValue, secondValue);

    // Assert
    expect(strictEqualsResult).toBe(expectedResult);
  });
});

describe("When have two numbers", () => {
  test("Then it should return false", () => {
    // Arrange
    let firstValue = 1;
    let secondValue = "1";
    const expectedResult = false;

    // Act
    const strictEqualsResult = strictEquals(firstValue, secondValue);

    // Assert
    expect(strictEqualsResult).toBe(expectedResult);
  });
});

describe("When have true and false", () => {
  test("Then it should return false", () => {
    // Arrange
    let firstValue = true;
    let secondValue = false;
    const expectedResult = false;

    // Act
    const strictEqualsResult = strictEquals(firstValue, secondValue);

    // Assert
    expect(strictEqualsResult).toBe(expectedResult);
  });
});

describe("When have false and false", () => {
  test("Then it should return true", () => {
    // Arrange
    let firstValue = false;
    let secondValue = false;
    const expectedResult = true;

    // Act
    const strictEqualsResult = strictEquals(firstValue, secondValue);

    // Assert
    expect(strictEqualsResult).toBe(expectedResult);
  });
});

describe("When have two different words", () => {
  test("Then it should return false", () => {
    // Arrange
    let firstValue = "Water";
    let secondValue = "oil";
    const expectedResult = false;

    // Act
    const strictEqualsResult = strictEquals(firstValue, secondValue);

    // Assert
    expect(strictEqualsResult).toBe(expectedResult);
  });
});

describe("When have two NaN", () => {
  test("Then it should return false", () => {
    // Arrange
    let firstValue = NaN;
    let secondValue = NaN;
    const expectedResult = false;

    // Act
    const strictEqualsResult = strictEquals(firstValue, secondValue);

    // Assert
    expect(strictEqualsResult).toBe(expectedResult);
  });
});

describe("When have a value 0 and other -0", () => {
  test("Then it should return true", () => {
    // Arrange
    let firstValue = 0;
    let secondValue = -0;
    const expectedResult = true;

    // Act
    const strictEqualsResult = strictEquals(firstValue, secondValue);

    // Assert
    expect(strictEqualsResult).toBe(expectedResult);
  });
});

describe("When have a value 0 and other -0", () => {
  test("Then it should return true", () => {
    // Arrange
    let firstValue = -0;
    let secondValue = 0;
    const expectedResult = true;

    // Act
    const strictEqualsResult = strictEquals(firstValue, secondValue);

    // Assert
    expect(strictEqualsResult).toBe(expectedResult);
  });
});
