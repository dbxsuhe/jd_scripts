/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [

  //'deviceid_pdj_jd=a65bf3d3e35893a0;o2o_m_h5_sid=04dc30e9-7225-49e6-a4d7-eae55457224d',
  //'deviceid_pdj_jd=22663db78ddeacf3;o2o_m_h5_sid=e8fbeef8-028d-4e6d-9c0c-988468cac50c',
  'deviceid_pdj_jd=7cc671e1a33e25d6;o2o_m_h5_sid=7aab1e67-2cd3-40d3-ad16-aae270f15d74'
 
]
// 判断环境变量里面是否有京东到家ck
if (process.env.JDDJ_COOKIE) {
  if (process.env.JDDJ_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JDDJ_COOKIE.split('&');
  } else if (process.env.JDDJ_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JDDJ_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JDDJ_COOKIE];
  }
}
if (JSON.stringify(process.env).indexOf('GITHUB') > -1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
    await process.exit(0);
  })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
//exports['CookieJDs'] = CookieJDs;
