'use client';

import { useRef, useEffect, useState, useCallback, useImperativeHandle, forwardRef } from 'react';
import { Camera, Upload } from 'lucide-react';

export interface FullScreenCameraHandle {
  capture: () => string | null;
}

interface FullScreenCameraProps {
  onGalleryUpload: (imageData: string) => void;
}

export const FullScreenCamera = forwardRef<FullScreenCameraHandle, FullScreenCameraProps>(
  function FullScreenCamera({ onGalleryUpload }, ref) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [permissionDenied, setPermissionDenied] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const startCamera = useCallback(async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
            width: { ideal: 1920 },
            height: { ideal: 1080 },
          },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch {
        setPermissionDenied(true);
      }
    }, []);

    useEffect(() => {
      startCamera();
      return () => {
        if (videoRef.current?.srcObject) {
          const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
          tracks.forEach((track) => track.stop());
        }
      };
    }, [startCamera]);

    useImperativeHandle(ref, () => ({
      capture: () => {
        if (!videoRef.current || !canvasRef.current) return null;
        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;
        ctx.drawImage(video, 0, 0);
        return canvas.toDataURL('image/jpeg', 0.85);
      },
    }));

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onGalleryUpload(reader.result);
        }
      };
      reader.readAsDataURL(file);
      e.target.value = '';
    };

    if (permissionDenied) {
      return (
        <div className="absolute inset-0 bg-dark-200 flex flex-col items-center justify-center text-center px-8">
          <Camera className="h-16 w-16 text-gray-600 mb-4" />
          <p className="text-gray-400 text-lg font-medium mb-2">Camera Access Denied</p>
          <p className="text-gray-500 text-sm mb-6">
            Allow camera access in your browser settings, or upload an image from your gallery.
          </p>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white border border-white/20"
          >
            <Upload className="h-5 w-5" />
            Upload from Gallery
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      );
    }

    return (
      <>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <canvas ref={canvasRef} className="hidden" />
      </>
    );
  }
);
