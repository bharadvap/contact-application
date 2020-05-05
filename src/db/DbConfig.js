// In this file we are configure our data base and add tables and configure it.
export const DBConfig = {
  name: "ContactApllication",
  version: 1,
  objectStoresMeta: [
    {
      store: "user",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "email", keypath: "email", options: { unique: false } },
        { name: "password", keypath: "password", options: { unique: false } },
        {
          name: "confirmationPassowrd",
          keypath: "confirmationPassowrd",
          options: { unique: false },
        },
        { name: "token", keypath: "token", options: { unique: false } },
      ],
    },
    {
      store: "contact",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "email", keypath: "email", options: { unique: false } },
        { name: "name", keypath: "name", options: { unique: false } },
        { name: "userId", keypath: "userId", options: { unique: false } },
        {
          name: "phoneNo",
          keypath: "phoneNo",
          options: { unique: false },
        },
        { name: "image", keypath: "image", options: { unique: false } },
      ],
    },
  ],
};
