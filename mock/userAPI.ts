const users = [
  { id: 0, name: 'Umi', nickName: 'U', gender: '男' },
  { id: 1, name: 'Fish', nickName: 'F', gender: '女' },
];

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
