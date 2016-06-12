import * as t from '../constants/ActionTypes';
import _ from 'lodash';

const initialState = { ecode: 0, collection: [], item: {}, options: {}, indexLoading: false, loading: false, itemLoading: false, sortLoading: false, defaultLoading: false, selectedItem: {} };

export default function state(state = initialState, action) {
  switch (action.type) {
    case t.STATE_INDEX:
      return { ...state, indexLoading: true, collection: [] };

    case t.STATE_INDEX_SUCCESS:
      return { ...state, indexLoading: false, ecode: action.result.ecode, collection: action.result.data, options: action.result.options };

    case t.STATE_INDEX_FAIL:
      return { ...state, indexLoading: false, error: action.error };

    case t.STATE_CREATE:
      return { ...state, loading: true };

    case t.STATE_CREATE_SUCCESS:
      if ( action.result.ecode === 0 ) {
        state.collection.push(action.result.data);
      }
      return { ...state, loading: false, ecode: action.result.ecode };

    case t.STATE_CREATE_FAIL:
      return { ...state, loading: false, error: action.error };

    case t.STATE_EDIT:
      return { ...state, loading: true };

    case t.STATE_EDIT_SUCCESS:
      if ( action.result.ecode === 0 ) {
        const ind = _.findIndex(state.collection, { id: action.result.data.id });
        state.collection[ind] = action.result.data;
      }
      return { ...state, loading: false, ecode: action.result.ecode };

    case t.STATE_EDIT_FAIL:
      return { ...state, loading: false, error: action.error };

    case t.STATE_SHOW:
      return { ...state, itemLoading: true, selectedItem: { id: action.id } };

    case t.STATE_SHOW_SUCCESS:
      if ( action.result.ecode === 0 ) {
        state.item = action.result.data;
      }
      return { ...state, itemLoading: false, ecode: action.result.ecode };

    case t.STATE_SHOW_FAIL:
      return { ...state, itemLoading: false, error: action.error };

    case t.STATE_DELETE_NOTIFY:
      const el = _.find(state.collection, { id: action.id });
      return { ...state, itemLoading: false, selectedItem: { id: el.id, name: el.name } };

    case t.STATE_DELETE:
      return { ...state, itemLoading: true };

    case t.STATE_DELETE_SUCCESS:
      if ( action.result.ecode === 0 ) {
        state.collection = _.reject(state.collection, { id: action.id });
      }
      return { ...state, itemLoading: false, ecode: action.result.ecode };

    case t.STATE_DELETE_FAIL:
      return { ...state, itemLoading: false, error: action.error };

    case t.STATE_SET_SORT:
      return { ...state, sortLoading: true };

    case t.STATE_SET_SORT_SUCCESS:
      if ( action.result.ecode === 0 ) {
        state.collection = action.result.data;
      }
      return { ...state, sortLoading: false, ecode: action.result.ecode };

    case t.STATE_SET_SORT_FAIL:
      return { ...state, sortLoading: false, error: action.error };

    case t.STATE_SET_DEFAULT:
      return { ...state, defaultLoading: true };

    case t.STATE_SET_DEFAULT_SUCCESS:
      return { ...state, defaultLoading: false, ecode: action.result.ecode, collection: action.result.data };

    case t.STATE_SET_DEFAULT_FAIL:
      return { ...state, defaultLoading: false, error: action.error };

    default:
      return state;
  }
}
