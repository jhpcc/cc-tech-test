import { render } from "enzyme";

import ProgressBar from "../../../src/components/progressBar";

import props from "../../../fixtures/single.json";

test("it renders sets width to percentage complete", () => {
  const { percentage } = props.investment;
  const rendered = render(<ProgressBar progress={percentage} />);

  expect(rendered.html()).contains(`width: ${percentage}`);
});
