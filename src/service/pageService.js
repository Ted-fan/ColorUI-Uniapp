import { request } from '../utils/request'
import { APP_URL, WXAPP_URL } from "../utils/constants"
const pageService = {
  //搜索活动
  searchActivities(text) {
    return request({
      url: APP_URL + "/activities",
      method: "get",
      data: {
        text: text,
      },
    });
  },
  //获取该活动下可用日期
  getDates(uuid) {
    return request({
      url: APP_URL + `/activities/${uuid}/dates`,
      method: "get"
    });
  },
  //获取该活动下所选日期的可用种类
  getEvent(uuid, day) {
    return request({
      url: APP_URL + `/activities/${uuid}/dates/${day}`,
      method: "get"
    });
  },
  //获取该活动下所选日期的可用种类
  testApi(UserName, Password) {
    return request({
      url: WXAPP_URL + `/api/Account/SystemLogin`,
      method: "get",
      data: {
        UserName: UserName,
        Password: Password
      },
    });
  },
}
export default pageService
