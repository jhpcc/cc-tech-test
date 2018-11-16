import { shallow } from "enzyme";

import Header from "../../../src/components/header";

const MyComponent = () => <div />;

test("it renders children", () => {
  const rendered = shallow(
    <Header>
      <MyComponent />
    </Header>
  );
  const myComponent = rendered.find(MyComponent);

  expect(myComponent.length).toBe(1);
});
