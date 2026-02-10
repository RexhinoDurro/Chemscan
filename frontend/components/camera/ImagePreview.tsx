'use client';

import { Button } from '@/components/ui/button';
import { RotateCcw, Search } from 'lucide-react';

interface ImagePreviewProps {
  imageData: string;
  onRetake: () => void;
  onAnalyze: () => void;
  isAnalyzing?: boolean;
}

export function ImagePreview({ imageData, onRetake, onAnalyze, isAnalyzing }: ImagePreviewProps) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageData} alt="Captured equation" className="w-full h-full object-contain" />
      </div>

      <div className="flex gap-2">
        <Button onClick={onRetake} variant="outline" className="flex-1" disabled={isAnalyzing}>
          <RotateCcw className="h-4 w-4 mr-2" />
          Retake
        </Button>
        <Button onClick={onAnalyze} className="flex-1" disabled={isAnalyzing}>
          {isAnalyzing ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
          ) : (
            <Search className="h-4 w-4 mr-2" />
          )}
          {isAnalyzing ? 'Analyzing...' : 'Analyze'}
        </Button>
      </div>
    </div>
  );
}
