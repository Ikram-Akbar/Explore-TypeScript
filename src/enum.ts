
// enums allow us to declare a set of named constants

// enum example
// helps us to store constants

// numeric enum
// enum UserRequest {
//     ReadData,
//     // ReadData = 2,
//     SaveData,
//     UpdateData,
// }

// console.log(UserRequest);
// console.log(UserRequest.ReadData);
// console.log(UserRequest.SaveData);

// string enum
enum UserRequest {
    ReadData = "READ_DATA",
    // ReadData = 2,
    SaveData = "SAVE_DATA",
    UpdateData = "UPDATE_DATA",
}

console.log(UserRequest);
// console.log(UserRequest.ReadData);
// console.log(UserRequest.SaveData);
// console.log(UserRequest["UpdateData"]);

// Heterogeneous enum
enum NewUser {
    id = 101,
    name = "anisul",
}


enum UserReq {
    ReadData,
    UpdateDate, 
    DeleteData,
    CreateData,
};

console.log(UserReq);

