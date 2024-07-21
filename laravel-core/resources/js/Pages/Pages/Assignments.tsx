import React, {useEffect, useState} from 'react';
import { PageProps, Conversation, Program } from '@/types';
import Page from '@/Base-components/Page';
import Webmaster from '@/Layouts/Webmaster';
import { AtSign, Blocks, Calendar, Facebook, Hash, ToggleLeft, ToggleRight, User, UserCog } from 'lucide-react';
import { Head, Link, router, useForm } from '@inertiajs/react';

const PagesIndex: React.FC<PageProps<{ conversation: Conversation, from:number, to:number, total:number }>> = ({ auth, menu, conversation, from, to, total }) => {
    return (<>
        <Head title="Pages" />
        <Webmaster
            user={auth.user}
            menu={menu}
            breadcrumb={<li className="breadcrumb-item active" aria-current="page">Pages</li>}
        >
            <Page title='Pages' header={<></>}>
                <table className="table table-report -mt-2">
                    <thead>
                        <tr>
                            <th className="whitespace-nowrap">
                                <input className="form-check-input" type="checkbox" />
                            </th>
                            <th className="whitespace-nowrap">Page</th>
                            <th className="whitespace-nowrap">Messages</th>
                            <th className="whitespace-nowrap">Orders</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </Page>

        </Webmaster>
    </>)
}
export default PagesIndex;