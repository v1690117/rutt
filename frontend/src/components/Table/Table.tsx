import React from 'react';
import 'antd/dist/antd.css';
import *  as antd from 'antd';


export interface TableProps {
    columns: antd.TableColumnType<any>[];
    data: any[];
}

export const Table = (props: TableProps) => {
    return (
        <antd.Table columns={props.columns} dataSource={props.data}/>
    );
}