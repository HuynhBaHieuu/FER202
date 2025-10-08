function Exercise5() {
    const people = [
        { name: "Ann", age: 19 },
        { name: "Bob", age: 12 },
        { name: "Jane", age: 15 },
        { name: "Tom", age: 22 },
        { name: "Sue", age: 17 }
    ];

    // Lọc tuổi teen và map sang chuỗi "Tên (tuổi)"
    const teens = people
        .filter(person => person.age >= 13 && person.age <= 19)
        .map(person => `${person.name} (${person.age})`);
    const secondPerson = people[1]
    const isTeen = secondPerson.age >= 13 && secondPerson.age <= 19;
    return (
        <div>
            <h2>Exercise 5</h2>
            {teens.map((str, idx) => (
                <p key={idx}>{str}</p>
            ))}
            <p>secondPerson: {JSON.stringify(secondPerson)}</p>
            <p>Result: {isTeen ? "tuoi teen" : "ko phai"}</p>
            
        </div>
    );
}
export default Exercise5;