
import React, {useEffect, useState} from 'react';
import { PageProps, ProgramsGroup, Program } from '@/types';
import Page from '@/Base-components/Page';
import Webmaster from '@/Layouts/Webmaster';
import { Blocks, Calendar, CheckSquare, ChevronDown, Contact, Copy, Edit2, Film, Hash, Headphones, Image, Layers, LayoutPanelTop, MessageSquare, MessageSquareText, ScrollText, Search, Trash, Trash2, User } from 'lucide-react';
import { Button } from '@headlessui/react';
import DeleteModal from '@/Components/DeleteModal';
import { Head, Link, router, useForm } from '@inertiajs/react';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import ConfirmModal from '@/Components/ConfirmModal';

const ProgramsIndex: React.FC<PageProps<{ groups: ProgramsGroup[], from:number, to:number, total:number }>> = ({ menu, auth, groups, from, to, total }) => {
    
    // Group delete modal
    const [showDeleteGroupModal, setShowDeleteGroupModal] = useState(false);
    const [isDeletingGroup, setIsDeletingGroup] = useState(false);
    const handleDeleteGroupClick = (event: React.MouseEvent<HTMLButtonElement>, group: number) => {
        event.preventDefault();
        groupForm.setData({ group: group });
        setShowDeleteGroupModal(true);
    };
    const handleDeleteGroup = async () => {
        setIsDeletingGroup(true);
        try {
            await groupForm.delete(route('programs.groups.destroy', { id: groupForm.data.group }));
            toast.success('Group of programs has been deleted successfully');
            router.get(route('programs.index'));
        } catch(error) {
            toast.error('Error deleting the group of programs');
            console.error('Error details:', error);
        } finally {
            setIsDeletingGroup(false);
            setShowDeleteGroupModal(false);
        }
    };

    // Program delete modal
    const [showDeleteProgramModal, setShowDeleteProgramModal] = useState(false);
    const [isDeletingProgram, setIsDeletingProgram] = useState(false);
    const handleDeleteProgramClick = (event: React.MouseEvent<HTMLButtonElement>, program: number) => {
        event.preventDefault();
        programForm.setData({ program: program });
        setShowDeleteProgramModal(true);
    };
    const handleDeleteProgram = async () => {
        setIsDeletingProgram(true);
        try {
            await programForm.delete(route('programs.destroy', { id: programForm.data.program }));
            toast.success('Program has been deleted successfully');
            router.get(route('programs.index'));
        } catch(error) {
            toast.error('Error deleting the program');
            console.error('Error details:', error);
        } finally {
            setIsDeletingProgram(false);
            setShowDeleteProgramModal(false);
        }
    };

    // Group duplicate modal
    const [showDuplicateGroupModal, setShowDuplicateGroupModal] = useState(false);
    const [isDuplicatingGroup, setIsDuplicatingGroup] = useState(false);
    const handleDuplicateGroupClick = (event: React.MouseEvent<HTMLButtonElement>, group: number) => {
        event.preventDefault();
        groupForm.setData({ group: group });
        setShowDuplicateGroupModal(true);
    };
    const handleDuplicateGroup = async () => {
        setIsDuplicatingGroup(true);
        try {
            await groupForm.post(route('programs.groups.duplicate', { id: groupForm.data.group }));
            toast.success('Group of programs has been duplicated successfully');
            router.get(route('programs.index'));
        } catch(error) {
            toast.error('Error duplicating the group of programs');
            console.error('Error details:', error);
        } finally {
            setIsDuplicatingGroup(false);
            setShowDuplicateGroupModal(false);
        }
    };

    // Program duplicate modal
    const [showDuplicateProgramModal, setShowDuplicateProgramModal] = useState(false);
    const [isDuplicatingProgram, setIsDuplicatingProgram] = useState(false);
    const handleDuplicateProgramClick = (event: React.MouseEvent<HTMLButtonElement>, program: number) => {
        event.preventDefault();
        programForm.setData({ program: program });
        setShowDuplicateProgramModal(true);
    };
    const handleDuplicateProgram = async () => {
        setIsDuplicatingProgram(true);
        try {
            await programForm.post(route('programs.duplicate', { id: programForm.data.program }));
            toast.success('Programs has been duplicated successfully');
            router.get(route('programs.index'));
        } catch(error) {
            toast.error('Error duplicating the program');
            console.error('Error details:', error);
        } finally {
            setIsDuplicatingProgram(false);
            setShowDuplicateProgramModal(false);
        }
    };

    // searning 
    const [activeGroup, setActiveGroup] = useState<ProgramsGroup | null>(groups.length > 0 ? groups[0] : null);
    const [activePrograms, setActivePrograms] = useState<Program[]>(groups.length > 0 ? groups[0].programs : []);
    const [isSearching, setIsSearching] = useState(false);
    useEffect(()=>{
        setActivePrograms(activeGroup ? activeGroup.programs: [])
    }, [activeGroup])

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsSearching(event.target.value != "")
        const programsToFilter = activeGroup ? activeGroup.programs : [];
        const searchTerm = event.target.value.toLowerCase();
        const filteredPrograms = programsToFilter.filter(item => 
            (item.name && item.name.toLowerCase().includes(searchTerm)) ||
            (item.description && item.description.toLowerCase().includes(searchTerm)) ||
            (item.created_by && item.created_by.name.toLowerCase().includes(searchTerm))
        );
        setActivePrograms(filteredPrograms)
    };

    // forms
    const programForm = useForm<{ program: number }>({ program: 0 });
    const groupForm = useForm<{ group: number }>({ group: 0 });

    // format Time Difference function
    const formatTimeDifference = (timestamp: number) => {
        const now = Date.now();
        const difference = now - timestamp;
      
        const secondsInMs = 1000;
        const minutesInMs = 60 * secondsInMs;
        const hoursInMs = 60 * minutesInMs;
        const daysInMs = 24 * hoursInMs;
      
        if (difference < minutesInMs) {
          const seconds = Math.floor(difference / secondsInMs);
          return "few seconds ago";
        } else if (difference < hoursInMs) {
          const minutes = Math.floor(difference / minutesInMs);
          return `${minutes} minutes ago`;
        } else if (difference < daysInMs) {
          const hours = Math.floor(difference / hoursInMs);
          return `${hours} hours ago`;
        } else {
          const days = Math.floor(difference / daysInMs);
          return `${days} days ago`;
        }
      };
    
    // last activity
    const mostRecentActivity = activePrograms.length > 0
    ? activePrograms.reduce((latest, program) => 
        new Date(program.updated_at).getTime() > new Date(latest.updated_at).getTime() ? program : latest
    ) 
    : null;
    const lastActivityBy = mostRecentActivity ? mostRecentActivity.updated_by.name : "";
    const lastActivityAt = mostRecentActivity ? formatTimeDifference(new Date(mostRecentActivity.updated_at).getTime()): "";

    // Modals cancel
    const handleDeleteCancel = () => {
        setShowDeleteGroupModal(false);
        setShowDeleteProgramModal(false);
    };
    const handleDuplicateCancel = () => {
        setShowDuplicateGroupModal(false);
        setShowDuplicateProgramModal(false);
    };

    return (<>
        <Head title="Programs" />
        <Webmaster
            user={auth.user}
            menu={menu}
            breadcrumb={<li className="breadcrumb-item active" aria-current="page">Programs</li>}
        >
        <Page title="Programs" header={<></>}>
            <div className="grid grid-cols-12 gap-6 mt-8">
                <div className="col-span-12 lg:col-span-3 2xl:col-span-2">
                    <h2 className="intro-y text-lg font-medium mr-auto mt-2">Groups</h2>
                    <div className="intro-y box bg-primary p-5 mt-6">
                        <Link href={route('programs.groups.create')} type="button" className="btn text-slate-600 dark:text-slate-300 w-full bg-white dark:bg-darkmode-300 dark:border-darkmode-300 mt-1">
                            <Blocks className="w-4 h-4 mr-2" /> Create a group
                        </Link>
                        <div className="border-t border-white/10 dark:border-darkmode-400 mt-6 pt-6 text-white">
                            {groups.map(group=>{
                                const isActive = activeGroup && group.id === activeGroup.id;
                                return (
                                    <div key={group.id} onClick={() => setActiveGroup(group)}>
                                        <div
                                            className={`cursor-pointer flex items-center ${isActive ? 'bg-white/10 dark:bg-darkmode-700 font-medium' : ''}`}
                                            >
                                            <Button
                                                key={group.name}
                                                className={`flex items-center px-3 py-2 rounded-md mt-2`}
                                            >
                                                <Blocks className='w-4 h-4 mr-2' />
                                                {group.name}
                                            </Button>
                                        </div>
                                        
                                        <div
                                            className={`cursor-pointer flex items-center p-2 ${isActive ? 'bg-white/10 dark:bg-darkmode-700 font-medium' : ''}`}
                                            >
                                            <Button onClick={(event) => handleDuplicateGroupClick(event, group.id)} className={`btn btn-warning w-full rounded-full text-sm `}>
                                                <Copy className='w-4 h-4'/>
                                            </Button>&nbsp;
                                            { activeGroup && (
                                            <Link 
                                                href={route('programs.groups.edit', group.id)}
                                                className={`btn btn-danger w-full rounded-full text-sm`}>

                                                <Edit2 className='w-4 h-4'/>
                                            </Link>)}&nbsp;
                                            { activeGroup && (
                                            <Button
                                                onClick={(event) => handleDeleteGroupClick(event, group.id)}
                                                className={`btn btn-danger w-full rounded-full text-sm`}>

                                                <Trash className='w-4 h-4'/>
                                            </Button>)}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-9 2xl:col-span-10">
                    <div className="intro-y flex flex-col-reverse sm:flex-row items-center">
                        <div className="w-full sm:w-auto relative mr-auto mt-3 sm:mt-0">
                            <Search className="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0 z-10 text-slate-500"/>
                            <input type="text" className="form-control w-full sm:w-64 box px-10" placeholder="Search program" onChange={handleSearchChange}/>
                            <div className="inbox-filter dropdown absolute inset-y-0 mr-3 right-0 flex items-center" data-tw-placement="bottom-start">
                                <ChevronDown className="dropdown-toggle w-4 h-4 cursor-pointer text-slate-500" role="button" aria-expanded="false" data-tw-toggle="dropdown"/>
                            </div>
                        </div>
                        <div className="w-full sm:w-auto flex">
                        <Link href={route('programs.create')} className="btn btn-primary shadow-md mr-2">Create a Program</Link>
                        </div>
                    </div>
                    <div className="intro-y overflow-auto">
                        <table className="table table-report -mt-2">
                            <thead>
                                <tr>
                                    <th className="whitespace-nowrap">#</th>
                                    <th className="whitespace-nowrap">Program</th>
                                    <th className="whitespace-nowrap">Created</th>
                                    <th className="whitespace-nowrap">Rates</th>
                                    <th className="whitespace-nowrap">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {activePrograms && activePrograms.map((program, index) => (
                                <tr key={index} className="intro-x">
                                    <td>
                                        <div className="flex items-center">
                                            <Hash className="h-4 w-4 text-gray-500 mr-1" />
                                            <span className="text-sm text-gray-500">{program.id}</span>
                                        </div>
                                        <div className="flex items-center mt-1">
                                            <Contact className="h-4 w-4 text-gray-500 mr-2" />
                                            <span className="text-sm text-gray-500">{program.group.name}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center">
                                            <LayoutPanelTop className="h-4 w-4 text-gray-500 mr-1" />
                                            <span className="text-sm text-gray-500">{program.name}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <ScrollText className="h-4 w-4 text-gray-500 mr-1" />
                                            <span className="text-sm text-gray-500">
                                                {program.description && program.description.length > 10 
                                                    ? program.description.substring(0, 10) + '...' 
                                                    : program.description}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center">
                                            <User className="h-4 w-4 text-gray-500 mr-1" />
                                            <span className="text-sm text-gray-500">{program.created_by.name}</span>
                                        </div>
                                        <div className="flex items-center mt-1">
                                            <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                                            <span className="text-sm text-gray-500">
                                                {new Date(program.created_at).toLocaleString('en-GB', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    second: '2-digit'
                                                })}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center">
                                            <span className='text-primary'>{program.total_used}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className='text-warning'>{program.total_responses}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className='text-success'>{program.total_orders}</span>
                                        </div>
                                    </td>
                                    <td className="table-report__action w-56">
                                        <div className="flex justify-center items-center">
                                            <Button className="flex items-center text-warning mr-3" onClick={(event) => handleDuplicateProgramClick(event, program.id)}>
                                                <Copy className="w-4 h-4 mr-1" /> Duplicate
                                            </Button>
                                            <Link className="flex items-center mr-3" href={route('programs.edit', { program: program.id })}>
                                                <CheckSquare className="w-4 h-4 mr-1"/> Edit
                                            </Link>
                                            <Button className="flex items-center text-danger" onClick={(event) => handleDeleteProgramClick(event, program.id)}>
                                                <Trash2 className="w-4 h-4 mr-1" /> Delete
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    <DeleteModal showDeleteModal={showDeleteProgramModal} handleDeleteCancel={handleDeleteCancel} handleDeleteConfirm={handleDeleteProgram} deleting={isDeletingProgram}/>
                    <DeleteModal showDeleteModal={showDeleteGroupModal} handleDeleteCancel={handleDeleteCancel} handleDeleteConfirm={handleDeleteGroup} deleting={isDeletingGroup}/>
                    
                    <ConfirmModal
                        showConfirmModal={showDuplicateGroupModal}
                        handleConfirmCancel={handleDuplicateCancel}
                        handleConfirmConfirm={handleDuplicateGroup}
                        confirming={isDuplicatingGroup}
                        title={`Are you sure you want to duplicate the group ?`}
                        description={`This action will create a copy of the group . Any changes made to the duplicate will not affect the original group.`}
                        icon = {<Copy className="w-16 h-16 mx-auto text-warning" />}
                        color="bg-warning"
                    />          
                    <ConfirmModal
                        showConfirmModal={showDuplicateProgramModal}
                        handleConfirmCancel={handleDuplicateCancel}
                        handleConfirmConfirm={handleDuplicateProgram}
                        confirming={isDuplicatingProgram}
                        title={`Are you sure you want to duplicate the program ?`}
                        description={`This action will create a copy of the program . Any changes made to the duplicate will not affect the original group.`}
                        icon = {<Copy className="w-16 h-16 mx-auto text-warning" />}
                        color="bg-warning"
                    />

                    <div className="p-5 flex flex-col sm:flex-row items-center text-center sm:text-left text-slate-500">
                        {!activeGroup && (<div>No group !</div>)}
                        {activeGroup && activePrograms.length>0 && (<div>{activePrograms?.length} of {activePrograms?.length} in {activeGroup?.name}</div>)}
                        {activeGroup && activePrograms.length<=0 && !isSearching && (<div>No programs in {activeGroup?.name} !</div>)}
                        {activeGroup && activePrograms.length<=0 && isSearching && (<div>No results has been found in {activeGroup?.name} !</div>)}
                        { mostRecentActivity && (<div className="sm:ml-auto mt-2 sm:mt-0">
                            Last activity: {lastActivityAt} by {lastActivityBy}
                        </div>)}
                    </div>
                </div>
            </div>
            </Page>
        </Webmaster>            
    </>
        )
}

export default ProgramsIndex;