/**
 * The DefaultController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require("./Controller");
const service = require("../services/DefaultService");
const deleteEmployee = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteEmployee);
};

const getCodebookItems = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCodebookItems);
};

const getEmployee = async (request, response) => {
  await Controller.handleRequest(request, response, service.getEmployee);
};

const getEmployees = async (request, response) => {
  await Controller.handleRequest(request, response, service.getEmployees);
};

const postEmployee = async (request, response) => {
  await Controller.handleRequest(request, response, service.postEmployee);
};

const putEmployee = async (request, response) => {
  await Controller.handleRequest(request, response, service.putEmployee);
};

module.exports = {
  deleteEmployee,
  getCodebookItems,
  getEmployee,
  getEmployees,
  postEmployee,
  putEmployee,
};
