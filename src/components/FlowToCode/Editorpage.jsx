import React from 'react'
import Editor from '@monaco-editor/react';
import langs from '../../../languages.json'
import { Copy01Icon } from 'hugeicons-react';


export default function Editorpage({ showEditor, changetoolpath, selectedLang, setSelectedLang, sendFlowBackend, editorContent, setEditorContent, mountEditor }) {

    const copyContent = async () => {
        try {
            await navigator.clipboard.writeText(editorContent);
            console.log("✅ Copied to clipboard!");
        } catch (err) {
            console.error("❌ Failed to copy: ", err);
        }
    };

    return (
        <div className={`${showEditor ? "editbox2" : ""} editorBox absolute flex flex-col gap-3 bg-white shadow-2xl w-[40%] h-[80%] z-10 rounded-2xl top-[10%]  p-4 transition-position duration-400 ease-in-out `}>

            <div className=' rounded-lg p-2 flex justify-between'>
                <select
                    onClick={changetoolpath}
                    name="Language"
                    id="lang-select"
                    value={selectedLang}
                    onChange={(e) => setSelectedLang(e.target.value)}
                    className='w-[30%] p-2 rounded-md border border-gray-300 focus:outline-none '
                >
                    {selectedLang === "cpp" && (
                        <option value="cpp" hidden>{selectedLang}</option>
                    )}
                    {
                        langs.map((lang, key) => {
                            return (
                                <option key={key} value={lang}>{lang}</option>
                            )
                        })
                    }

                </select>

                <div className='flex gap-[2rem]'>
                    <button  onClick={copyContent} className='hover:bg-gray-200 pl-[.5rem] pr-[.5rem] rounded-[10px]' > <Copy01Icon color="#000" /> </button>
                    <button onClick={sendFlowBackend} className="flex items-center justify-center gap-2 font-semibold text-white bg-orange-400 focus:outline-none hover:scale-[1.05] active:scale-[0.98]  rounded-full px-6 py-2 shadow-lg transition-all duration-300 ease-in-out"> Run </button>
                </div>

            </div>

            <div className='relative w-full flex-1 rounded-lg overflow-hidden'>
                <Editor
                    theme="vs-dark"
                    height="100%"
                    width="100%"
                    language={selectedLang}
                    value={editorContent}
                    onChange={(value) => setEditorContent(value)}
                    className='rounded-lg'
                    onMount={showEditor ? mountEditor : undefined}
                    options={
                        {
                            fontSize:"16px"
                        }
                    }
                />

            </div>
        </div>
    )
}
