'use client';

import { useRef, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, RotateCcw, Upload } from 'lucide-react';

interface CameraCaptureProps {
  onCapture: (imageData: string) => void;
}

export function CameraCapture({ onCapture }: CameraCaptureProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState('');

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
        setError('');
      }
    } catch {
      setError('Camera access denied. You can upload an image instead.');
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setIsStreaming(false);
    }
  }, []);

  const capture = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      stopCamera();
      onCapture(dataUrl);
    }
  }, [onCapture, stopCamera]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onCapture(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
        {isStreaming ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <Camera className="h-12 w-12 mb-2" />
            <p className="text-sm">Camera preview</p>
            {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
          </div>
        )}
        <canvas ref={canvasRef} className="hidden" />
      </div>

      <div className="flex gap-2">
        {!isStreaming ? (
          <Button onClick={startCamera} className="flex-1">
            <Camera className="h-4 w-4 mr-2" />
            Start Camera
          </Button>
        ) : (
          <>
            <Button onClick={capture} className="flex-1">
              <Camera className="h-4 w-4 mr-2" />
              Capture
            </Button>
            <Button onClick={stopCamera} variant="outline">
              <RotateCcw className="h-4 w-4" />
            </Button>
          </>
        )}
        <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
          <Upload className="h-4 w-4 mr-2" />
          Upload
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
    </div>
  );
}
