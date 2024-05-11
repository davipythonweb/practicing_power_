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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: process.env.POSTGRES_HOST,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        database: process.env.POSTGRES_DB,\n        password: process.env.POSTGRES_PASSWORD\n    });\n    await client.connect();\n    const result = await client.query(queryObject);\n    await client.end();\n    return result;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsZUFBZUMsTUFBTUMsV0FBVyxFQUFFO0lBQ2hDLE1BQU1DLFNBQVMsSUFBSUgsc0NBQU1BLENBQUM7UUFDeEJJLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUMvQkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQy9CQyxNQUFNTCxRQUFRQyxHQUFHLENBQUNLLGFBQWE7UUFDL0JDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sV0FBVztRQUNqQ0MsVUFBVVQsUUFBUUMsR0FBRyxDQUFDUyxpQkFBaUI7SUFDekM7SUFDQSxNQUFNWixPQUFPYSxPQUFPO0lBQ3BCLE1BQU1DLFNBQVMsTUFBTWQsT0FBT0YsS0FBSyxDQUFDQztJQUNsQyxNQUFNQyxPQUFPZSxHQUFHO0lBQ2hCLE9BQU9EO0FBQ1Q7QUFFQSxpRUFBZTtJQUNiaEIsT0FBT0E7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY2luZ19wb3dlcl8vLi9pbmZyYS9kYXRhYmFzZS5qcz9lMzliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gXCJwZ1wiO1xuXG5hc3luYyBmdW5jdGlvbiBxdWVyeShxdWVyeU9iamVjdCkge1xuICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KHtcbiAgICBob3N0OiBwcm9jZXNzLmVudi5QT1NUR1JFU19IT1NULFxuICAgIHBvcnQ6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BPUlQsXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfVVNFUixcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfREIsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BBU1NXT1JELFxuICB9KVxuICBhd2FpdCBjbGllbnQuY29ubmVjdCgpXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShxdWVyeU9iamVjdClcbiAgYXdhaXQgY2xpZW50LmVuZCgpXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBxdWVyeTogcXVlcnksXG59Il0sIm5hbWVzIjpbIkNsaWVudCIsInF1ZXJ5IiwicXVlcnlPYmplY3QiLCJjbGllbnQiLCJob3N0IiwicHJvY2VzcyIsImVudiIsIlBPU1RHUkVTX0hPU1QiLCJwb3J0IiwiUE9TVEdSRVNfUE9SVCIsInVzZXIiLCJQT1NUR1JFU19VU0VSIiwiZGF0YWJhc2UiLCJQT1NUR1JFU19EQiIsInBhc3N3b3JkIiwiUE9TVEdSRVNfUEFTU1dPUkQiLCJjb25uZWN0IiwicmVzdWx0IiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/status/index.js":
/*!**************************************!*\
  !*** ./pages/api/v1/status/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var infra_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! infra/database.js */ \"(api)/./infra/database.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function status(request, response) {\n    const updatedAt = new Date().toISOString();\n    const databaseVersionResult = await infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SHOW server_version;\");\n    const databaseVersionValue = databaseVersionResult.rows[0].server_version;\n    const databaseMaxConnectionsResult = await infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SHOW max_connections;\");\n    const databaseMaxConnectionsValue = databaseMaxConnectionsResult.rows[0].max_connections;\n    const databaseOpenedConnectionsResult = await infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SELECT * FROM pg_stat_activity;\");\n    console.info(databaseOpenedConnectionsResult.rows);\n    response.status(200).json({\n        updated_at: updatedAt,\n        dependencies: {\n            database: {\n                version: databaseVersionValue,\n                max_connections: parseInt(databaseMaxConnectionsValue)\n            }\n        }\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDVDtBQUUvQixlQUFlRSxPQUFPQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNQyxZQUFZLElBQUlDLE9BQU9DLFdBQVc7SUFFeEMsTUFBTUMsd0JBQXdCLE1BQU1SLCtEQUFjLENBQUM7SUFDbkQsTUFBTVUsdUJBQXVCRixzQkFBc0JHLElBQUksQ0FBQyxFQUFFLENBQUNDLGNBQWM7SUFFekUsTUFBTUMsK0JBQStCLE1BQU1iLCtEQUFjLENBQ3ZEO0lBR0YsTUFBTWMsOEJBQ0xELDZCQUE2QkYsSUFBSSxDQUFDLEVBQUUsQ0FBQ0ksZUFBZTtJQUVwRCxNQUFNQyxrQ0FBbUMsTUFBTWhCLCtEQUFjLENBQUM7SUFDOURpQixRQUFRQyxJQUFJLENBQUNGLGdDQUFnQ0wsSUFBSTtJQUVsRFAsU0FBU0YsTUFBTSxDQUFDLEtBQUtpQixJQUFJLENBQUM7UUFDeEJDLFlBQVlmO1FBQ1pnQixjQUFjO1lBQ1pyQixVQUFVO2dCQUNSQyxTQUFTUztnQkFDVEssaUJBQWlCTyxTQUFTUjtZQUM1QjtRQUNGO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlWixNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY2luZ19wb3dlcl8vLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzPzg0ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGFiYXNlIGZyb20gXCJpbmZyYS9kYXRhYmFzZS5qc1wiXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSBcInJlYWN0XCJcblxuYXN5bmMgZnVuY3Rpb24gc3RhdHVzKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IHVwZGF0ZWRBdCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuXG4gIGNvbnN0IGRhdGFiYXNlVmVyc2lvblJlc3VsdCA9IGF3YWl0IGRhdGFiYXNlLnF1ZXJ5KFwiU0hPVyBzZXJ2ZXJfdmVyc2lvbjtcIilcbiAgY29uc3QgZGF0YWJhc2VWZXJzaW9uVmFsdWUgPSBkYXRhYmFzZVZlcnNpb25SZXN1bHQucm93c1swXS5zZXJ2ZXJfdmVyc2lvblxuXG4gIGNvbnN0IGRhdGFiYXNlTWF4Q29ubmVjdGlvbnNSZXN1bHQgPSBhd2FpdCBkYXRhYmFzZS5xdWVyeShcbiAgICBcIlNIT1cgbWF4X2Nvbm5lY3Rpb25zO1wiXG4gICAgKTtcblxuICBjb25zdCBkYXRhYmFzZU1heENvbm5lY3Rpb25zVmFsdWUgPVxuICAgZGF0YWJhc2VNYXhDb25uZWN0aW9uc1Jlc3VsdC5yb3dzWzBdLm1heF9jb25uZWN0aW9uc1xuXG4gICBjb25zdCBkYXRhYmFzZU9wZW5lZENvbm5lY3Rpb25zUmVzdWx0ID0gIGF3YWl0IGRhdGFiYXNlLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSBwZ19zdGF0X2FjdGl2aXR5O1wiKVxuICAgY29uc29sZS5pbmZvKGRhdGFiYXNlT3BlbmVkQ29ubmVjdGlvbnNSZXN1bHQucm93cylcbiAgXG4gIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oe1xuICAgIHVwZGF0ZWRfYXQ6IHVwZGF0ZWRBdCxcbiAgICBkZXBlbmRlbmNpZXM6IHtcbiAgICAgIGRhdGFiYXNlOiB7XG4gICAgICAgIHZlcnNpb246IGRhdGFiYXNlVmVyc2lvblZhbHVlLFxuICAgICAgICBtYXhfY29ubmVjdGlvbnM6IHBhcnNlSW50KGRhdGFiYXNlTWF4Q29ubmVjdGlvbnNWYWx1ZSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXR1cyJdLCJuYW1lcyI6WyJkYXRhYmFzZSIsInZlcnNpb24iLCJzdGF0dXMiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJ1cGRhdGVkQXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJkYXRhYmFzZVZlcnNpb25SZXN1bHQiLCJxdWVyeSIsImRhdGFiYXNlVmVyc2lvblZhbHVlIiwicm93cyIsInNlcnZlcl92ZXJzaW9uIiwiZGF0YWJhc2VNYXhDb25uZWN0aW9uc1Jlc3VsdCIsImRhdGFiYXNlTWF4Q29ubmVjdGlvbnNWYWx1ZSIsIm1heF9jb25uZWN0aW9ucyIsImRhdGFiYXNlT3BlbmVkQ29ubmVjdGlvbnNSZXN1bHQiLCJjb25zb2xlIiwiaW5mbyIsImpzb24iLCJ1cGRhdGVkX2F0IiwiZGVwZW5kZW5jaWVzIiwicGFyc2VJbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/status/index.js\n");

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