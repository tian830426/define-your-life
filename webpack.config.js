const path = require("path");

module.exports = {
  //建製的模式（ 差別在webpack 優化 ）
  // production 上線模式
  // development 開發模式 -> 除錯比較有參考價值
  resolve :{
    extensions:[".js",".jsx"]
  },
  mode: "development",
  //入口
  entry: "./src/index.jsx",
  //輸出
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
  },
  //DevServer 設定
  //伺服器根目錄
  devServer: {
    allowedHosts: ["all"],
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  },
  //模組載入規則
  module: {
    rules: [
      // css樣式表載入規則
      // sass樣式表載入規則
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        // 多一個 jsx 的解析
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
    },
    ],
  },
};

// bundle - 包裹 捆住