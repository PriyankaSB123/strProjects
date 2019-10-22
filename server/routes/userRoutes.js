module.exports = (app) => {
    const user = require('../controllers/userController.js');

    // Create a new Note
    

    app.route('/users')
    .get(user.listusers)
    .post(user.create);


 /* app.route('/tasks/:taskId')
    .get(user.read_a_task)
    .put(user.update_a_task)
    .delete(user.delete_a_task);*/
}