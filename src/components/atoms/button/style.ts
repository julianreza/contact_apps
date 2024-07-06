import cn from '@/utils/class-names';
import { TButtonSize, TButtonType, TButtonVariant } from './type';

const baseClasses = 'py-2 px-4 rounded';

const sizeClasses = {
    small: 'text-sm',
    medium: 'text-md',
    large: 'text-lg',
};

const typeClasses = {
    primary: {
        filled: 'bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-800',
        outlined: 'text-blue-500 border-blue-500 border hover:text-blue-700 hover:border-blue-700 active:text-blue-800 active:border-blue-800',
    },
    secondary: {
        filled: 'bg-green-500 text-white hover:bg-green-700 active:bg-green-800',
        outlined: 'text-green-500 border-green-500 border hover:text-green-700 hover:border-green-700 active:text-green-800 active:border-green-800',
    },
    danger: {
        filled: 'bg-red-500 text-white hover:bg-red-700 active:bg-red-800',
        outlined: 'text-white border-red-500 border hover:border-red-700 active:border-red-800',
    },
};

export const getButtonClasses = (
    variant: TButtonVariant = 'filled',
    size: TButtonSize = 'medium',
    type: TButtonType = 'primary'
) => {
    return cn(baseClasses, sizeClasses[size], typeClasses[type][variant]);
}