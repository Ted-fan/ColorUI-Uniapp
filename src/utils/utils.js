
import { request } from './request'
import { APP_URL, WXAPP_URL } from "./constants"
export function getOpenId (js_code) {
  return request({
    url: WXAPP_URL + `/api/WebPayWeChatM/GetMessageByCode`,
    method: "get",
    data: {
      js_code: js_code
    },
  });
}
// GET /api/WebPayWeChatM/GetMessageByCode