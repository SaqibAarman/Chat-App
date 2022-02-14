const users = [];

// To  Add New User
const addUser = ({ id, username, room }) => {
  //to clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // validate the data
  if (!username || !room) {
    return {
      error: "UserName And Room Are Required!",
    };
  }

  // check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  //validate username
  if (existingUser) {
    return {
      error: "UserName Is Already Used!",
    };
  }

  // store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

//To Remove User
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

//To Get User By Id
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

//To Get Users In Room
const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
