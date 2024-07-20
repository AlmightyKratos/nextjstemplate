import { expect, test } from "@playwright/test"

test("do this thing", () => {
  const jsonVal = { 69: 420 }
  expect(jsonVal[69]).toBe(420)
})
