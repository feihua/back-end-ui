import { request } from 'umi';
import { RoleListParams, RoleListItem } from './data.d';

export async function queryRole(params?: RoleListParams) {
  return request('/api/role_list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function queryMenuByRoleId(params: { role_id?: number }) {
  return request('/api/query_role_menu', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateRoleMenu(params: { role_id: number ,menu_ids:number[]}) {
  return request('/api/update_role_menu', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeRoleOne(params: { id: number }) {
  return request('/api/role_delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeRole(params: { ids: number[] }) {
  return request('/api/role_delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addRole(params: RoleListItem) {
  return request('/api/role_save', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateRole(params: RoleListItem) {
  return request('/api/role_update', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
