import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header", () => {
  it("renders properly", () => {
    const wrapper = mount(Header, { props: { title: "Catalog" } });
    expect(wrapper.text()).toContain("Catalog");
  });
});
