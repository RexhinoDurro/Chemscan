'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CameraCapture } from '@/components/camera/CameraCapture';
import { ImagePreview } from '@/components/camera/ImagePreview';
import { analyzeImage } from '@/lib/api/ai-client';
import { useCalculationStore } from '@/lib/stores/calculationStore';
import { Camera, ArrowRight } from 'lucide-react';
import type { AnalyzeImageResponse } from '@/lib/types';

export default function ScanPage() {
  const router = useRouter();
  const { setEquation, setQuantities } = useCalculationStore();
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalyzeImageResponse | null>(null);
  const [error, setError] = useState('');

  const handleCapture = (imageData: string) => {
    setCapturedImage(imageData);
    setResult(null);
    setError('');
  };

  const handleAnalyze = async () => {
    if (!capturedImage) return;
    setIsAnalyzing(true);
    setError('');
    try {
      const data = await analyzeImage(capturedImage);
      setResult(data);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to analyze image. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleUseResult = () => {
    if (!result) return;
    setEquation(result.equation);
    if (result.quantities?.length > 0) {
      setQuantities(result.quantities);
    }
    router.push('/calculate');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Camera className="h-5 w-5 text-primary-600" />
        <h1 className="text-xl font-bold">Scan Equation</h1>
      </div>

      <Card>
        <CardContent className="pt-6">
          {!capturedImage ? (
            <CameraCapture onCapture={handleCapture} />
          ) : (
            <ImagePreview
              imageData={capturedImage}
              onRetake={() => {
                setCapturedImage(null);
                setResult(null);
              }}
              onAnalyze={handleAnalyze}
              isAnalyzing={isAnalyzing}
            />
          )}
        </CardContent>
      </Card>

      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">{error}</div>
      )}

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">OCR Result</CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Confidence:</span>
              <Badge variant={result.confidence > 0.8 ? 'success' : result.confidence > 0.5 ? 'warning' : 'destructive'}>
                {(result.confidence * 100).toFixed(0)}%
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <span className="text-sm font-medium">Detected Equation:</span>
              <p className="font-mono text-lg mt-1">{result.equation}</p>
            </div>
            {result.raw_text && (
              <div>
                <span className="text-sm font-medium text-gray-500">Raw text:</span>
                <p className="text-sm text-gray-600">{result.raw_text}</p>
              </div>
            )}
            <Button onClick={handleUseResult} className="w-full">
              Use this equation
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
