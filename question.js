const students = [
    {name:'santo', id:1510},
    {name:'suvo', id:1511}
];
nameArray = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const nameList = element.name;
    const ids = element.id;
    console.log(nameList, ids);  
};