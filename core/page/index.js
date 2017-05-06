
function Load(req, res, isContent) { return new Promise((resolve, reject) => {
  let post = req.body
  // if (post && post.pass == 'nextlevel') {
  //   req.session.user = post.user
  // }
  // if (req.session.user)
    // res.setData('user', req.session.user)
  resolve()
})}

module.exports = {
  Load,
}
