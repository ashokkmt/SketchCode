import { Editor } from '@monaco-editor/react'
export default function AlgoEditorpage({setinitialCode, initialCode, selecteLang}) {

    return (
        <>
            <Editor 
                theme='vs-dark'
                width="100%"
                height="100%"
                language={selecteLang}
                onChange={(newval)=> setinitialCode(newval)}
                value={initialCode}
                options={
                    {
                        fontSize:"16px"
                    }
                }
            />
        </>
    )
}
