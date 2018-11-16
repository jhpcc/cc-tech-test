import { render, shallow } from "enzyme";

import DaysLeft from "../../../src/components/daysLeft";

import props from "../../../fixtures/single.json";

test("it renders singlular for 1 day", () => {
  const now = new Date(2018, 11, 2);
  const rendered = render(<DaysLeft expiresAt={props.expires_at} now={now} />);

  expect(rendered.html()).toBe("1 day");
});

test("it renders plural for multiple days", () => {
  const now = new Date(2018, 10, 2);
  const rendered = render(<DaysLeft expiresAt={props.expires_at} now={now} />);

  expect(rendered.html).toContain("2 days");
});
