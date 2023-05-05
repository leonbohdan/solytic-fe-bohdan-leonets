export const RULE = Object.freeze({
  IsEmail: "IsEmail",
  LongerThan8: "LongerThan8"
});

export const RULE_CONFIG = Object.freeze({
  [RULE.IsEmail]: {
    name: "IsEmail",
    pattern:
      /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/
  },
  [RULE.LongerThan8]: {
    name: "LongerThan8",
    pattern: 8
  }
});
