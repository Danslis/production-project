import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ПРОСМОТРА ПОВЕДЕНИЯ!
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));
