"use client"

import { get } from '@/services/axios'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import Image from 'next/image'
import { useEffect, useReducer, useState } from 'react'

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
            <img src={info.getValue().photo} className='w-16 h-16 object-cover rounded-full border border-gray-200 mr-2'/>
            <span>{info.getValue().firstName + ' ' + info.getValue().lastName}</span>
        </div>,
        header: () => <span>Contact</span>,
    }),
    columnHelper.accessor('age', {
        header: () => 'Age',
        cell: info => info.renderValue(),
    })
]

const Contact = () => {
    const [data, setData] = useState<Contact[]>([]);
    const rerender = useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await get<Response>('/contact');
                if (result) {
                    setData(result.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='p-2'>
            <table className='flex flex-col w-full gap-4'>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className='w-full flex flex-row justify-between bg-gray-100 px-4 py-6 rounded-xl'>
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
                <tbody className='border border-gray-200 rounded-xl'>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className='w-full flex flex-row justify-between px-4 py-10 border-b border-gray-200'>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className='w-64'>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Contact