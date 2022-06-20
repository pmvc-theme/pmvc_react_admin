import { expect } from "chai";
import { render } from "reshow-unit";

import VerticalMenu from "../VerticalMenu";

describe("Atoms page Test", () => {
  it("basic test", () => {
    const wrap = render(<VerticalMenu />);
    const html = wrap.html();
    expect(html).to.have.string("div");
  });
});
