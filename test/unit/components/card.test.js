import { render, shallow } from "enzyme";

import Card from "../../../src/components/card";
import Stats from "../../../src/components/stats";

import props from "../../../fixtures/single.json";

test("it renders a hero", () => {
  const renderedCard = render(<Card {...props} />);
  const image = renderedCard.find("img");

  expect(image.length).toBe(1);
});

test("it renders a heading", () => {
  const renderedCard = render(<Card {...props} />);
  const header = renderedCard.find("h2");

  expect(header.text()).toBe(props.name);
});

test("it renders a description", () => {
  const renderedCard = render(<Card {...props} />);
  const header = renderedCard.find("h2");

  expect(header.text()).toBe(props.name);
});

test("it renders a stats component", () => {
  const renderedCard = shallow(<Card {...props} />);
  const stats = renderedCard.find(Stats);

  expect(stats.length).toBe(1);
});
