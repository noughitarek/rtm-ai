import CustomCheckBox from "@/Base-components/Forms/CustomCheckbox";
import CustomTextInput from "@/Base-components/Forms/CustomTextInput";
import { DynamicSetting, PageProps } from "@/types";
import { Save } from "lucide-react";

const CronjobsSettings: React.FC<{ settings: DynamicSetting }> = ({ settings }) => {
    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="intro-y box col-span-12 2xl:col-span-6">
                <div className="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                    <h2 className="font-medium text-base mr-auto">
                        Cronjobs settings
                    </h2>
                    <button className="btn btn-outline-secondary hidden sm:flex">
                        <Save className="w-4 h-4 mr-2"/> Save
                    </button>
                </div>
                <div className="p-5">
                    <div>
                        <div className="form-check form-switch">
                            <input id="checkbox-switch-7" className="form-check-input" type="checkbox"/>
                            <label className="form-check-label" htmlFor="checkbox-switch-7">Tokens validity check</label>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="form-check form-switch">
                            <input id="checkbox-switch-7" className="form-check-input" type="checkbox"/>
                            <label className="form-check-label" htmlFor="checkbox-switch-7">Update conversations</label>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="form-check form-switch">
                            <input id="checkbox-switch-7" className="form-check-input" type="checkbox"/>
                            <label className="form-check-label" htmlFor="checkbox-switch-7">Send remarketing messages</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CronjobsSettings;
