const { default: expect } = require('expect');
const Engineer = require('../lib/Engineer');
const name = "Drew";
const empId = 33;
const email = "come@me.com";
const gitHub = 'catalystix@';

test('initiate', () => {
    const Emp = new Engineer();
    expect(Emp.getRole()).toBe('Engineer');
});

test('will be the name', () => {
    
    const Emp = new Engineer(name);
    expect(Emp.name).toBe(name);
    expect(Emp.getName()).toBe(name);
});

test('will be the ID', () => {
   
    const Emp = new Engineer(name, empId);
    expect(Emp.id).toBe(empId);
    expect(Emp.getId()).toBe(empId);
});

test('will be the email', () => {
    
    const Emp = new Engineer(name, empId, email);
    expect(Emp.email).toBe(email);
    expect(Emp.getEmail()).toBe(email);
});

test('will be github', () => {
    const Emp = new Engineer(name, empId, email, gitHub);
    expect(Emp.gitHub).toBe(gitHub);
    expect(Emp.getGitHub()).toBe(gitHub);
console.log('this is github', Emp.gitHub);
console.log('this is github function', Emp.getGitHub);

});
