// 创建一个style标签
function loader(source){
  const code = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)}
    document.head.appendChild(style);
  `;
  // 把代码里面的 \n 变成 \\n
  return code.replace(/\\/g,'\\\\');
}

module.exports = loader