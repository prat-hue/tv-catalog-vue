import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Menu from "@/components/Menu.vue";

describe("Menu", () => {
  it("Should load two menu items", () => {
    const wrapper = mount(Menu);
    expect(wrapper.text()).toContain("Home");
    expect(wrapper.text()).toContain("Search");
    expect(wrapper.findAll("#menu-item").length).toBe(2);
  });
  it("should call onPageChange when click a page item", async () => {
    const wrapper = mount(Menu);
    await wrapper.find("RouterLink").trigger("click");
    expect(wrapper.html()).toContain("Home");
    expect(wrapper.html()).toContain("Search");
  });
});
