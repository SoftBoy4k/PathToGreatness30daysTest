import { useAppSelector } from "./redux-hooks";



export function useLanguage(): string {
    const { language } = useAppSelector( state => state.language );

    return `${language}`;
}