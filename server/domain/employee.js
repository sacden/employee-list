/**
 * Creates a new employee.
 *
 * @param {number|null} id the ID
 * @param {string} firstName the first name
 * @param {string} lastName the last name
 * @param {string} email the email
 * @param {string} phoneNumber the phone number
 * @param {string} boss the boss
 * @param {string} status the status
 * @param {"SOFTWAREENGINEER"|"TEAMLEAD"|"ENGINEERINGMANAGER"|"HRMANAGER"|"RECRUITER"|"FINANCEMANAGER"|"ACCOUNTANT"|"MARKETINGMANAGER"|"MARKETINGSPECIALIST"|"CEO"} position
 * @param {"1"|"2"|"3"|"4"|"5"|"6"|"7"} department department of the company
 * @constructor
 */
const Employee = function (id, firstName, lastName, email, phoneNumber, boss, status, position, department) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.phoneNumber = phoneNumber;
  this.boss = boss;
  this.status = status;
  this.position = position;
  this.department = department;
};

module.exports = Employee;
