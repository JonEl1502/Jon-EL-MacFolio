import React, {useState} from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import {Download, ChevronLeft, ChevronRight} from "lucide-react";
import {Document, Page, pdfjs} from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <>
            <div id="window-header">
                <WindowControls target="resume"/>
                <h2>Resume.pdf</h2>

                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => setPageNumber(prev => Math.max(1, prev - 1))}
                        disabled={pageNumber <= 1}
                        className="cursor-pointer disabled:opacity-50">
                        <ChevronLeft className="icon"/>
                    </button>
                    <span className="text-sm">{pageNumber} / {numPages || 1}</span>
                    <button 
                        onClick={() => setPageNumber(prev => Math.min(numPages || 1, prev + 1))}
                        disabled={pageNumber >= (numPages || 1)}
                        className="cursor-pointer disabled:opacity-50">
                        <ChevronRight className="icon"/>
                    </button>
                    <a
                        href="files/JohnKabiuMwauraCV.pdf"
                        download
                        className="cursor-pointer"
                        title="Download Resume">
                        <Download className="icon"/>
                    </a>
                </div>
            </div>
            <div className="overflow-auto h-full">
                <Document 
                    file="files/JohnKabiuMwauraCV.pdf"
                    onLoadSuccess={({numPages}) => setNumPages(numPages)}>
                    <Page
                        pageNumber={pageNumber}
                        scale={0.9}
                        renderTextLayer
                        renderAnnotationLayer/>
                </Document>
            </div>
        </>
)
}

const ResumeWindow = WindowWrapper(Resume, "resume")
export default ResumeWindow;
