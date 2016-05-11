import { apiOptionsFromState } from '../../lib/apiOptionsFromState';
import { endpoints } from '@r/api-client';
import { receivedResponse } from './apiResponseActions';

const { SavedEndpoint } = endpoints;

export const TOGGLE_REPLY_FORM = 'TOGGLE_REPLY_FORM';
export const toggleReplyForm = id => ({ type: TOGGLE_REPLY_FORM, id });

export const TOGGLE_EDIT_FORM = 'TOGGLE_EDIT_FORM';
export const toggleEditForm = id => ({ type: TOGGLE_EDIT_FORM, id });

export const TOGGLE_COLLAPSE = 'TOGGLE_COLLAPSE';

export const toggledCollapse = (id, collapse) => ({ type: TOGGLE_COLLAPSE, id, collapse });
export const toggleCollapse = (id, collapse) => async (dispatch) => {
  dispatch(toggledCollapse(id, collapse));
};

export const RESET_COLLAPSE = 'RESET_COLLAPSE';
export const resetCollapse = collapse => ({ type: RESET_COLLAPSE, collapse });

export const SAVING = 'SAVING';
export const SAVED = 'SAVED';

export const saving = (id, save) => ({
  type: SAVING,
  id,
  save,
});

export const save = (id, save=true) => async (dispatch, getState) => {
  dispatch(saving(id));

  const state = getState();
  const method = save ? 'post' : 'del';
  const apiResponse = await SavedEndpoint[method](apiOptionsFromState(state), { id });
  dispatch(receivedResponse(apiResponse));
  dispatch(saved(id, apiResponse.results));
};

export const saved = (id, savedResults) => ({
  type: SAVED,
  id,
  savedResults,
});

export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const del = id => async (dispatch, getState) => {
  console.log(id, getState());
};

export const REPORTING = 'REPORTING';
export const REPORTED = 'REPORTED';
export const report = (id, reason) => async (dispatch, getState) => {
  console.log(id, reason, getState());
};

export const LOADING_MORE = 'LOADING_MORE';
export const LOADED_MORE = 'LOADED_MORE';
export const loadMore = ids => async (dispatch, getState) => {
  console.log(ids, getState());
};