import { request } from 'umi';
import { MenuListParams, MenuListItem } from './data.d';

export async function queryMenuList(params?: MenuListParams) {
  return request('/api/menu_list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeMenuOne(params: { ids: number[] }) {
  return request('/api/menu_delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeMenu(params: { ids: number[] }) {
  return request('/api/menu_delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addMenu(params: MenuListItem) {
  return request('/api/menu_save', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateMenu(params: MenuListItem) {
  return request('/api/menu_update', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
