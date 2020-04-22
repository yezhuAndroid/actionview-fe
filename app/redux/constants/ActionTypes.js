import { generateConstants } from '../utils';

export default generateConstants([

  'SCHEME_INDEX(ASYNC)',
  'SCHEME_CREATE(ASYNC)',
  'SCHEME_SELECT',
  'SCHEME_UPDATE(ASYNC)',
  'SCHEME_DELETE(ASYNC)',

  'USER_PWD_RESET(ASYNC)',
  'USER_PWD_RESET_SENDMAIL(ASYNC)',
  'USER_PWD_RESET_ACCESS(ASYNC)',

  'USER_REGISTER(ASYNC)',
  'USER_CREATE(ASYNC)',
  'USER_IMPORTS(ASYNC)',
  'USER_UPDATE(ASYNC)',
  'USER_PWD_RENEW(ASYNC)',
  'USER_INDEX(ASYNC)',
  'USER_INVALIDATE(ASYNC)',
  'USER_DELETE(ASYNC)',
  'USER_MULTI_DELETE(ASYNC)',
  'USER_MULTI_PWDRENEW(ASYNC)',
  'USER_MULTI_INVALIDATE(ASYNC)',
  'USER_SELECT',

  'GROUP_CREATE(ASYNC)',
  'GROUP_UPDATE(ASYNC)',
  'GROUP_INDEX(ASYNC)',
  'GROUP_DELETE(ASYNC)',
  'GROUP_MULTI_DELETE(ASYNC)',
  'GROUP_SELECT',

  'DIRECTORY_INDEX(ASYNC)',
  'DIRECTORY_CREATE(ASYNC)',
  'DIRECTORY_UPDATE(ASYNC)',
  'DIRECTORY_INVALIDATE(ASYNC)',
  'DIRECTORY_DELETE(ASYNC)',
  'DIRECTORY_TEST(ASYNC)',
  'DIRECTORY_SELECT',
  'DIRECTORY_SYNC(ASYNC)',

  'SESSION_CREATE(ASYNC)',
  'SESSION_DESTROY(ASYNC)',
  'SESSION_GET(ASYNC)',
  'SESSION_INVALIDATE',
  'SESSION_UPD_AVATAR',

  'PROJECT_INDEX(ASYNC)',
  'PROJECT_MORE(ASYNC)',
  'PROJECT_CREATE(ASYNC)',
  'PROJECT_UPDATE(ASYNC)',
  'PROJECT_CLOSE(ASYNC)',
  'PROJECT_DELETE(ASYNC)',
  'PROJECT_REOPEN(ASYNC)',
  'PROJECT_CREATEINDEX(ASYNC)',
  'PROJECT_MULTI_CLOSE(ASYNC)',
  'PROJECT_MULTI_REOPEN(ASYNC)',
  'PROJECT_MULTI_CREATEINDEX(ASYNC)',
  'PROJECT_SHOW(ASYNC)',
  'PROJECT_SELECT',
  'PROJECT_OPTIONS(ASYNC)',
  'PROJECT_RECENTS(ASYNC)',
  'PROJECT_CLEAN_SELECTED',

  'PROJECT_CONFIG(ASYNC)',

  'TYPE_INDEX(ASYNC)',
  'TYPE_INIT',
  'TYPE_CREATE(ASYNC)',
  'TYPE_SELECT',
  'TYPE_UPDATE(ASYNC)',
  'TYPE_DELETE(ASYNC)',
  'TYPE_SET_SORT(ASYNC)',
  'TYPE_SET_DEFAULT(ASYNC)',

  'MODULE_INDEX(ASYNC)',
  'MODULE_CREATE(ASYNC)',
  'MODULE_SELECT',
  'MODULE_UPDATE(ASYNC)',
  'MODULE_DELETE(ASYNC)',
  'MODULE_SET_SORT(ASYNC)',

  'VERSION_INDEX(ASYNC)',
  'VERSION_CREATE(ASYNC)',
  'VERSION_SELECT',
  'VERSION_UPDATE(ASYNC)',
  'VERSION_MERGE(ASYNC)',
  'VERSION_RELEASE(ASYNC)',
  'VERSION_DELETE(ASYNC)',

  'FIELD_INDEX(ASYNC)',
  'FIELD_CREATE(ASYNC)',
  'FIELD_SELECT',
  'FIELD_UPDATE(ASYNC)',
  'FIELD_DELETE(ASYNC)',
  'FIELD_VIEW_USED(ASYNC)',

  'SCREEN_INDEX(ASYNC)',
  'SCREEN_CREATE(ASYNC)',
  'SCREEN_SELECT',
  'SCREEN_UPDATE(ASYNC)',
  'SCREEN_DELETE(ASYNC)',
  'SCREEN_VIEW_USED(ASYNC)',

  'WORKFLOW_INDEX(ASYNC)',
  'WORKFLOW_CREATE(ASYNC)',
  'WORKFLOW_SELECT',
  'WORKFLOW_PREVIEW(ASYNC)',
  'WORKFLOW_UPDATE(ASYNC)',
  'WORKFLOW_DELETE(ASYNC)',
  'WORKFLOW_VIEW_USED(ASYNC)',

  'WFCONFIG_INDEX(ASYNC)',
  'WFCONFIG_SAVE(ASYNC)',
  'WFCONFIG_STEP_CREATE',
  'WFCONFIG_STEP_EDIT',
  'WFCONFIG_STEP_DELETE',
  'WFCONFIG_ACTION_ADD',
  'WFCONFIG_ACTION_EDIT',
  'WFCONFIG_ACTION_DELETE',
  'WFCONFIG_CANCEL',

  'STATE_INDEX(ASYNC)',
  'STATE_CREATE(ASYNC)',
  'STATE_SELECT',
  'STATE_UPDATE(ASYNC)',
  'STATE_DELETE(ASYNC)',
  'STATE_SET_SORT(ASYNC)',
  'STATE_VIEW_USED(ASYNC)',

  'RESOLUTION_INDEX(ASYNC)',
  'RESOLUTION_CREATE(ASYNC)',
  'RESOLUTION_SELECT',
  'RESOLUTION_UPDATE(ASYNC)',
  'RESOLUTION_DELETE(ASYNC)',
  'RESOLUTION_SET_SORT(ASYNC)',
  'RESOLUTION_SET_DEFAULT(ASYNC)',
  'RESOLUTION_VIEW_USED(ASYNC)',

  'PRIORITY_INDEX(ASYNC)',
  'PRIORITY_CREATE(ASYNC)',
  'PRIORITY_SELECT',
  'PRIORITY_UPDATE(ASYNC)',
  'PRIORITY_DELETE(ASYNC)',
  'PRIORITY_SET_SORT(ASYNC)',
  'PRIORITY_SET_DEFAULT(ASYNC)',
  'PRIORITY_VIEW_USED(ASYNC)',

  'ROLE_INDEX(ASYNC)',
  'ROLE_TEAM_INDEX(ASYNC)',
  'ROLE_CREATE(ASYNC)',
  'ROLE_SELECT',
  'ROLE_UPDATE(ASYNC)',
  'ROLE_SET_PERMISSIONS(ASYNC)',
  'ROLE_SET_ACTOR(ASYNC)',
  'ROLE_SET_GROUP_ACTOR(ASYNC)',
  'ROLE_RESET(ASYNC)',
  'ROLE_DELETE(ASYNC)',
  'ROLE_VIEW_USED(ASYNC)',

  'ROLEACTOR_INDEX(ASYNC)',
  'ROLEACTOR_EDIT(ASYNC)',

  'EVENTS_INDEX(ASYNC)',
  'EVENTS_CREATE(ASYNC)',
  'EVENTS_SELECT',
  'EVENTS_UPDATE(ASYNC)',
  'EVENTS_SET_NOTIFY(ASYNC)',
  'EVENTS_RESET(ASYNC)',
  'EVENTS_DELETE(ASYNC)',

  'PROJECT_SUMMARY(ASYNC)',

  'ISSUE_INDEX(ASYNC)',
  'ISSUE_CREATE(ASYNC)',
  'ISSUE_OPTIONS(ASYNC)',
  'ISSUE_SHOW(ASYNC)',
  'ISSUE_EDIT(ASYNC)',
  'ISSUE_SET_ASSIGNEE(ASYNC)',
  'ISSUE_SET_PROGRESS(ASYNC)',
  'ISSUE_SET_LABELS(ASYNC)',
  'ISSUE_ADD_LABELS',
  'ISSUE_DELETE(ASYNC)',

  'ISSUE_FILTER_SAVE(ASYNC)',
  'ISSUE_FILTERS_RESET(ASYNC)',
  'ISSUE_FILTERS_CONFIG(ASYNC)',

  'ISSUE_LIST_COLUMNS_SET(ASYNC)',
  'ISSUE_LIST_COLUMNS_RESET(ASYNC)',

  'ISSUE_FILE_DELETE(ASYNC)',
  'ISSUE_FILE_ADD',
  'ISSUE_COMMENTS_INDEX(ASYNC)',
  'ISSUE_COMMENTS_SORT',
  'ISSUE_COMMENTS_ADD(ASYNC)',
  'ISSUE_COMMENTS_EDIT(ASYNC)',
  'ISSUE_COMMENTS_DELETE(ASYNC)',

  'ISSUE_HISTORY_INDEX(ASYNC)',
  'ISSUE_HISTORY_SORT',

  'ISSUE_RECORD',
  'ISSUE_FORWARD',
  'ISSUE_CLEAN_RECORD',

  'ISSUE_WORKLOG_INDEX(ASYNC)',
  'ISSUE_WORKLOG_SORT',
  'ISSUE_WORKLOG_ADD(ASYNC)',
  'ISSUE_WORKLOG_EDIT(ASYNC)',
  'ISSUE_WORKLOG_DELETE(ASYNC)',

  'ISSUE_GITCOMMITS_INDEX(ASYNC)',
  'ISSUE_GITCOMMITS_SORT',

  'ISSUE_LINK_CREATE(ASYNC)',
  'ISSUE_LINK_DELETE(ASYNC)',

  'ISSUE_STATE_RESET(ASYNC)',
  'ISSUE_MOVE(ASYNC)',
  'ISSUE_CONVERT(ASYNC)',
  'ISSUE_COPY(ASYNC)',
  'ISSUE_WORKFLOW_ACTION(ASYNC)',

  'ISSUE_WATCHING(ASYNC)',

  'ISSUE_SPRINT_REMOVE_ISSUE',

  'ISSUE_KANBAN_RELEASE(ASYNC)',
  'ISSUE_KANBAN_RANK_SET(ASYNC)',

  'ISSUE_IMPORTS(ASYNC)',

  'ISSUE_MULTI_EDIT(ASYNC)',
  'ISSUE_MULTI_DELETE(ASYNC)',
  'ISSUE_MULTI_STATE_RESET(ASYNC)',

  'ACTIVITY_INDEX(ASYNC)',
  'ACTIVITY_MORE(ASYNC)',

  'KANBAN_CREATE(ASYNC)',
  'KANBAN_UPDATE(ASYNC)',
  'KANBAN_DELETE(ASYNC)',
  'KANBAN_LIST_GET(ASYNC)',
  'KANBAN_ACCESS_RECORD(ASYNC)',
  'KANBAN_ISSUE_ACTIONS_GET(ASYNC)',
  'KANBAN_ISSUE_ACTIONS_CLEAN',
  'KANBAN_BACKLOG_ISSUE_DRAG',
  'KANBAN_BACKLOG_ISSUE_MOVE(ASYNC)',

  'KANBAN_SPRINT_GET(ASYNC)',
  'KANBAN_SPRINT_CREATE(ASYNC)',
  'KANBAN_SPRINT_PUBLISH(ASYNC)',
  'KANBAN_SPRINT_COMPLETE(ASYNC)',
  'KANBAN_SPRINT_DELETE(ASYNC)',
  'KANBAN_SPRINT_LOG_GET(ASYNC)',

  'KANBAN_EPIC_INDEX(ASYNC)',
  'KANBAN_EPIC_CREATE(ASYNC)',
  'KANBAN_EPIC_EDIT(ASYNC)',
  'KANBAN_EPIC_DELETE(ASYNC)',
  'KANBAN_EPIC_SET_SORT(ASYNC)',
  'KANBAN_EPIC_SELECT',

  'DOCUMENT_INDEX(ASYNC)',
  'DOCUMENT_OPTIONS(ASYNC)',
  'DOCUMENT_SELECT',
  'DOCUMENT_ADD',
  'DOCUMENT_SORT',
  'DOCUMENT_CREATE_FOLDER(ASYNC)',
  'DOCUMENT_UPDATE(ASYNC)',
  'DOCUMENT_DELETE(ASYNC)',
  'DOCUMENT_MULTI_DOWNLOAD(ASYNC)',
  'DOCUMENT_MULTI_DELETE(ASYNC)',
  'DOCUMENT_COPY(ASYNC)',
  'DOCUMENT_MOVE(ASYNC)',

  'WIKI_INDEX(ASYNC)',
  'WIKI_SHOW(ASYNC)',
  'WIKI_SELECT',
  'WIKI_SORT',
  'WIKI_CREATE(ASYNC)',
  'WIKI_UPDATE(ASYNC)',
  'WIKI_DELETE(ASYNC)',
  'WIKI_CHECK_IN(ASYNC)',
  'WIKI_CHECK_OUT(ASYNC)',
  'WIKI_ATTACHMENT_ADD',
  'WIKI_ATTACHMENT_DELETE(ASYNC)',
  'WIKI_COPY(ASYNC)',
  'WIKI_MOVE(ASYNC)',

  'REPORT_LIST_GET(ASYNC)',
  'REPORT_WORKLOG_INDEX(ASYNC)',
  'REPORT_WORKLOG_LIST_GET(ASYNC)',
  'REPORT_WORKLOG_DETAIL_GET(ASYNC)',
  'REPORT_TREND_INDEX(ASYNC)',
  'REPORT_TIMETRACKS_INDEX(ASYNC)',
  'REPORT_TIMETRACKS_DETAIL_GET(ASYNC)',
  'REPORT_REGRESSIONS_INDEX(ASYNC)',
  'REPORT_ISSUES_INDEX(ASYNC)',
  'REPORT_OPTIONS(ASYNC)',
  'REPORT_FILTER_SAVE(ASYNC)',
  'REPORT_FILTER_RESET(ASYNC)',
  'REPORT_FILTER_EDIT(ASYNC)',

  'INTEGRATIONS_INDEX(ASYNC)',
  'INTEGRATIONS_HANDLE(ASYNC)',

  'WEBHOOKS_INDEX(ASYNC)',
  'WEBHOOKS_CREATE(ASYNC)',
  'WEBHOOKS_UPDATE(ASYNC)',
  'WEBHOOKS_TEST(ASYNC)',
  'WEBHOOKS_SELECT',
  'WEBHOOKS_DELETE(ASYNC)',

  'LABELS_INDEX(ASYNC)',
  'LABELS_CREATE(ASYNC)',
  'LABELS_SELECT',
  'LABELS_UPDATE(ASYNC)',
  'LABELS_DELETE(ASYNC)',

  'LOGS_INDEX(ASYNC)',

  'MYSETTING_USER_SHOW(ASYNC)',
  'MYSETTING_PWD_RESET(ASYNC)',
  'MYSETTING_ACCOUNT_UPDATE(ASYNC)',
  'MYSETTING_NOTIFY_UPDATE(ASYNC)',
  'MYSETTING_FAVORITE_UPDATE(ASYNC)',
  'MYSETTING_SET_AVATAR(ASYNC)',
  'MYSETTING_EMAIL_BIND(ASYNC)',

  'SYSSETTING_SHOW(ASYNC)',
  'SYSSETTING_UPDATE(ASYNC)',
  'SYSSETTING_RESET_PWD(ASYNC)',
  'SYSSETTING_SEND_TESTMAIL(ASYNC)',

  'CALENDAR_INDEX(ASYNC)',
  'CALENDAR_SYNC(ASYNC)',
  'CALENDAR_UPDATE(ASYNC)',

  'LOCALE_INITIALIZE',
  'LOCALE_CHANGE(ASYNC)',

  'LAYOUT_RESIZE'
]);
