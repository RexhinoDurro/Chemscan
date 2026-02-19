'use client';

import { useRef, useState, useCallback } from 'react';
import { FullScreenCamera, type FullScreenCameraHandle } from '@/components/camera/FullScreenCamera';
import { CameraControls } from '@/components/camera/CameraControls';
import { FanOutMenu } from '@/components/camera/FanOutMenu';
import { ResultsOverlay } from '@/components/camera/ResultsOverlay';
import { analyzeImage } from '@/lib/api/ai-client';
import { Loader2 } from 'lucide-react';
import type { AnalyzeImageResponse } from '@/lib/types';

type ViewState = 'viewfinder' | 'analyzing' | 'results';

export default function HomePage() {
  const cameraRef = useRef<FullScreenCameraHandle>(null);
  const [viewState, setViewState] = useState<ViewState>('viewfinder');
  const [menuOpen, setMenuOpen] = useState(false);
  const [result, setResult] = useState<AnalyzeImageResponse | null>(null);
  const [error, setError] = useState('');

  const handleAnalyze = useCallback(async (imageData: string) => {
    setViewState('analyzing');
    setError('');
    setMenuOpen(false);
    try {
      const data = await analyzeImage(imageData);
      setResult(data);
      setViewState('results');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to analyze image. Please try again.');
      setViewState('viewfinder');
    }
  }, []);

  const handleCapture = useCallback(() => {
    const imageData = cameraRef.current?.capture();
    if (imageData) {
      handleAnalyze(imageData);
    }
  }, [handleAnalyze]);

  const handleGalleryUpload = useCallback((imageData: string) => {
    handleAnalyze(imageData);
  }, [handleAnalyze]);

  const handleScanAgain = useCallback(() => {
    setResult(null);
    setViewState('viewfinder');
    setError('');
  }, []);

  return (
    <>
      {/* Layer 1: Camera feed */}
      <FullScreenCamera
        ref={cameraRef}
        onGalleryUpload={handleGalleryUpload}
      />

      {/* Error toast */}
      {error && (
        <div className="absolute top-12 left-4 right-4 z-50 bg-red-500/90 text-white text-sm px-4 py-3 rounded-xl text-center animate-fade-in">
          {error}
        </div>
      )}

      {/* Layer 2: Analyzing spinner */}
      {viewState === 'analyzing' && (
        <div className="absolute inset-0 z-40 bg-black/40 flex flex-col items-center justify-center">
          <Loader2 className="h-10 w-10 text-white animate-spin mb-3" />
          <p className="text-white/80 text-sm">Analyzing equation...</p>
        </div>
      )}

      {/* Layer 3: Fan-out menu */}
      <FanOutMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Layer 4: Camera controls (hidden during results) */}
      {viewState !== 'results' && (
        <CameraControls
          onCapture={handleCapture}
          onGalleryUpload={handleGalleryUpload}
          onMenuToggle={() => setMenuOpen((v) => !v)}
          isMenuOpen={menuOpen}
          disabled={viewState === 'analyzing'}
        />
      )}

      {/* Layer 5: Results overlay */}
      {viewState === 'results' && result && (
        <ResultsOverlay result={result} onScanAgain={handleScanAgain} />
      )}
    </>
  );
}
