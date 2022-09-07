//less-loader的作用就是匹配到less文件 用less转化一下
const less = require('less');

function loader(source){
  let css;
  less.render(source, function(err, result){
    css = result.css;
  })

  return css;
}

module.exports = loader