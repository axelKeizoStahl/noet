const users = []

const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://jojo:test1234@noet0.alby9bm.mongodb.net/?retryWrites=true&w=majority";



async function dboperation(doc, operation) {
    const client = new MongoClient(uri);
    try {
        

        const database = client.db("Noet-chats");
        const dbusers = database.collection("users");
        const dbchats = database.collection("chats");
        
        if (operation == "add") {
            await dbusers.insertOne(doc);

            console.log("added a user");
        } else if (operation == "delete"){
            await dbusers.deleteOne(doc);

            console.log('deleted');
        } else if (operation == "addroom") {
            if (!users.find(user => user.room === doc.room)) {
                dbchats.insertOne({room: doc.room, messages: []})
            }
            //console.log(existingroom)
            //if (!existingroom) await console.log('hi')
            //console.log()
        }
    } finally {
        await client.close();
    };
};






const addUser = (id, name, room) => {
    const existingUser = users.find(user => user.name.trim().toLowerCase() === name.trim().toLowerCase());

    if (existingUser) return { error: "Username has already been taken" };
    if (!name && !room) return { error: "Username and room are required" };
    if (!name) return { error: "Username is required" };
    if (!room) return { error: "Room is required" };

    const user = { id, name, room };
    
    dboperation(user, "addroom");
    users.push(user);

    dboperation(user, "add");

    

    return { user };
}

const getUser = id => {
    let user = users.find(user => user.id == id);
    return user;
}

const deleteUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) return users.splice(index, 1)[0];
    dboperation(getUser(id), "delete");
}

const getUsers = (room) => users.filter(user => user.room === room);





module.exports = { addUser, getUser, deleteUser, getUsers }
