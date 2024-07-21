import CustomTextInput from "@/Base-components/Forms/CustomTextInput";
import { DynamicSetting, PageProps } from "@/types";
import { Save } from "lucide-react";

const GeneralSettings: React.FC<{ settings: DynamicSetting }> = ({ settings }) => {
    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="intro-y box col-span-12 2xl:col-span-6">
                <div className="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                    <h2 className="font-medium text-base mr-auto">
                        General settings
                    </h2>
                    <button className="btn btn-outline-secondary hidden sm:flex">
                        <Save className="w-4 h-4 mr-2"/> Save
                    </button>
                </div>
                <div className="p-5">
                    <CustomTextInput title="Id" description="An id for this website" instructions="required" name="settings.id" value={settings.id} handleChange={()=>{}} required={true}/>
                    <CustomTextInput title="Title" description="A title for this website" instructions="required" name="settings.title" value={settings.title} handleChange={()=>{}} required={true}/>
                </div>
            </div>
        </div>
    );
};
export default GeneralSettings;
