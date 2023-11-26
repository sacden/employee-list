const employeeSequence = (() => {
  let lastId = 0;
  return {
    /**
     * Returns the next ID in the sequence.
     *
     * @return {number} the next ID in the sequence
     */
    next: () => ++lastId,
  };
})();

/**
 * Simple DAO for working with employee instances.
 *
 * @type {{findById: (function(id: number): Employee | null), save: (function(employee: Employee): Employee), deleteById: (function(id: number): void), findAll: (function(): Employee[])}}
 */
const employeeDao = (() => {
  /**
   * Internal database of employees.
   *
   * @type {{[key: number]: Employee}}
   */
  const employees = {};
  return {
    /**
     * Finds all employees, ordered by ID in ascending order.
     *
     * @return {Employee[]} the employees
     */
    findAll: () => Object.values(employees).sort((a, b) => a.id - b.id),

    /**
     * Finds a employee by their ID.
     *
     * @param {number} id the employee ID
     * @return {Employee | null} the employee or `null` if they cannot be found
     */
    findById: (id) => employees[id] ?? null,

    /**
     * Saves a employee.
     *
     * - If the employee has no ID, it is generated and the employee is added to the database.
     * - If the employee has an ID, it is updated in the database. If there is no employee in the database with a
     * corresponding ID, an error is thrown.
     *
     * @param {Employee} employee the employee to be saved
     * @return {Employee} the saved employee
     */
    save: (employee) => {
      if (employee.id) {
        if (!(employee.id in employees)) {
          throw new Error(`Attempting to update a non-existent employee '${employee.id}'`);
        }
      } else {
        employee.id = employeeSequence.next();
      }
      employees[employee.id] = employee;
      return employee;
    },

    /**
     * Deletes a employee with the specified ID. If there is no corresponding employee in the database, an error is
     * thrown.
     *
     * @param {number} id the employee ID
     */
    deleteById: (id) => {
      if (!(id in employees)) {
        throw new Error(`Attempting to delete a non-existent employee '${id}'`);
      } else {
        delete employees[id];
      }
    },
  };
})();

module.exports = employeeDao;
