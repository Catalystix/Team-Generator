const { default: expect } = require('expect');
const Manager = require('../lib/Manager');
const name = "Drew";
const empId = 33;
const email = "come@me.com";
const officeNumber = '7658309';

test('initiate', () => {
    const Emp = new Manager();
    expect(Emp.getRole()).toBe('Manager');
});

test('will be the name', () => {
    
    const Emp = new Manager(name);
    expect(Emp.name).toBe(name);
    expect(Emp.getName()).toBe(name);
});

test('will be the ID', () => {
   
    const Emp = new Manager(name, empId);
    expect(Emp.id).toBe(empId);
    expect(Emp.getId()).toBe(empId);
});

test('will be the email', () => {
    
    const Emp = new Manager(name, empId, email);
    expect(Emp.email).toBe(email);
    expect(Emp.getEmail()).toBe(email);
});

test('will be officeNumber', () => {
    const Emp = new Manager(name, empId, email, officeNumber);
    expect(Emp.officeNumber).toBe(officeNumber);
    expect(Emp.getRole()).toBe('Manager');


});