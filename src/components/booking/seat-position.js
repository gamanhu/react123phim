import React from 'react';
import SeatDistribute from "./seat-distribute";

export default function SeatPosition(props) {

    const abcstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetOrder = abcstr.split('');

    const chunkify = (a, n, balanced) => {
        if (n < 2)
            return [a];

        let len = a.length,
            out = [],
            i = 0,
            size;

        if (len % n === 0) {
            size = Math.floor(len / n);
            while (i < len) {
                out.push(a.slice(i, i += size));
            }
        }

        else if (balanced) {
            while (i < len) {
                size = Math.ceil((len - i) / n--);
                out.push(a.slice(i, i += size));
            }
        }

        else {

            n--;
            size = Math.floor(len / n);
            if (len % size === 0)
                size--;
            while (i < size * n) {
                out.push(a.slice(i, i += size));
            }
            out.push(a.slice(size * n));

        }

        return out;
    }

    const renderGhe = (danhSachGhe) => {
        if (danhSachGhe && danhSachGhe.length > 0) {
            let seatRow = chunkify(danhSachGhe, 10, 9);
            return seatRow.map((item, index) => {
                return (
                    <div key={index} className="seat__row">
                        <span className="row__name">{alphabetOrder[index]}</span>
                        {renderRow(item, alphabetOrder[index])}
                    </div>
                )
            })
        }
    }

    const renderRow = (seatRow, seatRowName) => {
        // console.log(seatRow);
        if (seatRow) {
            return seatRow.map((item, index) => {
                return <SeatDistribute key={index} seatInfo={item} seatNum={index} seatRowName={seatRowName} />
            })
        }
    }
    return (
        <div className="seats__position">
            {renderGhe(props.danhSachGhe)}
        </div>
    )
}
