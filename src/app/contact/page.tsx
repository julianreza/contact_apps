"use client"

import { get } from '@/services/axios'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Contact {
    id: string
    firstName: string
    lastName: string
    age: number
    photo: string
}

interface Response {
    message: string
    data: Contact[]
}

const columnHelper = createColumnHelper<Contact>()

const columns = [
    columnHelper.accessor(row => row, {
        id: 'id',
        cell: info => <div className='flex flex-row items-center'>
            <img src={info.getValue().photo} className='w-16 h-16 object-cover rounded-full border border-gray-200 mr-10' />
            <span>{info.getValue().firstName + ' ' + info.getValue().lastName}</span>
        </div>,
        header: () => <span>Contact</span>,
    }),
    columnHelper.accessor('age', {
        header: () => 'Age',
        cell: info => <div className='flex flex-col justify-center h-full'>
            <span>{info.getValue()}</span>
        </div>,
    })
]

const Contact = () => {
    const [data, setData] = useState<Contact[]>([]);
    const [loading, setLoading] = useState<boolean>(false)

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const result = await get<Response>('/contact');
                if (result) {
                    setData(result.data);
                }
            } catch (error) {
                console.error(error);
            }
            setLoading(false)
        };
        fetchData();
    }, []);

    return (
        <div className='p-2'>
            <table className='flex flex-col w-full gap-4 table-auto'>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className='w-full flex flex-row justify-between bg-gray-700 text-white px-10 py-6 rounded-xl'>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className='w-64 text-start'>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                {

                    <tbody> {loading ?
                        <>
                            <tr className='w-full flex flex-row justify-between h-28 border rounded-xl shadow-md mb-4 animate-pulse bg-gray-400'></tr>
                            <tr className='w-full flex flex-row justify-between h-28 border rounded-xl shadow-md mb-4 animate-pulse bg-gray-400'></tr>
                            <tr className='w-full flex flex-row justify-between h-28 border rounded-xl shadow-md mb-4 animate-pulse bg-gray-400'></tr>
                            <tr className='w-full flex flex-row justify-between h-28 border rounded-xl shadow-md mb-4 animate-pulse bg-gray-400'></tr>
                            <tr className='w-full flex flex-row justify-between h-28 border rounded-xl shadow-md mb-4 animate-pulse bg-gray-400'></tr>
                            <tr className='w-full flex flex-row justify-between h-28 border rounded-xl shadow-md mb-4 animate-pulse bg-gray-400'></tr>
                            <tr className='w-full flex flex-row justify-between h-28 border rounded-xl shadow-md mb-4 animate-pulse bg-gray-400'></tr>
                            <tr className='w-full flex flex-row justify-between h-28 border rounded-xl shadow-md mb-4 animate-pulse bg-gray-400'></tr>
                            <tr className='w-full flex flex-row justify-between h-28 border rounded-xl shadow-md mb-4 animate-pulse bg-gray-400'></tr>
                            <tr className='w-full flex flex-row justify-between h-28 border rounded-xl shadow-md mb-4 animate-pulse bg-gray-400'></tr>
                        </> :
                        table.getRowModel().rows.map(row => (
                        <tr key={row.id} className='w-full flex flex-row justify-between px-10 py-6 border rounded-xl shadow-md mb-4'>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className='w-64'>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                        ))}
                    </tbody>
                }
            </table>
        </div>
    )
}

export default Contact