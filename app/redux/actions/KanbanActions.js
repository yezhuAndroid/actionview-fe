import { asyncFuncCreator } from '../utils';

export function create(key, values) {
  return asyncFuncCreator({
    constant: 'KANBAN_CREATE',
    promise: (client) => client.request({ url: '/project/' + key + '/kanban', method: 'post', data: values })
  });
}

export function edit(key, id, values) {
  return asyncFuncCreator({
    constant: 'KANBAN_UPDATE',
    promise: (client) => client.request({ url: '/project/' + key + '/kanban/' + id, method: 'put', data: values })
  });
}

export function del(key, id) {
  return asyncFuncCreator({
    constant: 'KANBAN_DELETE',
    id,
    promise: (client) => client.request({ url: '/project/' + key + '/kanban/' + id, method: 'delete' })
  });
}

export function getOptions(key) {
  return asyncFuncCreator({
    constant: 'KANBAN_LIST_GET',
    promise: (client) => client.request({ url: '/project/' + key + '/kanban' })
  });
}

//export function setAccess(key, id) {
//  return asyncFuncCreator({
//    constant: 'KANBAN_ACCESS_SET',
//    promise: (client) => client.request({ url: '/project/' + key + '/kanban/access', method: 'post', data: { id } })
//  });
//}

export function getDraggableActions(key, id) {
  return asyncFuncCreator({
    constant: 'KANBAN_ISSUE_ACTIONS_GET',
    id,
    promise: (client) => client.request({ url: '/project/' + key + '/issue/' + id + '/wfactions' })
  });
}

export function dragBacklogIssue(id) {
  return { type: 'KANBAN_BACKLOG_ISSUE_DRAG', id };
}

export function cleanDraggableActions() {
  return { type: 'KANBAN_ISSUE_ACTIONS_CLEAN' };
}

export function selectFilter(key) {
  return { type: 'KANBAN_SELECT_FILTER', key };
}

export function recordAccess(key, kid) {
  return asyncFuncCreator({
    constant: 'KANBAN_ACCESS_RECORD',
    promise: (client) => client.request({ url: '/project/' + key + '/kanban/' + kid + '/access' })
  });
}

export function moveSprintIssue(key, values) {
  return asyncFuncCreator({
    constant: 'KANBAN_BACKLOG_ISSUE_MOVE',
    promise: (client) => client.request({ url: '/project/' + key + '/sprint/issue', data: values, method: 'post' })
  });
}

export function createSprint(key) {
  return asyncFuncCreator({
    constant: 'KANBAN_SPRINT_CREATE',
    promise: (client) => client.request({ url: '/project/' + key + '/sprint', data: {}, method: 'post' })
  });
}

export function publishSprint(key, no, values) {
  return asyncFuncCreator({
    constant: 'KANBAN_SPRINT_PUBLISH',
    promise: (client) => client.request({ url: '/project/' + key + '/sprint/' + no + '/publish', data: values, method: 'post' })
  });
}

export function completeSprint(key, no, values) {
  return asyncFuncCreator({
    constant: 'KANBAN_SPRINT_COMPLETE',
    promise: (client) => client.request({ url: '/project/' + key + '/sprint/' + no + '/complete', data: values, method: 'post' })
  });
}

export function deleteSprint(key, no) {
  return asyncFuncCreator({
    constant: 'KANBAN_SPRINT_DELETE',
    promise: (client) => client.request({ url: '/project/' + key + '/sprint/' + no, method: 'delete' })
  });
}
