import React, { useEffect, useRef } from 'react';
import pdfjsLib from 'pdfjs-dist/build/pdf';

const PDFViewer = ({ pdfData }) => {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const renderPDF = async () => {
            try {
                // Set the pdf.js worker source
                pdfjsLib.GlobalWorkerOptions.workerSrc = `//mozilla.github.io/pdf.js/build/pdf.worker.js`;
                
                // Create a new PDF document
                const pdf = await pdfjsLib.getDocument(pdfData).promise;
                
                // Get the first page
                const page = await pdf.getPage(1);
                
                // Set the viewport
                const viewport = page.getViewport({ scale: 1.5 });
                
                // Get the canvas element
                const canvas = canvasRef.current;
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                
                // Render the PDF page on the canvas
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport,
                };
                const renderTask = page.render(renderContext);
                await renderTask.promise;
            } catch (error) {
                console.error('Error rendering PDF:', error);
            }
        };
        
        if (pdfData) {
            renderPDF();
        }
    }, [pdfData]);
    
    return (
        <div className="bg-white shadow-md rounded-md p-4">
            <canvas ref={canvasRef} className="w-full" />
        </div>
    );
};

export default PDFViewer;
