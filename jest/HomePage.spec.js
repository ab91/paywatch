import React from "react";
import HomePage from "../src/components/pages/HomePage";

import renderer from "react-test-renderer";

describe("Snapshot suite", () => {
  it("renders as expected", () => {
    const tree = renderer.create(<HomePage></HomePage>).toJSON();
  });
});
