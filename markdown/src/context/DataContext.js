import React, {createContext, useContext ,useState } from 'react';

export const DataContext = createContext();

export default function DataContextProvider({children}) {
const [editorMax, setEditorMaxMax]=useState(false);
const [previewMax, setPreviewMax]=useState(false);
/*const [editorClick, setEditorClick]=useState(false);
const [previewClick, setPreviewClick]=useState(false)*/


    return (
        <DataContext.Provider value={{ editorMax, setEditorMaxMax, previewMax, setPreviewMax}}>
            {children}
        </DataContext.Provider>
    )
}
export const useGlobalContext = () => {
  return useContext(DataContext);
}