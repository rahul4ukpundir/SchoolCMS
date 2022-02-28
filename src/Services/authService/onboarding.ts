import axios from "axios";
import FIUser from "../../models/FIUser";
import store from "../../stores";
import { attachInterceptors, authorize, tenantInfo } from "../interceptors";
import { storage } from "../../_helpers";
const jwt = require("jsonwebtoken");


export async function isUserOnBoarded() {
  let accessToken = storage.getItem("access_token");
  let idToken = storage.getItem("id_token");

  if (!accessToken) {
    return false;
  }

  if (!idToken) {
    return false;
  }

  let decodedIdToken = jwt.decode(idToken);

  let forgeUser = new FIUser();

  forgeUser.avatar = decodedIdToken.avatar;
  forgeUser.lastName = decodedIdToken.family_name;
  forgeUser.firstName = decodedIdToken.given_name;
  forgeUser.displayName = decodedIdToken.name;
  forgeUser.preferredUserName = decodedIdToken.preferred_username;
  forgeUser.email = decodedIdToken.email;
  forgeUser.subId = decodedIdToken.sub;
  var url = store.globalStore.EnvVaribles.waOnBoardingEndpoint + "users/OnBoard";
  return attachInterceptors(axios.create(), [authorize, tenantInfo], []).post(
    url,
    JSON.stringify(forgeUser),
    {
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );
}

export function clearOnBoardingNotification() {
  storage.setItem("OnBoarded", "true");
}
