module.exports = {
  presets: [
    "@babel/preset-env", 
    // allows you to omit importing react if you only use jsx in a file
    ["@babel/preset-react", { runtime: "automatic" }]
  ]
}