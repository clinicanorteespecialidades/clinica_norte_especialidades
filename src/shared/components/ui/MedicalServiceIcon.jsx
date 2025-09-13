import { FaStethoscope, FaFlask, FaShieldAlt, FaLeaf } from 'react-icons/fa';

// Mapea el nombre del icono en MEDICAL_SERVICES a un componente de react-icons
const ICON_MAP = {
    stethoscope: FaStethoscope,
    lab: FaFlask,
    'shield-check': FaShieldAlt,
    leaf: FaLeaf
};

const MedicalServiceIcon = ({ name, className = '' }) => {
    const Icon = ICON_MAP[name] || FaStethoscope;
    return <Icon className={`text-primary-600 dark:text-primary-400 w-7 h-7 ${className}`} aria-hidden="true" />;
};

export default MedicalServiceIcon;
