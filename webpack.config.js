module: {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.jpg$/,
      use: "file-loader",
    },
  ];
}
