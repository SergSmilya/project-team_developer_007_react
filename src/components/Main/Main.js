import {ChooseYourBreakfast} from "./ChooseYourBreakfast/ChooseYourBreakfast";
import {Search} from "./Search/Search";
import {PreviewCategories} from "./PreviewCategories/PreviewCategories"
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Main =()=> {
    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue]= useState('');

    const query = searchParams.get('query');

    useEffect(()=> {
        if (query) {
            setValue('query')
        }
    }, [query])

    const formSubmitHendler =data=> {
       setSearchParams({query:data});
        
          }

    return(
        <>
        <ChooseYourBreakfast/>
        <Search onSubmit={formSubmitHendler} data = {value}/>
        <PreviewCategories/>
        </>
    )
}