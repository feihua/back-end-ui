import { request } from 'umi';
import {UserListParams, UserListItem, UpdatePasswordParams} from './data.d';

export async function queryUserList(params?: UserListParams) {
  return request('/api/user_list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function querySelectAllData(params?: UserListParams) {
  return request('/api/user/selectAllData', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}


export async function removeUser(params: { ids: number[] }) {
  return request('/api/user_delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addUser(params: UserListItem) {
  return request('/api/user_save', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateUser(params: UserListItem) {
  return request('/api/user_update', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updatePassword(params: UpdatePasswordParams) {
  return request('/api/update_user_password', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function userRoleList(params: { user_id: number}) {
  return request('/api/query_user_role', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}


export async function updateUserRole(params: { user_id: number ,role_ids: number[]}) {
  return request('/api/update_user_role', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
