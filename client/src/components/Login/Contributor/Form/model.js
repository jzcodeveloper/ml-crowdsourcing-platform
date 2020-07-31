const strInput = (value) => ({
  value: value,
  validation: [true, ""],
  validators: {
    required: [true, "Por favor, rellena este campo."],
  },
});

export default Object.freeze({
  username: strInput(""),
  email: strInput(""),
  password: strInput(""),
});
