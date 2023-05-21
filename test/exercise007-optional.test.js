import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise007-optional";

describe("sumDigits", () => {
  test("returns the sum of digits", () => {
    expect(sumDigits(123)).toEqual(6);
    expect(sumDigits(987654321)).toEqual(45);
  });
  test("returns same digit if only one passed", () => {
    expect(sumDigits(5)).toEqual(5);
    expect(sumDigits(0)).toEqual(0);
  });
});

describe("createRange", () => {
  test("returns the range with the step provided", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
  });

  test("returns range with step = 1 if not provided", () => {
    expect(createRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });
  test("returns range with step = 1 if step is set to 0", () => {
    expect(createRange(1, 5, 0)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("getScreentimeAlertList", () => {
  const users = [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
        {
          date: "2019-05-01",
          usage: { twitter: 34, instagram: 22, facebook: 40 },
        },
        {
          date: "2019-05-02",
          usage: { twitter: 56, instagram: 40, facebook: 31 },
        },
        {
          date: "2019-05-03",
          usage: { twitter: 12, instagram: 15, facebook: 19 },
        },
        {
          date: "2019-05-04",
          usage: { twitter: 10, instagram: 56, facebook: 61 },
        },
      ],
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
        {
          date: "2019-06-11",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
        },
        {
          date: "2019-06-13",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
        },
        {
          date: "2019-06-14",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
        },
      ],
    },
  ];

  test("returns usernames with > 100 mins of screentime for a given date", () => {
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
  });

  test("returns empty array if no users have > 100 mins of screentime for a given date", () => {
    expect(getScreentimeAlertList(users, "2019-06-11")).toEqual([]);
  });
});

describe("hexToRGB", () => {
  test("return correct rgb values for supplied hex code", () => {
    expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
  });
});

describe("findWinner", () => {
  test("returns X when player X wins in a row", () => {
    const board = [
      ["X", "X", "X"],
      ["0", null, "0"],
      [null, null, "X"],
    ];
    expect(findWinner(board)).toBe("X");
  });

  test("returns 0 when player 0 wins in a column", () => {
    const board = [
      ["0", "X", null],
      ["0", null, "X"],
      ["0", null, "X"],
    ];
    expect(findWinner(board)).toBe("0");
  });

  test("returns X when player X wins in a diagonal", () => {
    const board = [
      ["X", "0", null],
      ["0", "X", "0"],
      [null, null, "X"],
    ];
    expect(findWinner(board)).toBe("X");
  });

  test("returns null when there is no winner", () => {
    const board = [
      ["X", "0", null],
      [null, "0", "0"],
      ["0", null, "X"],
    ];
    expect(findWinner(board)).toBe(null);
  });
});
