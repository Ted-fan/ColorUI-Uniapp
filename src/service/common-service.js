import { request } from '../utils/request'
import { APP_URL, WXAPP_URL } from "../utils/constants"

export function getApi(parma) {
  return request({
    url: APP_URL + "/test/api",
    method: "get",
    data: {
      parma: parma,
    },
  });
}