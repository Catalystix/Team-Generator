const { default: expect } = require('expect');
const Intern = require('../lib/Intern');
const name = "Drew";
const empId = 33;
const email = "come@me.com";
const school = 'lely';

test('initiate', () => {
    const Emp = new Intern();
    expect(Emp.getRole()).toBe('Intern');
});

test('will be the name', () => {
    
    const Emp = new Intern(name);
    expect(Emp.name).toBe(name);
    expect(Emp.getName()).toBe(name);
});

test('will be the ID', () => {
   
    const Emp = new Intern(name, empId);
    expect(Emp.id).toBe(empId);
    expect(Emp.getId()).toBe(empId);
});

test('will be the email', () => {
    
    const Emp = new Intern(name, empId, email);
    expect(Emp.email).toBe(email);
    expect(Emp.getEmail()).toBe(email);
});

test('will be school', () => {
    const Emp = new Intern(name, empId, email, school);
    expect(Emp.school).toBe(school);
    expect(Emp.getSchool()).toBe('School');


});