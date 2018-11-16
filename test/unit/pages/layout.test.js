import { shallow, render } from "enzyme";

import Layout from "../../../src/pages/layout";

const MyPage = () => <div>I am a page</div>;

test("it renders items within the page layout", () => {
  const renderer = shallow(
    <Layout>
      <MyPage />
    </Layout>
  );
  const page = renderer.find(MyPage);

  expect(page.length).toBe(1);
});

test("it renders items into the footer", () => {
  const footerProps = [<p>hello world</p>];
  const renderer = render(
    <Layout footerProps={footerProps}>
      <MyPage />
    </Layout>
  );
  const html = renderer.find("p").html();

  expect(html).toContain("hello world");
});
