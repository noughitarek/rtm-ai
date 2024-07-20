import React, {useEffect, useState} from 'react';
import { PageProps, Remarketing, Program } from '@/types';
import Page from '@/Base-components/Page';
import Webmaster from '@/Layouts/Webmaster';
import { Blocks, Calendar, CheckSquare, ChevronDown, Contact, Edit2, Facebook, Film, Hash, Headphones, Image, Layers, LayoutPanelTop, MessageSquare, MessageSquareText, ScrollText, Search, Trash, Trash2, User, UserCog } from 'lucide-react';
import { Button, Input } from '@headlessui/react';
import DeleteModal from '@/Components/DeleteModal';
import { Head, Link, router, useForm } from '@inertiajs/react';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import PaginationInfo from '@/Base-components/PaginationInfo';

const RemarketingsIndex: React.FC<PageProps<{ remarketings: Remarketing[], from:number, to:number, total:number }>> = ({ auth, remarketings, from, to, total }) => {
    return (<>
        <Head title="Remarketings" />
        <Webmaster
            user={auth.user}
            menu={auth.menu}
            breadcrumb={<li className="breadcrumb-item active" aria-current="page">Remarketings</li>}
        >
            <Page title='Remarketings' header={<>
                    <Link className="btn btn-primary" href={route('remarketings.create')}>Create a remarketing</Link>
                        <PaginationInfo start={from} end={to} total={total}/>
                        <div className="w-full xl:w-auto flex items-center mt-3 xl:mt-0">
                            <div className="w-56 relative text-slate-500">
                                <Input type="text" className="form-control w-56 box pr-10" placeholder="Search..." />
                                <Search className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"/> 
                            </div>
                        </div>
                </>}>
                <table className="table table-report -mt-2">
                    <thead>
                        <tr>
                            <th className="whitespace-nowrap">
                                <input className="form-check-input" type="checkbox" />
                            </th>
                            <th className="whitespace-nowrap">Remarketing</th>
                            <th className="whitespace-nowrap">Messages</th>
                            <th className="whitespace-nowrap">Orders</th>
                        </tr>
                    </thead>
                    <tbody>
                        {remarketings.map((remarketing, index)=>(<>
                            <tr className="intro-x" key={index}>
                                <td className="w-10">
                                    <input className="form-check-input" type="checkbox" />
                                </td>
                                <td className="!py-3.5">
                                    <div className="flex items-center">
                                        <div className="ml-4">
                                            <div className="flex items-center">
                                                <Hash className="h-4 w-4 text-gray-500 mr-1" />
                                                <span className="text-gray-500">{remarketing.id}</span>
                                            </div>
                                            <div className="flex items-center mt-1">
                                                <Blocks className="h-4 w-4 text-gray-500 mr-1" />
                                                <span className="text-gray-500">{remarketing.name}</span>
                                            </div>
                                            <div className="flex items-center mt-1">
                                                <Facebook className="h-4 w-4 text-gray-500 mr-1" />
                                                <span className="text-gray-500">{remarketing.facebook_page.name}</span>
                                            </div>
                                            <div className="flex items-center mt-1">
                                                <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                                                <span className="text-gray-500">
                                                {new Date(remarketing.created_at).toLocaleString('en-GB', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    second: '2-digit'
                                                })}</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="!py-3.5">

                                </td>
                            </tr></>
                        ))}
                    </tbody>
                </table>
            </Page>

        </Webmaster>
    </>)
}
export default RemarketingsIndex;