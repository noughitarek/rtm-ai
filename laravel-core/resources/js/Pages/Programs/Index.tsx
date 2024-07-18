
import React, {useRef, useState} from 'react';
import { PageProps, ProgramsGroup } from '@/types';
import Page from '@/Base-components/Page';
import Webmaster from '@/Layouts/Webmaster';
import { Blocks, Bookmark, Calendar, CheckSquare, ChevronDown, ChevronLeft, ChevronRight, Contact, Hash, MoreHorizontal, RefreshCw, Search, Settings, Star, Trash2 } from 'lucide-react';
import { Button } from '@headlessui/react';
import { toast } from 'react-toastify';
import DeleteModal from '@/Components/DeleteModal';
import { Head, Link, router, useForm } from '@inertiajs/react';

const ProgramsIndex: React.FC<PageProps<{ groups: ProgramsGroup[], from:number, to:number, total:number }>> = ({ auth, groups, from, to, total }) => {
    const [showDeleteGroupModal, setShowDeleteGroupModal] = useState(false);
    const [isDeletingGroup, setIsDeletingGroup] = useState(false);
    const [showDeleteProgramModal, setShowDeleteProgramModal] = useState(false);
    const [isDeletingProgram, setIsDeletingProgram] = useState(false);

    const programForm = useForm<{ program: number }>({ program: 0 });
    const groupForm = useForm<{ group: number }>({ group: 0 });

    const [activeGroup, setActiveGroup] = useState<ProgramsGroup | null>(groups.length > 0 ? groups[0] : null);
    
    const handleDeleteProgram = async () => {
        setIsDeletingProgram(true);
        await programForm.delete(route('programs.destroy', { id: programForm.data.program }));
        setIsDeletingProgram(false);
        setShowDeleteProgramModal(false);
    };
    const handleDeleteGroup = async () => {
        setIsDeletingGroup(true);
        await groupForm.delete(route('programs.groups.destroy', { id: groupForm.data.group }));
        setIsDeletingGroup(false);
        setShowDeleteGroupModal(false);
    };

    const handleDeleteGroupClick = (event: React.MouseEvent<HTMLButtonElement>, group: number) => {
        event.preventDefault();
        groupForm.setData({ group: group });
        setShowDeleteGroupModal(true);
    };

    const handleDeleteProgramClick = (event: React.MouseEvent<HTMLButtonElement>, program: number) => {
        event.preventDefault();
        programForm.setData({ program: program });
        setShowDeleteProgramModal(true);
    };

    const handleDeleteCancel = () => {
        setShowDeleteGroupModal(false);
        setShowDeleteProgramModal(false);
    };

    return (<>
        <Head title="Entrées" />
        <Webmaster
            user={auth.user}
            menu={auth.menu}
            breadcrumb={<li className="breadcrumb-item active" aria-current="page">Entrées</li>}
        >
        <Page title="Entrées" header={<></>}>
            <div className="grid grid-cols-12 gap-6 mt-8">
                <div className="col-span-12 lg:col-span-3 2xl:col-span-2">
                    <h2 className="intro-y text-lg font-medium mr-auto mt-2">Rubriques</h2>
                    <div className="intro-y box bg-primary p-5 mt-6">
                        <div className="dark:border-darkmode-400 text-white">
                            {inbounds.map(inbound=>{
                                const isActive = activeInbound && inbound.rubrique === activeInbound.rubrique;
                                return (
                                    <Button
                                        key={inbound.rubrique.name}
                                        onClick={() => handleRubriqueChange(inbound.rubrique)}
                                        className={`flex items-center px-3 py-2 rounded-md mt-2 ${isActive ? 'bg-white/10 dark:bg-darkmode-700 font-medium' : ''}`}
                                    >
                                        <Blocks className='w-4 h-4 mr-2' />
                                        {inbound.rubrique.name}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-9 2xl:col-span-10">
                    <div className="intro-y flex flex-col-reverse sm:flex-row items-center">
                        <div className="w-full sm:w-auto relative mr-auto mt-3 sm:mt-0">
                            <Search className="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0 z-10 text-slate-500"/>
                            <input type="text" className="form-control w-full sm:w-64 box px-10" placeholder="Search mail" />
                            <div className="inbox-filter dropdown absolute inset-y-0 mr-3 right-0 flex items-center" data-tw-placement="bottom-start">
                                <ChevronDown className="dropdown-toggle w-4 h-4 cursor-pointer text-slate-500" role="button" aria-expanded="false" data-tw-toggle="dropdown"/>
                            </div>
                        </div>
                        <div className="w-full sm:w-auto flex">
                        <Link href={activeInbound ? route('inbounds.create', {rubrique: activeInbound.rubrique.id}): '#'} className="btn btn-primary shadow-md mr-2">Créer une entrée</Link>
                        </div>
                    </div>
                    <div className="intro-y overflow-auto">
                        <table className="table table-report -mt-2">
                            <thead>
                                <tr>
                                    <th className="whitespace-nowrap">Date</th>
                                    <th className="whitespace-nowrap">Produits</th>
                                    <th className="whitespace-nowrap">Qte</th>
                                    <th className="whitespace-nowrap">Prix UN/HT</th>
                                    <th className="whitespace-nowrap">Montant HT</th>
                                    <th className="whitespace-nowrap">Prix UN/TTC</th>
                                    <th className="whitespace-nowrap">Montant TTC</th>
                                    <th className="whitespace-nowrap">Docs</th>
                                    <th className="whitespace-nowrap">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {activeInbound && activeInbound.inbounds.map((inbound, index) => (
                                <tr key={index} className="intro-x">
                                    <td>
                                        <div className="flex items-center">
                                            <Hash className="h-4 w-4 text-gray-500 mr-1" />
                                            <span className="text-sm text-gray-500">{inbound.id}</span>
                                        </div>
                                        <div className="flex items-center mt-1">
                                            <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                                            <span className="text-sm text-gray-500">
                                                {new Date(inbound.created_at).toLocaleString('en-GB', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    second: '2-digit'
                                                })}
                                            </span>
                                        </div>
                                        <div className="flex items-center mt-1">
                                            <Contact className="h-4 w-4 text-gray-500 mr-2" />
                                            <span className="text-sm text-gray-500">{inbound.supplier.name}</span>
                                        </div>
                                    </td>
                                    <td>
                                        {inbound.inbound_products.map((product, productIndex)=>{
                                            return (
                                                <div className="flex flex-col space-y-1" key={productIndex}>
                                                    <span className='font-medium whitespace-nowrap'>
                                                        {product.product.designation.length > 30
                                                            ? `${product.product.designation.substring(0, 30)}...`
                                                            : product.product.designation}
                                                    </span>
                                                 </div>
                                            )
                                        }) }
                                    </td>
                                    <td>
                                        {inbound.inbound_products.map((product, productIndex)=>{
                                            return (
                                                <div className="flex flex-col space-y-1" key={productIndex}>
                                                    <span className='font-medium'>
                                                        {product.qte}
                                                    </span>
                                                 </div>
                                            )
                                        }) }
                                    </td>
                                    <td>
                                        {inbound.inbound_products.map((product, productIndex)=>{
                                            return (
                                                <div className="flex flex-col space-y-1" key={productIndex}>
                                                    <span className='font-medium'>
                                                        <b>{product.unit_price_excl_tax}</b>
                                                    </span>
                                                 </div>
                                            )
                                        }) }
                                    </td>
                                    <td>
                                        {inbound.inbound_products.map((product, productIndex)=>{
                                            return (
                                                <div className="flex flex-col space-y-1" key={productIndex}>
                                                    <span className='font-medium'>
                                                        <b>{product.total_amount_excl_tax}</b>
                                                    </span>
                                                 </div>
                                            )
                                        }) }
                                    </td>
                                    <td>
                                        {inbound.inbound_products.map((product, productIndex)=>{
                                            return (
                                                <div className="flex flex-col space-y-1" key={productIndex}>
                                                    <span className='font-medium'>
                                                        <b>{product.unit_price_net}</b>
                                                    </span>
                                                 </div>
                                            )
                                        }) }
                                    </td>
                                    <td>
                                        {inbound.inbound_products.map((product, productIndex)=>{
                                            return (
                                                <div className="flex flex-col space-y-1" key={productIndex}>
                                                    <span className='font-medium'>
                                                        <b>{product.total_amount_net}</b>
                                                    </span>
                                                 </div>
                                            )
                                        }) }
                                    </td>
                                    <td>
                                        <div className="flex flex-col space-y-1 whitespace-nowrap">
                                            <Link href="" className="font-medium text-primary">
                                                Bon de commande 
                                            </Link>
                                         </div>
                                        <div className="flex flex-col space-y-1 whitespace-nowrap">
                                            <Link href="" className="font-medium text-primary">
                                                Bon de livraison
                                            </Link>
                                         </div>
                                    </td>
                                    <td className="table-report__action w-56">
                                        <div className="flex justify-center items-center">
                                            <Link className="flex items-center mr-3" href={route('inbounds.edit', { inbound: inbound.id })}>
                                                <CheckSquare className="w-4 h-4 mr-1"/> Modifier
                                            </Link>
                                            <Button className="flex items-center text-danger" onClick={(event) => handleDeleteClick(event, inbound.id)}>
                                                <Trash2 className="w-4 h-4 mr-1" /> Supprimer
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    <DeleteModal showDeleteModal={showDeleteModal} handleDeleteCancel={handleDeleteCancel} handleDeleteConfirm={handleDeleteConfirm} deleting={deleting}/>

                    <div className="p-5 flex flex-col sm:flex-row items-center text-center sm:text-left text-slate-500">
                        <div>4.41 GB (25%) of 17 GB used Manage</div>
                        <div className="sm:ml-auto mt-2 sm:mt-0">
                            Last account activity: 36 minutes ago
                        </div>
                    </div>
                </div>
            </div>
            </Page>
        </Webmaster>            
    </>
        )
}

export default InboundsIndex;