module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["core", "ui", "docs"]],
    "subject-case": [2, "never", ["sentence-case"]],
  },
};
