import { Trash2 } from "lucide-react";
import Modal from "@/Base-components/Modal";

interface ConfirmModalProps {
  showConfirmModal: boolean;
  handleConfirmCancel: () => void;
  handleConfirmConfirm: () => void;
  confirming: boolean;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  color?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  showConfirmModal,
  handleConfirmCancel,
  handleConfirmConfirm,
  confirming,
  title,
  description,
  icon,
  color
}) => {
  return (
    <Modal show={showConfirmModal} onClose={handleConfirmCancel} maxWidth="md">
      <div className="p-6">
        {icon}
        <h2 className="mt-6 text-xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-600">
          {description}
        </p>
        <div className="mt-6 flex justify-center">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded"
            onClick={handleConfirmCancel}
            disabled={confirming}
          >
            Cancel
          </button>
          <button
            className={color+` hover:bg-red-700 text-black font-bold py-2 px-4 rounded ${
              confirming ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleConfirmConfirm}
            disabled={confirming}
          >
            {confirming ? "En cours..." : "Confirm"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
