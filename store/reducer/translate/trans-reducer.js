import action from "../../action";
import { UPDATE_RESULT } from "../../action/translate/trans-action";

const { UPDATE_SOURCE, UPDATE_TARGET, CALL_TRANS_API } = action.transAction;

const initState = {
  transResult: "",
  source: "ko",
  target: "en",
  options: { ko: "한국", en: "영어", ja: "일본어" },
};

export const translateReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SOURCE:
      return {
        ...state,
        source: action.source,
      };
    case UPDATE_TARGET:
      return {
        ...state,
        target: action.target,
      };

    case CALL_TRANS_API:
      return {
        ...state,
      };
    case UPDATE_RESULT:
      return {
        ...state,
        transResult: action.value?.value,
      };
    default:
      return state;
  }
};