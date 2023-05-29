const users = [
  { name: "Heather", OS: "Ubuntu 18.04", type: "Linux" },
  { name: "Paul", OS: "Ubuntu 16.04", type: "Linux" },
  { name: "Sheila", OS: "Windows 10", type: "Windows" },
  { name: "Jane", OS: "Mint 19.1", type: "Linux" },
  { name: "Jen", OS: "CentOS 7", type: "Linux" },
  { name: "David", OS: "Fedora 28", type: "Linux" },
  { name: "Pedro", OS: "Windows 95", type: "Windows" },
];

let linuxUsers = 0;

users.forEach((user) => user.type === "Linu" && linuxUsers++);

console.log(linuxUsers);
