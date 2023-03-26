import React, { useEffect, useState } from "react";
import { DatePicker } from 'antd';
import moment from "moment";
import ReactPaginate from 'react-paginate';

const { RangePicker } = DatePicker;

export default function Table() {

    const [isList, setIsList] = useState(false);
    const [info, setInfo] = useState();
    const [entries, setEntries] = useState(10);
    const [page, setPage] = useState(1);
    const [fromDate, setFromDate] = useState('2022-04-01');
    const [toDate, setToDate] = useState('2022-08-24');
    const [tPage, setTPage] = useState(12);

    const handlePageChange = (event) => {
        setPage(event.selected + 1)
    }

    useEffect(() => {
        fetch(`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${fromDate}&todate=${toDate}&page=${page}&limit=${entries}`).then((response) =>
            response.json()).then((data) => {
                setInfo(data);
                setTPage(data.data.pages);
            })
    }, [page, entries, toDate, fromDate])

    return (
        <>
        <div className="m-4 bg-gray-800 p-2 h-3/4 lg:h-3/5 rounded-md overflow-auto">
            <div className="flex justify-between">
                <div onClick={() => setIsList(!isList)} className="w-20 h-10 p-4 shadow rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer mb-2">
                    {entries}
                    <div>
                        <div>
                            <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z" fill="#1F2937" />
                            </svg>
                        </div>
                    </div>
                </div>
                {isList && (
                    <div className="absolute text-lg md:text-xl mt-12 w-20">
                        <div className="w-50 bg-white">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center" onClick={() => { setEntries(10) }}>
                                    10
                                </div>
                            </div>
                        </div>
                        <div className="w-50 bg-white ">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center" onClick={() => { setEntries(50) }}>
                                    50
                                </div>
                            </div>
                        </div>
                        <div className="w-50 bg-white ">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center" onClick={() => { setEntries(100) }}>
                                    100
                                </div>
                            </div>
                        </div>
                        <div className="w-50 bg-white ">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center" onClick={() => { setEntries(500) }}>
                                    500
                                </div>
                            </div>
                        </div>
                        <div className="w-50 bg-white ">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center" onClick={() => { setEntries(1000) }}>
                                    1000
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <>
                    <RangePicker
                        className="mb-2 w-28 md:w-52"
                        onChange={(values) => {
                            const v1 = values[0].format('YYYY-MM-DD') ;
                            const v2 = values[1].format('YYYY-MM-DD') ;
                            setFromDate(v1) ;
                            setToDate(v2) ;
                        }}
                        size='small'
                    />
                </>
            </div>
            <table class="text-left w-full h-3/5">
                <thead class="bg-gray-900 text-white w-full justify-center overflow-x-auto">
                    <tr class="flex mb-4 justify-around text-sm md:text-lg">
                        <th class="p-4 w-1/4">Date</th>
                        <th class="p-4 w-1/4">Day Installs</th>
                        <th class="p-4 w-1/4">Platform</th>
                        <th class="p-4 w-1/4">Day uninstalls</th>
                        <th class="p-4 w-1/4">Platform</th>
                        <th class="p-4 w-1/4">Churn Rate</th>
                        <th class="p-4 w-1/4">Churn Platform</th>
                    </tr>
                </thead>
                <tbody className="text-xs md:text-sm w-full h-3/5 bg-gray-800 overflow-y-auto ">
                    {info && info.data.data.map((res) => {
                        const d = new Date(res.created_At);
                        return (
                            <tr className="flex justify-around text-white">
                                <td class="p-4 w-1/4">{d.getDate() + " " + d.toLocaleString('default', { month: 'long' }) + " " + d.getUTCFullYear()}</td>
                                <td class="p-4 w-1/4">{res.totalinstall}</td>
                                <td class="p-4 w-1/4">
                                    <div className="">
                                        <p>{res.ios_install}</p>
                                        <p>{res.android_install}</p>
                                    </div>
                                </td>
                                <td class="p-4 w-1/4">{res.totaluninstall}</td>
                                <td class="p-4 w-1/4">
                                    <div className="">
                                        <p>{res.ios_uninstall}</p>
                                        <p>{res.android_uninstall}</p>
                                    </div>
                                </td>
                                <td class="p-4 w-1/4">{res.totalchurn}</td>
                                <td class="p-4 w-1/4">
                                    <div className="">
                                        <p>{res.ios_churn}</p>
                                        <p>{res.android_churn}</p>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                onPageChange={handlePageChange}
                pageCount={tPage}
                containerClassName={'flex text-white bg-gray-900 text-md ml-4 space-x-3 w-fit px-6 py-1 rounded-md md:hidden'}
                activeClassName={'bg-violet-800 w-7 h-7 items-center rounded-full flex justify-center'}
            />
        </div>
        <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                onPageChange={handlePageChange}
                pageCount={tPage}
                containerClassName={'hidden md:flex text-white bg-gray-800 text-md ml-4 space-x-3 w-fit px-6 py-1 rounded-md'}
                activeClassName={'bg-violet-800 w-7 h-7 items-center rounded-full flex justify-center'}
        />
        </>
    );
}
