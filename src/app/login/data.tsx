// data.tsx

export interface UserData {
    username: string;
    password: string;
  }
  
  const users: UserData[] = [
    { username: "john_doe", password: "password123" },
    { username: "Anam", password: "123" },
    { username: "jane_doe", password: "securepass" },
    // Add more user entries as needed
  ];
  
  export default users;
  