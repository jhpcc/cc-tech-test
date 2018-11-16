import { render, shallow } from "enzyme";

import Card from "../../../src/components/card";
import Investments from "../../../src/pages/investments";

import props from "../../../fixtures/api.json";

test("it renders cards", () => {
  const items = props.slice(0, 6);
  const renderer = shallow(<Investments items={items} />);
  const cards = renderer.find(Card);

  expect(cards.length).toBe(items.length);
});
