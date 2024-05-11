"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/v1/status";
exports.ids = ["pages/api/v1/status"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "(api)/./infra/database.js":
/*!***************************!*\
  !*** ./infra/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: process.env.POSTGRES_HOST,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        database: process.env.POSTGRES_DB,\n        password: process.env.POSTGRES_PASSWORD\n    });\n    await client.connect();\n    try {\n        const result = await client.query(queryObject);\n        return result;\n    } catch (error) {\n        console.error(error);\n    } finally{\n        await client.end();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QjtBQUNFO0FBRTlCLGVBQWVFLE1BQU1DLFdBQVcsRUFBRTtJQUNoQyxNQUFNQyxTQUFTLElBQUlKLHNDQUFNQSxDQUFDO1FBQ3hCSyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7UUFDL0JDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtRQUMvQkMsTUFBTUwsUUFBUUMsR0FBRyxDQUFDSyxhQUFhO1FBQy9CQyxVQUFVUCxRQUFRQyxHQUFHLENBQUNPLFdBQVc7UUFDakNDLFVBQVVULFFBQVFDLEdBQUcsQ0FBQ1MsaUJBQWlCO0lBQ3pDO0lBQ0EsTUFBTVosT0FBT2EsT0FBTztJQUVwQixJQUFJO1FBQ0YsTUFBTUMsU0FBUyxNQUFNZCxPQUFPRixLQUFLLENBQUNDO1FBQ2xDLE9BQU9lO0lBRVQsRUFBRSxPQUFPQyxPQUFNO1FBQ2JDLFFBQVFELEtBQUssQ0FBQ0E7SUFDaEIsU0FBVTtRQUNSLE1BQU1mLE9BQU9pQixHQUFHO0lBQ2xCO0FBQ0Y7QUFFQSxpRUFBZTtJQUNibkIsT0FBT0E7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY2luZ19wb3dlcl8vLi9pbmZyYS9kYXRhYmFzZS5qcz9lMzliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gXCJwZ1wiO1xuaW1wb3J0IHsgY2FjaGUgfSBmcm9tIFwicmVhY3RcIjtcblxuYXN5bmMgZnVuY3Rpb24gcXVlcnkocXVlcnlPYmplY3QpIHtcbiAgY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCh7XG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfSE9TVCxcbiAgICBwb3J0OiBwcm9jZXNzLmVudi5QT1NUR1JFU19QT1JULFxuICAgIHVzZXI6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1VTRVIsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlBPU1RHUkVTX0RCLFxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5QT1NUR1JFU19QQVNTV09SRCxcbiAgfSlcbiAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHF1ZXJ5T2JqZWN0KVxuICAgIHJldHVybiByZXN1bHRcblxuICB9IGNhdGNoIChlcnJvcil7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgfSBmaW5hbGx5IHtcbiAgICBhd2FpdCBjbGllbnQuZW5kKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHF1ZXJ5OiBxdWVyeSxcbn0iXSwibmFtZXMiOlsiQ2xpZW50IiwiY2FjaGUiLCJxdWVyeSIsInF1ZXJ5T2JqZWN0IiwiY2xpZW50IiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJQT1NUR1JFU19IT1NUIiwicG9ydCIsIlBPU1RHUkVTX1BPUlQiLCJ1c2VyIiwiUE9TVEdSRVNfVVNFUiIsImRhdGFiYXNlIiwiUE9TVEdSRVNfREIiLCJwYXNzd29yZCIsIlBPU1RHUkVTX1BBU1NXT1JEIiwiY29ubmVjdCIsInJlc3VsdCIsImVycm9yIiwiY29uc29sZSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/status/index.js":
/*!**************************************!*\
  !*** ./pages/api/v1/status/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var infra_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! infra/database.js */ \"(api)/./infra/database.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function status(request, response) {\n    const updatedAt = new Date().toISOString();\n    const databaseVersionResult = await infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SHOW server_version;\");\n    const databaseVersionValue = databaseVersionResult.rows[0].server_version;\n    const databaseMaxConnectionsResult = await infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SHOW max_connections;\");\n    const databaseMaxConnectionsValue = databaseMaxConnectionsResult.rows[0].max_connections;\n    const databaseName = process.env.POSTGRES_DB;\n    const databaseOpenedConnectionsResult = await infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query({\n        text: \"SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;\",\n        values: [\n            databaseName\n        ]\n    });\n    const databaseOpenedConnectionsValue = databaseOpenedConnectionsResult.rows[0].count;\n    response.status(200).json({\n        updated_at: updatedAt,\n        dependencies: {\n            database: {\n                version: databaseVersionValue,\n                max_connections: parseInt(databaseMaxConnectionsValue),\n                opened_connections: databaseOpenedConnectionsValue\n            }\n        }\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDVDtBQUUvQixlQUFlRSxPQUFPQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNQyxZQUFZLElBQUlDLE9BQU9DLFdBQVc7SUFFeEMsTUFBTUMsd0JBQXdCLE1BQU1SLCtEQUFjLENBQUM7SUFDbkQsTUFBTVUsdUJBQXVCRixzQkFBc0JHLElBQUksQ0FBQyxFQUFFLENBQUNDLGNBQWM7SUFFekUsTUFBTUMsK0JBQStCLE1BQU1iLCtEQUFjLENBQ3ZEO0lBR0YsTUFBTWMsOEJBQ0xELDZCQUE2QkYsSUFBSSxDQUFDLEVBQUUsQ0FBQ0ksZUFBZTtJQUVwRCxNQUFNQyxlQUFlQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7SUFFNUMsTUFBTUMsa0NBQW1DLE1BQU1wQiwrREFBYyxDQUFDO1FBQzdEcUIsTUFBTTtRQUNOQyxRQUFRO1lBQUNOO1NBQWE7SUFDdkI7SUFFQSxNQUFNTyxpQ0FDTEgsZ0NBQWdDVCxJQUFJLENBQUMsRUFBRSxDQUFDYSxLQUFLO0lBRS9DcEIsU0FBU0YsTUFBTSxDQUFDLEtBQUt1QixJQUFJLENBQUM7UUFDeEJDLFlBQVlyQjtRQUNac0IsY0FBYztZQUNaM0IsVUFBVTtnQkFDUkMsU0FBU1M7Z0JBQ1RLLGlCQUFpQmEsU0FBU2Q7Z0JBQzFCZSxvQkFBb0JOO1lBQ3RCO1FBQ0Y7SUFDRjtBQUNGO0FBRUEsaUVBQWVyQixNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY2luZ19wb3dlcl8vLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzPzg0ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGFiYXNlIGZyb20gXCJpbmZyYS9kYXRhYmFzZS5qc1wiXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSBcInJlYWN0XCJcblxuYXN5bmMgZnVuY3Rpb24gc3RhdHVzKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IHVwZGF0ZWRBdCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuXG4gIGNvbnN0IGRhdGFiYXNlVmVyc2lvblJlc3VsdCA9IGF3YWl0IGRhdGFiYXNlLnF1ZXJ5KFwiU0hPVyBzZXJ2ZXJfdmVyc2lvbjtcIilcbiAgY29uc3QgZGF0YWJhc2VWZXJzaW9uVmFsdWUgPSBkYXRhYmFzZVZlcnNpb25SZXN1bHQucm93c1swXS5zZXJ2ZXJfdmVyc2lvblxuXG4gIGNvbnN0IGRhdGFiYXNlTWF4Q29ubmVjdGlvbnNSZXN1bHQgPSBhd2FpdCBkYXRhYmFzZS5xdWVyeShcbiAgICBcIlNIT1cgbWF4X2Nvbm5lY3Rpb25zO1wiXG4gICAgKTtcblxuICBjb25zdCBkYXRhYmFzZU1heENvbm5lY3Rpb25zVmFsdWUgPVxuICAgZGF0YWJhc2VNYXhDb25uZWN0aW9uc1Jlc3VsdC5yb3dzWzBdLm1heF9jb25uZWN0aW9uc1xuXG4gICBjb25zdCBkYXRhYmFzZU5hbWUgPSBwcm9jZXNzLmVudi5QT1NUR1JFU19EQjtcbiAgIFxuICAgY29uc3QgZGF0YWJhc2VPcGVuZWRDb25uZWN0aW9uc1Jlc3VsdCA9ICBhd2FpdCBkYXRhYmFzZS5xdWVyeSh7XG4gICAgdGV4dDogXCJTRUxFQ1QgY291bnQoKik6OmludCBGUk9NIHBnX3N0YXRfYWN0aXZpdHkgV0hFUkUgZGF0bmFtZSA9ICQxO1wiLFxuICAgIHZhbHVlczogW2RhdGFiYXNlTmFtZV0sXG4gICB9KTtcbiAgXG4gICBjb25zdCBkYXRhYmFzZU9wZW5lZENvbm5lY3Rpb25zVmFsdWUgPSBcbiAgICBkYXRhYmFzZU9wZW5lZENvbm5lY3Rpb25zUmVzdWx0LnJvd3NbMF0uY291bnQgXG4gIFxuICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICB1cGRhdGVkX2F0OiB1cGRhdGVkQXQsXG4gICAgZGVwZW5kZW5jaWVzOiB7XG4gICAgICBkYXRhYmFzZToge1xuICAgICAgICB2ZXJzaW9uOiBkYXRhYmFzZVZlcnNpb25WYWx1ZSxcbiAgICAgICAgbWF4X2Nvbm5lY3Rpb25zOiBwYXJzZUludChkYXRhYmFzZU1heENvbm5lY3Rpb25zVmFsdWUpLFxuICAgICAgICBvcGVuZWRfY29ubmVjdGlvbnM6IGRhdGFiYXNlT3BlbmVkQ29ubmVjdGlvbnNWYWx1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhdHVzIl0sIm5hbWVzIjpbImRhdGFiYXNlIiwidmVyc2lvbiIsInN0YXR1cyIsInJlcXVlc3QiLCJyZXNwb25zZSIsInVwZGF0ZWRBdCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImRhdGFiYXNlVmVyc2lvblJlc3VsdCIsInF1ZXJ5IiwiZGF0YWJhc2VWZXJzaW9uVmFsdWUiLCJyb3dzIiwic2VydmVyX3ZlcnNpb24iLCJkYXRhYmFzZU1heENvbm5lY3Rpb25zUmVzdWx0IiwiZGF0YWJhc2VNYXhDb25uZWN0aW9uc1ZhbHVlIiwibWF4X2Nvbm5lY3Rpb25zIiwiZGF0YWJhc2VOYW1lIiwicHJvY2VzcyIsImVudiIsIlBPU1RHUkVTX0RCIiwiZGF0YWJhc2VPcGVuZWRDb25uZWN0aW9uc1Jlc3VsdCIsInRleHQiLCJ2YWx1ZXMiLCJkYXRhYmFzZU9wZW5lZENvbm5lY3Rpb25zVmFsdWUiLCJjb3VudCIsImpzb24iLCJ1cGRhdGVkX2F0IiwiZGVwZW5kZW5jaWVzIiwicGFyc2VJbnQiLCJvcGVuZWRfY29ubmVjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/status/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/status/index.js"));
module.exports = __webpack_exports__;

})();