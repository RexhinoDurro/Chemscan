'use client';

import { useRef } from 'react';
import { ImageIcon, Plus } from 'lucide-react';

interface CameraControlsProps {
  onCapture: () => void;
  onGalleryUpload: (imageData: string) => void;
  onMenuToggle: () => void;
  isMenuOpen: boolean;
  disabled?: boolean;
}

export function CameraControls({ onCapture, onGalleryUpload, onMenuToggle, isMenuOpen, disabled }: CameraControlsProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  return (
    <div className="absolute bottom-0 left-0 right-0 z-20">
      <div className="bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-20 pb-8 pb-safe px-8">
        <div className="flex items-center justify-between max-w-sm mx-auto">
          {/* Gallery button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-12 h-12 rounded-full border-2 border-white/70 flex items-center justify-center active:scale-90 transition-transform"
            disabled={disabled}
          >
            <ImageIcon className="h-5 w-5 text-white" />
          </button>

          {/* Capture button */}
          <button
            onClick={onCapture}
            className="w-20 h-20 rounded-full border-[3px] border-white flex items-center justify-center active:scale-90 transition-transform"
            disabled={disabled}
          >
            <div className="w-16 h-16 rounded-full bg-white" />
          </button>

          {/* Menu button */}
          <button
            onClick={onMenuToggle}
            className="w-12 h-12 rounded-full border-2 border-white/70 flex items-center justify-center active:scale-90 transition-transform"
          >
            <Plus
              className={`h-5 w-5 text-white transition-transform duration-200 ${isMenuOpen ? 'rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

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
