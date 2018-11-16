import { shallow } from "enzyme";

import Footer from "../../../src/components/footer";

const MyComponent = () => <div />;

test("it renders children", () => {
  const rendered = shallow(
    <Footer>
      <MyComponent />
    </Footer>
  );
  const myComponent = rendered.find(MyComponent);

  expect(myComponent.length).toBe(1);
});
