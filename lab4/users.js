// we use in memory database
let users = [
    { id: 1, name: "John Doe", mob : "1234567890" , email : "john.doe@example.com" },
    { id: 2, name: "Jane Smith", mob : "9876543210" , email : "jane.smith@example.com" },
    { id: 3, name: "Alice Johnson", mob : "5555555555" , email : "alice.johnson@example.com" }
];

let nextId = 4; 

  
const getAllUsers = () => {
    return users;
}

const getUsersById = (pid) =>{
    const found = users.find((user)=>user.id === pid)
    return found;

}
  

export const getUsers = () => users;

export const addUser = (user) => {
    user.id = nextId++;
    users.push(user);
    return user;
};

