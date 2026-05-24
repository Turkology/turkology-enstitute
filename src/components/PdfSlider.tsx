"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function PdfSlider({ url }: { url: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<any>(null);
  const renderTaskRef = useRef<any>(null);

  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    import("pdfjs-dist").then(async (pdfjs) => {
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
      const doc = await pdfjs.getDocument(url).promise;
      if (!cancelled) {
        pdfRef.current = doc;
        setTotalPages(doc.numPages);
        setLoading(false);
      }
    });
    return () => { cancelled = true; };
  }, [url]);

  const renderPage = useCallback(async (num: number) => {
    const pdf = pdfRef.current;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!pdf || !canvas || !container) return;

    if (renderTaskRef.current) {
      try { renderTaskRef.current.cancel(); } catch {}
    }

    setPageLoading(true);
    const page = await pdf.getPage(num);
    const containerWidth = container.clientWidth;
    const baseViewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / baseViewport.width;
    const viewport = page.getViewport({ scale });

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const ctx = canvas.getContext("2d")!;
    const task = page.render({ canvasContext: ctx, viewport });
    renderTaskRef.current = task;
    try { await task.promise; } catch {}
    setPageLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) renderPage(pageNum);
  }, [loading, pageNum, renderPage]);

  const go = (n: number) => {
    setPageNum(Math.max(1, Math.min(totalPages, n)));
  };

  return (
    <div className="flex flex-col">
      {/* Canvas */}
      <div ref={containerRef} className="relative bg-zinc-900 rounded-t-2xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-[70vh]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#1fa4a1] border-t-transparent rounded-full animate-spin" />
              <p className="text-white/40 text-sm">PDF yükleniyor…</p>
            </div>
          </div>
        ) : (
          <div className="relative">
            <canvas ref={canvasRef} className="w-full block" />
            {pageLoading && (
              <div className="absolute inset-0 bg-zinc-900/60 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-[#1fa4a1] border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      {!loading && (
        <div className="flex items-center justify-between gap-4 px-6 py-4 bg-zinc-800 rounded-b-2xl border-t border-white/10">
          {/* Prev */}
          <button
            onClick={() => go(pageNum - 1)}
            disabled={pageNum === 1 || pageLoading}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#1fa4a1] hover:text-black text-white text-sm font-medium transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Önceki</span>
          </button>

          {/* Page counter */}
          <span className="text-white/60 text-sm">
            {pageNum} / {totalPages}
          </span>

          {/* Next */}
          <button
            onClick={() => go(pageNum + 1)}
            disabled={pageNum === totalPages || pageLoading}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#1fa4a1] hover:text-black text-white text-sm font-medium transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            <span className="hidden sm:inline">Sonraki</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
