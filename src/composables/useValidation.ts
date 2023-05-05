import { RULE_CONFIG, RULE } from "@/constants/rules.ts";

export function useValidation() {
  const emailValidationRule = (v: string) => {
    const pattern = RULE_CONFIG[RULE.IsEmail].pattern;

    const isValid = pattern.test(v);

    return {
      isValid,
      message: isValid ? null : "Email is not valid"
    };
  };

  const passwordValidationRule = (v: string) => {
    const isValid = v.length >= RULE_CONFIG[RULE.LongerThan8].pattern;

    return {
      isValid,
      message: isValid ? null : "Password must be at least 8 characters long"
    };
  };

  return {
    emailValidationRule,
    passwordValidationRule
  };
}
