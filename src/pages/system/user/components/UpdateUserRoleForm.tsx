import { Modal, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, {useEffect, useState} from 'react';
import { UserListItem} from '../data.d';
import {userRoleList} from '../service';

export interface UpdateFormProps {
  onCancel: () => void;
  onSubmit: (values: { user_id: number; role_ids: number[] }) => void;
  updateRoleModalVisible: boolean;
  currentData: Partial<UserListItem>;
}

interface DataRole {
  id:       number;
  status_id: number;
  sort:     number;
  role_name: string;
  remark:   string;
}

const columns: ColumnsType<DataRole> = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: '角色名称',
    dataIndex: 'role_name',
  },
  {
    title: '排序排序',
    dataIndex: 'sort',
  },
  {
    title: '状态',
    dataIndex: 'status_id',
    render: (_, { status_id }) => (
      <>
        <Tag color={status_id===1?'green':'red'}>
          {status_id===1?'启动':'禁用'}
        </Tag>
      </>
    ),
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];


const UpdateUserRoleForm: React.FC<UpdateFormProps> = (props) => {
  const [roleList, setRoleList] = useState<DataRole[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const {
    onSubmit,
    onCancel,
    updateRoleModalVisible,
    currentData,
  } = props;

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleSubmit = () => {
    if (onSubmit) {
      const data1 = {
        user_id: currentData.id || 0,
        role_ids: selectedRowKeys.map((i) => Number(i)),
      };
      onSubmit(data1);
    }
  };

  const modalFooter = { okText: '保存', onOk: handleSubmit, onCancel };

  useEffect(() => {
    if (updateRoleModalVisible) {
      setRoleList([]);
      setSelectedRowKeys([]);
      userRoleList({ user_id: currentData.id || 0 }).then((res) => {
        console.log(res);
        setRoleList(res.data.sys_role_list);

        if (res.data.user_role_ids) {
          setSelectedRowKeys(res.data.user_role_ids)
        }
      });
    }
  }, [props.updateRoleModalVisible]);

  return (
    <Modal
      forceRender
      destroyOnClose
      title="设置角色"
      visible={updateRoleModalVisible}
      width={1200}
      {...modalFooter}
    >

      <div>
        <Table rowKey="id" rowSelection={rowSelection} columns={columns} dataSource={roleList} />
      </div>
    </Modal>

  );
};

export default UpdateUserRoleForm;
