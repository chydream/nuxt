/* eslint-disable */
export default function (context) {
  const userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  const re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})')
  if (re.exec(userAgent) != null) {
    const rv = parseFloat(RegExp.$1)
    if (rv < 10) { // 低于IE10以下  跳转 提示浏览器升级 页面
      return context.redirect('https://support.dmeng.net/upgrade-your-browser.html')
    }
  }
}
