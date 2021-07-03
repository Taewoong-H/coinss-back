module.exports.get = (req, res, next) => {
  try {
    const users = [
      {
        nickname: 'nickname_1',
        password: 'password_1'
      },
      {
        nickname: 'nickname_2',
        password: 'password_2'
      },
      {
        nickname: 'nickname_3',
        password: 'password_3'
      }
    ]
    return res.json({ users })
  } catch (err) {
    next(err)
  }
}