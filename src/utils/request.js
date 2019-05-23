// 封装微信请求
export function request({ url, method, data }) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: method,
      data: data,
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        if (res.data) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}
export default { request }
