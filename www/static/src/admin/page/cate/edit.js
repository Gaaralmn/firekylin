module.exports = {
  path: 'edit/:id',
  getComponent(nextState, callback) {
    callback(null, require('../../component/cate_create'));
  }
}
