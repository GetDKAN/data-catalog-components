import {describe, expect, test} from '@jest/globals';
import { addTwoNumbers } from "./random";

test("adds two numbers", () => {
  expect(addTwoNumbers(1,2)).toBe(3);
})