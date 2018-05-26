import mock from 'mockjs'
/**
 * 根据日期\设备号\类型 获取报表数据
 */
mock.mock('chartOption/getOptionByDate', param => {
  let formParams = JSON.parse(param.body)
  let baseData = {
    'result': [{
        'key': '1514764800',
        'keyAsString': '',
        'avg': '37.77'
      },
      {
        'key': '1514851200',
        'keyAsString': '',
        'avg': '47.77'
      },
      {
        'key': '1514937600',
        'keyAsString': '',
        'avg': '67.77'
      },
      {
        'key': '1515024000',
        'keyAsString': '',
        'avg': '27.77'
      },
      {
        'key': '1515110400',
        'keyAsString': '',
        'avg': '37.77'
      },
      {
        'key': '1515196800',
        'keyAsString': '',
        'avg': '57.77'
      },
      {
        'key': '1515283200',
        'keyAsString': '',
        'avg': '87.77'
      },
      {
        'key': '1515369600',
        'keyAsString': '',
        'avg': '47.77'
      },
      {
        'key': '1515456000',
        'keyAsString': '',
        'avg': '37.77'
      },
      {
        'key': '1515542400',
        'keyAsString': '',
        'avg': '77.77'
      },
      {
        'key': '1515628800',
        'keyAsString': '',
        'avg': '67.77'
      },
      {
        'key': '1515715200',
        'keyAsString': '',
        'avg': '97.77'
      },
      {
        'key': '1515801600',
        'keyAsString': '',
        'avg': '47.77'
      },
      {
        'key': '1515888000',
        'keyAsString': '',
        'avg': '39.77'
      },
      {
        'key': '1515974400',
        'keyAsString': '',
        'avg': '44.77'
      },
      {
        'key': '1516060800',
        'keyAsString': '',
        'avg': '89.77'
      },
      {
        'key': '1516147200',
        'keyAsString': '',
        'avg': '92.77'
      },
      {
        'key': '1516233600',
        'keyAsString': '',
        'avg': '65.77'
      },
      {
        'key': '1516320000',
        'keyAsString': '',
        'avg': '49.77'
      },
      {
        'key': '1516406400',
        'keyAsString': '',
        'avg': '22.77'
      },
      {
        'key': '1516492800',
        'keyAsString': '',
        'avg': '88.77'
      },
      {
        'key': '1516579200',
        'keyAsString': '',
        'avg': '22.77'
      },
      {
        'key': '1516665600',
        'keyAsString': '',
        'avg': '33.77'
      },
      {
        'key': '1516752000',
        'keyAsString': '',
        'avg': '44.77'
      },
      {
        'key': '1516838400',
        'keyAsString': '',
        'avg': '55.77'
      },
      {
        'key': '1516924800',
        'keyAsString': '',
        'avg': '66.77'
      },
      {
        'key': '1517011200',
        'keyAsString': '',
        'avg': '77.77'
      },
      {
        'key': '1517097600',
        'keyAsString': '',
        'avg': '88.77'
      },
      {
        'key': '1517184000',
        'keyAsString': '',
        'avg': '67.77'
      },
      {
        'key': '1517270400',
        'keyAsString': '',
        'avg': '44.77'
      },
      {
        'key': '1517356800',
        'keyAsString': '',
        'avg': '44.77'
      }
    ],
    'httpCode': 200,
    'message': 'OK'
  }
  if (formParams.type === '2') {
    baseData = {
      'result': [{
          'key': '1514764800',
          'keyAsString': '',
          'avg': '22'
        },
        {
          'key': '1514851200',
          'keyAsString': '',
          'avg': '44.77'
        },
        {
          'key': '1514937600',
          'keyAsString': '',
          'avg': '33.77'
        },
        {
          'key': '1515024000',
          'keyAsString': '',
          'avg': '55.77'
        },
        {
          'key': '1515110400',
          'keyAsString': '',
          'avg': '44.77'
        },
        {
          'key': '1515196800',
          'keyAsString': '',
          'avg': '99.77'
        },
        {
          'key': '1515283200',
          'keyAsString': '',
          'avg': '22.77'
        },
        {
          'key': '1515369600',
          'keyAsString': '',
          'avg': '33.77'
        },
        {
          'key': '1515456000',
          'keyAsString': '',
          'avg': '99.77'
        },
        {
          'key': '1515542400',
          'keyAsString': '',
          'avg': '84.77'
        },
        {
          'key': '1515628800',
          'keyAsString': '',
          'avg': '44.77'
        },
        {
          'key': '1515715200',
          'keyAsString': '',
          'avg': '57.77'
        },
        {
          'key': '1515801600',
          'keyAsString': '',
          'avg': '98.77'
        },
        {
          'key': '1515888000',
          'keyAsString': '',
          'avg': '28.77'
        },
        {
          'key': '1515974400',
          'keyAsString': '',
          'avg': '59.77'
        },
        {
          'key': '1516060800',
          'keyAsString': '',
          'avg': '89.77'
        },
        {
          'key': '1516147200',
          'keyAsString': '',
          'avg': '43.77'
        },
        {
          'key': '1516233600',
          'keyAsString': '',
          'avg': '14.77'
        },
        {
          'key': '1516320000',
          'keyAsString': '',
          'avg': '39.77'
        },
        {
          'key': '1516406400',
          'keyAsString': '',
          'avg': '66.77'
        },
        {
          'key': '1516492800',
          'keyAsString': '',
          'avg': '78.77'
        },
        {
          'key': '1516579200',
          'keyAsString': '',
          'avg': '58.77'
        },
        {
          'key': '1516665600',
          'keyAsString': '',
          'avg': '24.77'
        },
        {
          'key': '1516752000',
          'keyAsString': '',
          'avg': '33.77'
        },
        {
          'key': '1516838400',
          'keyAsString': '',
          'avg': '45.77'
        },
        {
          'key': '1516924800',
          'keyAsString': '',
          'avg': '88.77'
        },
        {
          'key': '1517011200',
          'keyAsString': '',
          'avg': '38.77'
        },
        {
          'key': '1517097600',
          'keyAsString': '',
          'avg': '97.77'
        },
        {
          'key': '1517184000',
          'keyAsString': '',
          'avg': '45.77'
        },
        {
          'key': '1517270400',
          'keyAsString': '',
          'avg': '56.77'
        },
        {
          'key': '1517356800',
          'keyAsString': '',
          'avg': '34.77'
        }
      ],
      'httpCode': 200,
      'message': 'OK'
    }
  }

  return {
    state: 'SUCCESS',
    data: baseData
  }
})
