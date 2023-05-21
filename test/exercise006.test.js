import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("returns the sum of any numbers that are multiples of 3 or 5", () => {
    expect(sumMultiples([1, 3, 5])).toBe(8);
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
  });

  test("if the number is multiple of both 3 and 5, only add it once", () => {
    expect(sumMultiples([15, 3, 9, 8, 1, 10])).toBe(37);
  });

  test("If no multiples of 3 or 5 are found return 0", () => {
    expect(sumMultiples([4, 22, 2, 11, 8])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("returns true if only the characters C, G, T or A exist in the string", () => {
    expect(isValidDNA("CCGTTACGTA")).toBe(true);
    expect(isValidDNA("GGGGGGGGGG")).toBe(true);
  });

  test("return false if any character other than C, G, T or A exist", () => {
    expect(isValidDNA("CGTATAAGR")).toBe(false);
    expect(isValidDNA("QWERYUIP")).toBe(false);
    expect(isValidDNA("CGTA1")).toBe(false);
    expect(isValidDNA("C GTA")).toBe(false);
  });

  test("ignore case sensitivity", () => {
    expect(isValidDNA("cGtAggTt")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("returns 'Invalid DNA Sequence' if str is not valid (parse through isValidDNA) first", () => {
    expect(getComplementaryDNA("This is not DNA")).toBe("Invalid DNA Sequence");
    expect(getComplementaryDNA("StillGGnotTDNA")).toBe("Invalid DNA Sequence");
  });

  test("return string of complementary base pairs - T pairs to A, C pairs to G", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("GTCA")).toBe("CAGT");
    expect(getComplementaryDNA("AAGTC")).toBe("TTCAG");
  });
});

describe("isItPrime", () => {
  test("returns true if number is a prime", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(7793)).toBe(true);
  });

  test("returns false if number is not prime or not an integer", () => {
    expect(isItPrime(6)).toBe(false);
    expect(isItPrime(25)).toBe(false);
    expect(isItPrime(7.2)).toBe(false);
    expect(isItPrime(1)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("return an array of n arrays,each filled n items. 'fill' should be used as the filler of the arrays", () => {
    expect(createMatrix(1, "foo")).toEqual([["foo"]]);
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
    expect(createMatrix(5, "foo")).toEqual([
      ["foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo"],
    ]);
  });
  test("return an empty array if n is zero", () => {
    expect(createMatrix(0, "foo")).toEqual([]);
  });
});

describe("areWeCovered", () => {
  const staff = [
    { name: "Grogu", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Picard", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    { name: "Klaus", rota: ["Monday", "Wednesday", "Friday"] },
    { name: "Sylar", rota: ["Tuesday", "Wednesday", "Thursday", "Friday"] },
  ];

  test("returns true if there are at least 3 staff members scheduled for the given day", () => {
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Wednesday")).toBe(true);
    expect(areWeCovered(staff, "Friday")).toBe(true);
  });

  test("returns false if there are less than 3 staff members scheduled for the given day", () => {
    expect(areWeCovered(staff, "Monday")).toBe(false);
    expect(areWeCovered(staff, "Thursday")).toBe(false);
    expect(areWeCovered(staff, "Saturday")).toBe(false);
  });
});
