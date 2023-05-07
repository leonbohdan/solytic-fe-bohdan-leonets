import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia/dist/pinia";
import { useLoginStore } from "@/stores/useLogin";

import LoginFormView from "@/views/LoginFormView.vue";

describe("LoginFormView", () => {
  let wrapper: any;

  const setPasswordTo = (password: string | number) => {
    return wrapper.get('[data-test="password-field"]').setValue(password);
  };

  beforeEach(() => {
    wrapper = mount(LoginFormView, {
      global: {
        plugins: [createPinia()]
      }
    });
    useLoginStore();
  });

  it("should render", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  // it("renders properly", () => {
  //   const wrapper = mount(LoginFormView, { props: { msg: "Hello Vitest" } });
  //   expect(wrapper.text()).toContain("Hello Vitest");
  // });
});
