import { render } from "enzyme";
import { decode } from "he";

import Currency from "../../../src/components/currency";

test("it renders pound symbol", () => {
  const rendered = render(<Currency amount={[100, "GBP"]} />);

  expect(decode(rendered.html())).toContain("£");
});

test("it renders dollar symbol", () => {
  const rendered = render(<Currency amount={[100, "USD"]} />);

  expect(decode(rendered.html())).toContain("$");
});

test("it renders euro symbol", () => {
  const rendered = render(<Currency amount={[100, "EUR"]} />);

  expect(decode(rendered.html())).toContain("€");
});

test("it defaults to pound symbol", () => {
  const rendered = render(<Currency amount={[100, "PIE"]} />);

  expect(decode(rendered.html())).toContain("£");
});

test("it formats integrer by diving by ten to deal with floating point issue", () => {
  const rendered = render(<Currency amount={[150000, "EUR"]} />);

  expect(rendered.html()).toContain(150);
});
