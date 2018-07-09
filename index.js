module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  rules: {
    "import/prefer-default-export": [0],
    "prettier/prettier": [2],
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
  }
};
