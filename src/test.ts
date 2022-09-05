import { PlatPricesClient } from ".";

const api = new PlatPricesClient("DRTrqGQsECiePYS07Ib14hFcY8qmyWEi");

api
  .getRecentGamesOnSale()
  .then((res) => console.log(res))
  .catch((error) => console.log("errrorrr", error));
