// import { useState } from 'react';
// import './table.css';
// const Table = ({ headData, renderHead, bodyData, renderBody, limit, ...props }: any) => {
//     const initDataShow = limit && bodyData ? bodyData.slice(0, Number(limit)) : bodyData;

//     const [currPage, setCurrPage] = useState(0);
//     const [dataShow, setDataShow] = useState(initDataShow);

//     let pages: IterableIterator<number> | any = 1;

//     let range: any = [];

//     if (limit !== undefined) {
//         let page = Math.floor(bodyData.length / Number(limit));
//         pages = bodyData.length % Number(limit) === 0 ? page : page + 1;
//         range = [Array(pages).keys()]
//     }

//     const selectPage = (page: any) => {
//         const start = Number(limit) * page;
//         const end = start + Number(limit);

//         setDataShow(bodyData.slice(start, end));

//         setCurrPage(page);
//     };

//     return (
//         <div>
//             <div className="table-wrapper">
//                 <table>
//                     {headData && renderHead && (
//                         <thead>
//                             <tr>{headData.map((item: any, index: number) => renderHead(item, index))}</tr>
//                         </thead>
//                     )}
//                     {bodyData && renderBody && (
//                         <tbody>
//                             {bodyData.map((item: any, index: number) => renderBody(item, index))}
//                         </tbody>
//                     )}
//                 </table>
//             </div>
//             {pages > 1 ? (
//                 <div className="table__pagination">
//                     {range.map((item: any, index: number) => (
//                         <div
//                             key={index}
//                             className={`table__pagination-item ${currPage === index ? 'active' : ''}`}
//                             onClick={() => selectPage(index)}
//                         >
//                             {item + 1}
//                         </div>
//                     ))}
//                 </div>
//             ) : null}
//         </div>
//     );
// };

// export default Table;



import React, {useState} from 'react'

import './table.css'

const Table = (props:any) => {

    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData

    const [dataShow, setDataShow] = useState(initDataShow)

    let pages = 1

    let range: Array<number | any> = []

    if (props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.limit))
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1
        range = [Array(pages).keys()]
    }

    const [currPage, setCurrPage] = useState(0)

    const selectPage = (page: any) => {
        const start = Number(props.limit) * page
        const end = start + Number(props.limit)

        setDataShow(props.bodyData.slice(start, end))

        setCurrPage(page)
    }

    return (
        <div>
            <div className="table-wrapper">
                <table>
                    {
                        props.headData && props.renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        props.headData.map((item: any, index: number) => props.renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {
                        props.bodyData && props.renderBody ? (
                            <tbody>
                                {
                                    dataShow.map((item: any, index: number) => props.renderBody(item, index))
                                }
                            </tbody>
                        ) : null
                    }
                </table>
            </div>
            {
                pages > 1 ? (
                    <div className="table__pagination">
                        {
                            range.map((item: any, index: number) => (
                                <div key={index} className={`table__pagination-item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default Table
