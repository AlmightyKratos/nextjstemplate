import { expect, test } from "@playwright/test"

test("should navigate to the about page", async ({ page }) => {
  await page.goto("http://localhost:3000/")
  expect(true).toBe(true)
})

test("do this thing", () => {
  const jsonVal = { 69: 420 }
  expect(jsonVal[69]).toBe(420)
})
