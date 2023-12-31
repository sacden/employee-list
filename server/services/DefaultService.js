/* eslint-disable no-unused-vars */
const Service = require("./Service");

const CodebookItem = require("../domain/codebook");
const Employee = require("../domain/employee");
const employeeDao = require("../dao/employee-dao");

const codebooks = createCodebooks();
persistSampleEmployees();

/**
 * Deletes a employee
 * Deletes a `Employee`.
 *
 * employeeId Long Employee id
 * no response value expected for this operation
 * */
const deleteEmployee = ({ employeeId }) =>
  new Promise(async (resolve, reject) => {
    try {
      employeeDao.deleteById(employeeId);
      resolve({ code: 204 });
    } catch (e) {
      reject(Service.rejectResponse("Not found", 404));
    }
  });
/**
 * Obtains a list of items of a codebook
 * Obtains a list of `CodebookItem`s. The list is sorted by `order`.
 *
 * codebookCode String Codebook code
 * returns List
 * */
const getCodebookItems = ({ codebookCode }) =>
  new Promise(async (resolve, reject) => {
    try {
      const codebook = codebooks[codebookCode] ?? [];
      resolve(Service.successResponse(codebook));
    } catch (e) {
      reject(Service.rejectResponse(e.message));
    }
  });
/**
 * Obtains a employee
 * Obtains a `Employee` by its id.
 *
 * employeeId Long Employee id
 * returns Employee
 * */
const getEmployee = ({ employeeId }) =>
  new Promise(async (resolve, reject) => {
    try {
      const employee = employeeDao.findById(employeeId);
      if (employee) {
        resolve(Service.successResponse(employee));
      } else {
        reject(Service.rejectResponse("Not found", 404));
      }
    } catch (e) {
      reject(Service.rejectResponse(e.message));
    }
  });
/**
 * Obtains a list of employees
 * Obtains a list of `Employee`s. The list is sorted by `lastName` and then by `firstName`.
 *
 * returns List
 * */
const getEmployees = () =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(Service.successResponse(employeeDao.findAll()));
    } catch (e) {
      reject(Service.rejectResponse(e.message));
    }
  });
/**
 * Creates a employee
 * Creates a `Employee`.
 *
 * employee Employee Employee
 * returns Long
 * */
const postEmployee = ({ employee }) =>
  new Promise(async (resolve, reject) => {
    try {
      const createdEmployee = employeeDao.save(
        new Employee(null, employee.firstName, employee.lastName, employee.email, employee.phoneNumber, employee.boss, employee.status, employee.profileImage, employee.position, employee.department)
      );
      resolve(Service.successResponse(createdEmployee.id, 200));
    } catch (e) {
      reject(Service.rejectResponse(e.message));
    }
  });
/**
 * Saves a employee
 * Saves a `Employee`.
 *
 * employeeId Long Employee id
 * employee Employee Employee
 * no response value expected for this operation
 * */
const putEmployee = ({ employeeId, employee }) =>
  new Promise(async (resolve, reject) => {
    try {
      employeeDao.save(
        new Employee(
          Number(employeeId),
          employee.firstName,
          employee.lastName,
          employee.email,
          employee.phoneNumber,
          employee.boss,
          employee.status,
          employee.profileImage,
          employee.position,
          employee.department
        )
      );
      resolve({ code: 204 });
    } catch (e) {
      reject(Service.rejectResponse("Not found", 404));
    }
  });

function persistSampleEmployees() {
  employeeDao.save(new Employee(null, "John", "Doe", "john.doe@example.com", "+1234567890", "Alice Johnson", "active", "profile-picture-1.jpeg", "SOFTWAREENGINEER", "IT"));
  employeeDao.save(new Employee(null, "Alice", "Johnson", "alice.johnson@example.com", "+1987654321", "Bob Smith", "active", "profile-picture-6.jpeg", "TEAMLEAD", "IT"));
  employeeDao.save(new Employee(null, "Bob", "Smith", "bob.smith@example.com", "+1122334455", "Eva Brown", "active", "profile-picture-2.jpeg", "ENGINEERINGMANAGER", "IT"));
  employeeDao.save(new Employee(null, "Eva", "Brown", "eva.brown@example.com", "+3322114455", "Grace Wilson", "active", "profile-picture-7.jpeg", "HRMANAGER", "HR"));
  employeeDao.save(new Employee(null, "Grace", "Wilson", "grace.wilson@example.com", "+4455667788", "Henry Turner", "active", "profile-picture-8.jpeg", "RECRUITER", "HR"));
  employeeDao.save(new Employee(null, "Henry", "Turner", "henry.turner@example.com", "+7788990011", "Ivy Martin", "active", "profile-picture-3.jpeg", "FINANCEMANAGER", "FINANCE"));
  employeeDao.save(new Employee(null, "Ivy", "Martin", "ivy.martin@example.com", "+8899001122", "Jack White", "active", "profile-picture-4.jpeg", "ACCOUNTANT", "FINANCE"));
  employeeDao.save(new Employee(null, "Jack", "White", "jack.white@example.com", "+9988776655", "Katie Taylor", "active", "profile-picture-5.jpeg", "MARKETINGMANAGER", "MARKETING"));
  employeeDao.save(new Employee(null, "Katie", "Taylor", "katie.taylor@example.com", "+1122334455", "Laura Clark", "active", "profile-picture-9.jpeg", "MARKETINGSPECIALIST", "MARKETING"));
  employeeDao.save(new Employee(null, "Laura", "Clark", "laura.clark@example.com", "+6677889900", "Laura Clark", "active", "profile-picture-10.jpeg", "CEO", "BOARD"));
}

function createCodebooks() {
  return {
    POSITION: [
      new CodebookItem("SOFTWAREENGINEER", { cs: "Programátor", en: "Software Engineer" }, 1),
      new CodebookItem("TEAMLEAD", { cs: "Team Leader", en: "Team Lead" }, 2),
      new CodebookItem("ENGINEERINGMANAGER", { cs: "Manažer inženýringu", en: "Engineering Manager" }, 3),
      new CodebookItem("HRMANAGER", { cs: "HR Manažér", en: "HR Manager" }, 4),
      new CodebookItem("RECRUITER", { cs: "Náborář", en: "Recruiter" }, 5),
      new CodebookItem("FINANCEMANAGER", { cs: "Manažer financí", en: "Finance Manager" }, 6),
      new CodebookItem("ACCOUNTANT", { cs: "Účetní", en: "Accountant" }, 7),
      new CodebookItem("MARKETINGMANAGER", { cs: "Marketingový manažer", en: "Marketing Manager" }, 8),
      new CodebookItem("MARKETINGSPECIALIST", { cs: "Marketingový specialista", en: "Marketing Specialist" }, 9),
      new CodebookItem("CEO", { cs: "Výkonný ředitel", en: "CEO" }, 10),
    ],
    DEPARTMENT: [
      new CodebookItem("IT", { cs: "IT", en: "Engineering" }, 1),
      new CodebookItem("HR", { cs: "HR", en: "Human Resources" }, 2),
      new CodebookItem("FINANCE", { cs: "Finance", en: "Finance" }, 2),
      new CodebookItem("MARKETING", { cs: "Marketing", en: "Marketing" }, 2),
      new CodebookItem("BOARD", { cs: "Board", en: "Executive" }, 2),
    ],
  };
}

module.exports = {
  deleteEmployee,
  getCodebookItems,
  getEmployee,
  getEmployees,
  postEmployee,
  putEmployee,
};
