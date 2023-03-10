export interface UserListItem {
  id:       number;
  status_id: number;
  sort:     number;
  userNo:   number;
  mobile:   string;
  real_name: string;
  remark:   string;
}

export interface UserListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface UserListData {
  list: UserListItem[];
  pagination: Partial<UserListPagination>;
}

export interface UserListParams {
  id?: number;
  pageSize?: number;
  current?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };

}

export interface UpdatePasswordParams {
  id:        number;
  mobilePsw: string;
  rePwd:     string;

}

export interface RoleList {
  id: number;
  name: string;
  remark: string;
}

export interface RoleListData {
  roleList: RoleList[];
}
