"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var weex_1=require("./weex"),RESULT_CODE_SUCCESS=0,uniBridge=function(e,u){return new Promise(function(r,t){weex_1.requireModule("eAppJsApi").exec({jsApi:e,args:u},function(e){e.resultCode===RESULT_CODE_SUCCESS?("function"==typeof u.onSuccess&&u.onSuccess(e.result),r(e.result)):("function"==typeof u.onFail&&u.onFail(e.result),t(e.result))})})};exports.default=uniBridge;