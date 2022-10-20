import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MenuItem from "@/components/MenuItem.vue";

describe('MenuItem', () => {
    it('Should load content in slots', () => {
        const wrapper = mount(MenuItem, {
            slots: {
                icon: '<div>Icon</div>',
                heading: '<div>Heading</div>',
            }
        })
        expect(wrapper.html()).toContain('<div>Icon</div>')
        expect(wrapper.html()).toContain('<div>Heading</div>')
    })
})
