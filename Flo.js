/*

项目名称：女性日记Flo
脚本作者：@ios151
使用说明：开脚本进软件

**************************************

[rewrite_local]
^https:\/\/api\.owhealth\.com\/subscriptions\/v1\/apple url script-response-body https://raw.githubusercontent.com/bhcm1011/bhht/main/Flo.js

[mitm]
hostname = api.owhealth.com

*/
var responseData = {
  "status": "active",
  "transaction_id": 190001670857044,
  "service_level": 2,
  "expiration_date": "5201-03-14T23:59:59Z",
  "auto_renew_status": true,
  "features": [],
  "subscription_manager": "https://t.me/ios151"
};

$done({
  body: JSON.stringify(responseData)
});
