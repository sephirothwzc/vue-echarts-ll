import mock from 'mockjs'
/**
 * 根据日期\设备号\类型 获取报表数据
 */
mock.mock('chartOption/getOptionByDate', param => {
  let baseData = {
    'result': [{
        'key': '1528658410213',
        'keyAsString': '',
        'avg': '29.83'
      },
      {
        'key': '1528744810213',
        'keyAsString': '',
        'avg': '67.77'
      },
      {
        'key': '1528831210213',
        'keyAsString': '',
        'avg': '80.86'
      },
      {
        'key': '1528917610213',
        'keyAsString': '',
        'avg': '74.20'
      },
      {
        'key': '1529004010213',
        'keyAsString': '',
        'avg': '67.31'
      },
      {
        'key': '1529090410213',
        'keyAsString': '',
        'avg': '54.41'
      },
      {
        'key': '1529176810213',
        'keyAsString': '',
        'avg': '14.10'
      },
      {
        'key': '1529263210213',
        'keyAsString': '',
        'avg': '90.47'
      },
      {
        'key': '1529349610213',
        'keyAsString': '',
        'avg': '13.72'
      },
      {
        'key': '1529436010213',
        'keyAsString': '',
        'avg': '80.51'
      },
      {
        'key': '1529522410213',
        'keyAsString': '',
        'avg': '91.50'
      },
      {
        'key': '1529608810213',
        'keyAsString': '',
        'avg': '92.39'
      },
      {
        'key': '1529695210213',
        'keyAsString': '',
        'avg': '39.09'
      },
      {
        'key': '1529781610213',
        'keyAsString': '',
        'avg': '94.96'
      },
      {
        'key': '1529868010213',
        'keyAsString': '',
        'avg': '63.09'
      },
      {
        'key': '1529954410213',
        'keyAsString': '',
        'avg': '62.77'
      },
      {
        'key': '1530040810213',
        'keyAsString': '',
        'avg': '70.18'
      },
      {
        'key': '1530127210213',
        'keyAsString': '',
        'avg': '49.58'
      },
      {
        'key': '1530213610213',
        'keyAsString': '',
        'avg': '52.31'
      },
      {
        'key': '1530300010213',
        'keyAsString': '',
        'avg': '40.57'
      },
      {
        'key': '1530386410213',
        'keyAsString': '',
        'avg': '38.80'
      },
      {
        'key': '1530472810213',
        'keyAsString': '',
        'avg': '86.99'
      },
      {
        'key': '1530559210213',
        'keyAsString': '',
        'avg': '26.43'
      },
      {
        'key': '1530645610213',
        'keyAsString': '',
        'avg': '71.88'
      },
      {
        'key': '1526437042917',
        'keyAsString': '',
        'avg': '25.19'
      },
      {
        'key': '1526523442917',
        'keyAsString': '',
        'avg': '57.38'
      },
      {
        'key': '1526609842917',
        'keyAsString': '',
        'avg': '28.59'
      },
      {
        'key': '1526696242917',
        'keyAsString': '',
        'avg': '78.82'
      },
      {
        'key': '1526782642917',
        'keyAsString': '',
        'avg': '43.27'
      },
      {
        'key': '1526869042917',
        'keyAsString': '',
        'avg': '34.80'
      }
    ],
    'httpCode': 200,
    'message': 'OK'
  }
  return {
    state: 'SUCCESS',
    data: baseData
  }
})
