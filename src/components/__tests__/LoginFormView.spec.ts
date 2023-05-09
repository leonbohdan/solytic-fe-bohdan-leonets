import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import router from "@/router";
import { useLoginStore } from "@/stores/useLogin";
import { RULE } from "@/constants/rules";

import LoginFormView from "@/views/LoginFormView.vue";

const EMAIL_RULE_INDICATOR_CLASS = {
  pass: "email-hint__rule--pass",
  fail: "email-hint__rule--fail"
};

const PASSWORD_RULE_INDICATOR_CLASS = {
  pass: "password-hint__rule--pass",
  fail: "password-hint__rule--fail"
};

describe("LoginFormView", () => {
  let wrapper: any;

  const setPasswordTo = (password: string) => {
    return wrapper.get('[data-test="password-field"]').setValue(password);
  };

  beforeEach(() => {
    wrapper = mount(LoginFormView, {
      global: {
        plugins: [createPinia(), router]
      }
    });
    useLoginStore();
  });

  it("login form should render", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  describe("email validation", () => {
    const examples = [
      {
        email: "ron@dot.com",
        passedRules: [RULE.IsEmail],
        description: "email is valid"
      }
    ];
    it.each(examples)(
      'with password set to "$email" should indicate $description',
      async ({ email, passedRules }) => {
        expect.hasAssertions();
        const failedRules = [RULE.IsEmail].filter((rule) => !passedRules.includes(rule));

        await setPasswordTo(email);

        passedRules.forEach((rule) => {
          expect(
            wrapper
              .get(`[data-test-rule-indicator="${rule}"]`)
              .classes(EMAIL_RULE_INDICATOR_CLASS.pass)
          ).toBeTruthy();
          expect(
            wrapper
              .get(`[data-test-rule-indicator="${rule}"]`)
              .classes(EMAIL_RULE_INDICATOR_CLASS.fail)
          ).toBeFalsy();
        });

        failedRules.forEach((rule) => {
          expect(
            wrapper
              .get(`[data-test-rule-indicator="${rule}"]`)
              .classes(EMAIL_RULE_INDICATOR_CLASS.fail)
          ).toBeTruthy();
          expect(
            wrapper
              .get(`[data-test-rule-indicator="${rule}"]`)
              .classes(EMAIL_RULE_INDICATOR_CLASS.pass)
          ).toBeFalsy();
        });
      }
    );
  });

  describe("password validation", () => {
    const examples = [
      {
        password: "",
        passedRules: [],
        description: "all rules failed"
      },
      {
        password: "ab123fgh",
        passedRules: [RULE.LongerThan8],
        description: "longer than 8"
      }
    ];

    it.each(examples)(
      'with password set to "$password" should indicate $description',
      async ({ password, passedRules }) => {
        expect.hasAssertions();
        const failedRules = [RULE.LongerThan8].filter((rule) => !passedRules.includes(rule));

        await setPasswordTo(password);

        passedRules.forEach((rule) => {
          expect(
            wrapper
              .get(`[data-test-rule-indicator="${rule}"]`)
              .classes(PASSWORD_RULE_INDICATOR_CLASS.pass)
          ).toBeTruthy();
          expect(
            wrapper
              .get(`[data-test-rule-indicator="${rule}"]`)
              .classes(PASSWORD_RULE_INDICATOR_CLASS.fail)
          ).toBeFalsy();
        });

        failedRules.forEach((rule) => {
          expect(
            wrapper
              .get(`[data-test-rule-indicator="${rule}"]`)
              .classes(PASSWORD_RULE_INDICATOR_CLASS.fail)
          ).toBeTruthy();
          expect(
            wrapper
              .get(`[data-test-rule-indicator="${rule}"]`)
              .classes(PASSWORD_RULE_INDICATOR_CLASS.pass)
          ).toBeFalsy();
        });
      }
    );
  });
});
