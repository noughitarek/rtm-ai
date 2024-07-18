import Webmaster from '@/Layouts/Webmaster';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Page from '@/Base-components/Page';
import ProfileMenu from '@/Components/Profile/Menu';

export default function Edit({ auth, mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean, status?: string }>) {
    return (
        <Webmaster
            user={auth.user}
            menu={auth.menu}
            breadcrumb={<li className="breadcrumb-item active" aria-current="page">Profile</li>}
        >
            <Head title="Profile" />
            <Page title="Profile" header="">
                <div className="grid grid-cols-12 gap-6 mt-5">
                    <ProfileMenu auth={auth}/>
                </div>
            </Page>
        </Webmaster>
    );
}
