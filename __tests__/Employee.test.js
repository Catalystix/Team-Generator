const Employee = require('../lib/Employee')

test('initiate', () => {
    const Emp = new Employee();
    expect(typeof(Emp)).toBe('');
});

test('will be the name', () => {
    const name = "Drew";
    const Emp = new Employee(name);
    expect(typeof(Emp)).toBe(name);
});

test('will be the ID', () => {
    const empId = 33;
    const Emp = new Employee(empId);
    expect(typeof(Emp)).toBe(empId);
});

test('will be the email', () => {
    const email = "come@me.com";
    const Emp = new Employee(email);
    expect(typeof(Emp)).toBe(email);
})

