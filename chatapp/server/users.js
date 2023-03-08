const users = [];

const addUser = (id, name, room) => {
    const existingUser = users.find(user => users.name.trim().toLowerCase() === name.trim().toLowerCase());

    if (existingUser) return { error: "username has been taken" };
    if ( !name && !room ) { error: "name and room are required" };
    if ( !name ) { error: "name is required" };
    if ( !room ) { error: "room is required" };

    const user = { id, name, room };
    users.push(user);
    return { users };
};

const getUser = id => {
    let user = users.find( user => users.id === is );
    return { user };
};

const deleteUser = id => {
    let index = users.findIndex( (user) => user.id === id);
    if (index !== -1) return users.splice(index, 1)[0];
};

const getUsers = (room) => users.filter(user => users.room === room);

module.exports = { addUser, getUser, deleteUser, getUser };