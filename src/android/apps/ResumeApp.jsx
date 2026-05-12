import {useState} from 'react'
import {Document, Page, pdfjs} from 'react-pdf'
import {Download, ChevronLeft, ChevronRight} from 'lucide-react'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString()

const ResumeApp = () => {
    const [numPages, setNumPages] = useState(null)
    const [page, setPage] = useState(1)

    return (
        <div className="aos-resume">
            <div className="aos-resume-toolbar">
                <button type="button"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page <= 1} aria-label="Previous page">
                    <ChevronLeft size={18}/>
                </button>
                <span>{page} / {numPages || 1}</span>
                <button type="button"
                    onClick={() => setPage((p) => Math.min(numPages || 1, p + 1))}
                    disabled={page >= (numPages || 1)} aria-label="Next page">
                    <ChevronRight size={18}/>
                </button>
                <a href="/files/JohnKabiuMwauraCV.pdf" download aria-label="Download" className="aos-resume-dl">
                    <Download size={18}/>
                </a>
            </div>

            <div className="aos-resume-page">
                <Document
                    file="/files/JohnKabiuMwauraCV.pdf"
                    loading={<p style={{padding: 24}}>Loading…</p>}
                    onLoadSuccess={({numPages}) => setNumPages(numPages)}>
                    <Page
                        pageNumber={page}
                        width={Math.min(window.innerWidth - 32, 900)}
                        renderTextLayer
                        renderAnnotationLayer/>
                </Document>
            </div>
        </div>
    )
}

export default ResumeApp
