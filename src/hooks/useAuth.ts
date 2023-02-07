import { useAppSelector } from "./redux-hooks";

interface UseAuth {
    isAuth: boolean,
    email: string | null,
    id: string | null,
}

export function useAuth(): UseAuth {
    const { email, id } = useAppSelector( state => state.user );

    return {
        isAuth: !!id,
        email,
        id
    }
} 