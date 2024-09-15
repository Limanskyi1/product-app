import { useContext } from 'react';
import { AppContext } from '../../app/providers/AppProvider';

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }

    return context;
};
