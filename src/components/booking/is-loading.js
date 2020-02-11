import React from 'react'
import { BoxLoading } from 'react-loadingg';

export default function IsLoading(props) {
    return (
        <div className="isLoading">
            <BoxLoading color={'#9b9b9b'}/>
            <p>
                Đang tải
            </p>
        </div>
    )
}
