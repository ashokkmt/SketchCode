import React from 'react'
import Editor from '@monaco-editor/react';
import langs from '../../languages.json'

export default function Editorpage({showEditor, changetoolpath, selectedLang, setSelectedLang, sendFlowBackend, editorContent, setEditorContent, mountEditor}) {
    return (
        <div className={`${showEditor ? "editbox2" : ""} editorBox absolute flex flex-col gap-3 bg-white shadow-2xl w-[40%] h-[80%] z-20 rounded-2xl top-[10%]  p-4 transition-position duration-400 ease-in-out `}>

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

                <button onClick={sendFlowBackend} className="flex items-center justify-center gap-2 font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-6 py-2 shadow-lg transition-all duration-300 ease-in-out"> Run </button>

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
                />

            </div>
        </div>
    )
}
