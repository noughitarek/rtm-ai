import CustomTextInput from "@/Base-components/Forms/CustomTextInput";
import { DynamicSetting, PageProps } from "@/types";
import { Link } from "@inertiajs/react";
import { Facebook, Save } from "lucide-react";

const FacebookSettings: React.FC<{ settings: DynamicSetting }> = ({ settings }) => {
    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="intro-y box col-span-12 2xl:col-span-6">
                <div className="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                    <h2 className="font-medium text-base mr-auto">
                        Facebook settings
                    </h2>
                    <button className="btn btn-outline-secondary hidden sm:flex">
                        <Save className="w-4 h-4 mr-2"/> Save
                    </button>
                </div>
                <div className="p-5">
                    <a className="btn btn-primary" href={route('facebook_reconnect')}> <Facebook className="w-full"/> Reconnect</a>
                    <CustomTextInput title="Client id" description="An id for this website" instructions="required" name="settings.facebook.client_id" value={settings.facebook.client_id} handleChange={()=>{}} required={true}/>
                    <CustomTextInput title="Client secret" description="A title for this website" instructions="required" name="settings.title" value={settings.facebook.client_secret} handleChange={()=>{}} required={true}/>
                    <CustomTextInput title="Redirect" description="A title for this website" instructions="required" name="settings.title" value={settings.facebook.redirect} handleChange={()=>{}} required={true}/>
                </div>
            </div>
        </div>
    );
};
export default FacebookSettings;
