import * as React from 'react';
import { Spin, Table } from "antd";
import { useAsync } from '../../../my-hooks';
import { getRateList } from '../../../http';
import './index.less';


export const AsyncDemo = () => {

    const {
        execute: getRates,
        data,
        loading,
    } = useAsync(async () => {
        const res = await getRateList();
        const datalist = res.data.newslist[0].list
        datalist.forEach((v: any, i: number) => v.key = i);
        return datalist;
    });

    React.useEffect(() => {
        getRates();
    },[])

    const columns = [
        {
            title: 'coin_name',
            key: 'coin_name',
            dataIndex: 'coin_name'
        },
        {
            title: 'coin_code',
            key: 'coin_code',
            dataIndex: 'coin_code'
        },
        {
            title: 'cash_buy',
            key: 'cash_buy',
            dataIndex: 'cash_buy'
        },
        {
            title: 'spot_buy',
            key: 'spot_buy',
            dataIndex: 'spot_buy'
        },
        {
            title: 'spot_sell',
            key: 'spot_sell',
            dataIndex: 'spot_sell'
        },
    ]
    
    return (
        <>
            {loading ?
                <Spin/> :
                (
                    <Table  columns={columns} dataSource={data}></Table>
                )
            }
        </>
    )
}