/******************************

脚本名称:   Scanner Pro
下载地址：商店
脚本作者：ios151
更新时间：2023年11月15日 04:51
问题反馈：https://t.me/ios151
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]


^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body 

[mitm] 

hostname = buy.itunes.apple.com

*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "request_date_ms": 1699995001696,
  "request_date": "2023-11-14T20:50:01Z",
  "subscriber": {
    "non_subscriptions": {
    },
    "first_seen": "2023-11-14T20:44:04Z",
    "original_application_version": "8.16.0.799",
    "other_purchases": {
    },
    "management_url": "https:\/\/apps.apple.com\/account\/subscriptions",
    "subscriptions": {
      "com.readdle.Scanner.subscription_ExpenseReport.month5.scanner8": {
        "original_purchase_date": "2023-11-14T20:46:47Z",
        "expires_date": "2099-11-21T20:46:46Z",
        "is_sandbox": false,
        "refunded_at": null,
        "store_transaction_id":"190001794132755",
        "unsubscribe_detected_at": "2023-11-14T20:49:18Z",
        "grace_period_expires_date": null,
        "period_type": "trial",
        "purchase_date": "2023-11-14T20:46:46Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "expense_report_subscription": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-11-14T20:46:46Z",
        "product_identifier": "com.readdle.Scanner.subscription_ExpenseReport.month5.scanner8",
        "expires_date": "2099-11-21T20:46:46Z"
      }
    },
    "original_purchase_date": "2023-11-14T20:40:14Z",
    "original_app_user_id": "$RCAnonymousID:57aceca2b5d94f0c80b83d5b0131be2e",
    "last_seen": "2023-11-14T20:44:04Z"
  }
}

$done({body : JSON.stringify(objc)});
