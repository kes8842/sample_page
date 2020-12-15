const axios = require("axios");

const UPDATE_SOURCE = "UPDATE_SOURCE";
const UPDATE_TARGET = "UPDATE_TARGET";
const UPDATE_RESULT = "UPDATE_RESULT";
const CALL_TRANS_API = "CALL_TRANS_API";

const updateSource = (source) => {
  return {
    type: UPDATE_SOURCE,
    source,
  };
};

const updateTarget = (target) => {
  return {
    type: UPDATE_TARGET,
    target,
  };
};

const callTransPai = (source, target, value) => {
  return {
    type: CALL_TRANS_API,
    value,
    source,
    target,
  };
};

const updateResult = (value) => {
  return {
    type: UPDATE_RESULT,
    value,
  };
};

export {
  updateSource,
  updateTarget,
  callTransPai,
  updateResult,
  UPDATE_RESULT,
  UPDATE_SOURCE,
  UPDATE_TARGET,
  CALL_TRANS_API,
};
