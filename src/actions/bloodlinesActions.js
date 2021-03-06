import ActionTypes from './actionTypes';
import ActionUtil from './actionUtil';

const BLOODLINES_URL = 'https://bloodlines.expresso.store/api';
const CONTENT_URL = BLOODLINES_URL + '/content';
const TRIGGER_URL = BLOODLINES_URL + '/trigger';
const RECEIPT_URL = BLOODLINES_URL + '/receipt';
const PREFERENCE_URL = BLOODLINES_URL + '/preference';

export function getAllContent(offset, limit) {
    return ActionUtil.handlePagedRequest(ActionTypes.CONTENTS, CONTENT_URL, 'GET', offset, limit);
}

export function getAllTriggers(offset, limit) {
    return ActionUtil.handlePagedRequest(ActionTypes.TRIGGERS, TRIGGER_URL, 'GET', offset, limit);
}

export function getAllReceipts(offset, limit) {
    return ActionUtil.handlePagedRequest(ActionTypes.RECEIPTS, RECEIPT_URL, 'GET', offset, limit);
}

export function getPreference(id) {
    return ActionUtil.handlePagedRequest(ActionTypes.PREFERENCE, PREFERENCE_URL + '/' + id, 'GET', 0, 0);
}

export function createContent(body) {
    return ActionUtil.handleRequest(CONTENT_URL, 'POST', body);
}

export function deleteContent(id) {
    return ActionUtil.handleRequest(CONTENT_URL + '/' + id, 'DELETE');
}

export function createTrigger(body) {
    return ActionUtil.handleRequest(TRIGGER_URL, 'POST', body);
}

export function deleteTrigger(id) {
    return ActionUtil.handleRequest(TRIGGER_URL + '/' + id, 'DELETE');
}

export function activateTrigger(id, body) {
    return ActionUtil.handleRequest(TRIGGER_URL + '/' + id + '/activate', 'POST', body);
}

export function modifyPreference(id, body) {
    return ActionUtil.handleRequest(PREFERENCE_URL + '/' + id, 'PATCH', body);
}
