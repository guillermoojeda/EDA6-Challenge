/**
 * Prints in console a list of users, based on server response.
 * 
 * @param {Object} users is the response object received immediately after login 
 */

function displayUsers(users) {
  for (var i = 0; i < users.data.users.length; i++) {
    console.log(' ');
    console.log('Connected users:')
    console.log(users.data.users[i]);
  }
}


const sampleMessage = {
  "event": "list_users",
  "data": {
    "users": ["Player 1", "Player 2"]
  }
}

displayUsers(sampleMessage);

module.exports = displayUsers;
