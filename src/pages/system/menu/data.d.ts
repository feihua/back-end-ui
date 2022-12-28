export interface MenuListItem {
  id:       number;
  status_id: number;
  sort:     number;
  parent_id: number;
  menu_name: string;
  label:    string;
  menu_uRL:  string;
  icon:     string;
  api_uRL:   string;
  remark:   string;
  menu_type: number;
}

export interface MenuListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface MenuListData {
  list: MenuListItem[];
  pagination: Partial<MenuListPagination>;
}

export interface MenuListParams {
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };

}
