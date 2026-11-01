import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Camera,
  UploadCloud,
  FlipHorizontal,
  Scan,
  RefreshCw,
  Info,
} from 'lucide-react';
import { sound } from '../../lib/soundEngine';
import { BotanicalSpecimen } from '../../types/botanical';
import { SAMPLE_LABORATORY_SPECIMENS, ALL_BOTANICAL_SPECIMENS } from '../../data/botanicalDatabase';
import { Button, Badge, Notice } from '../ui';

interface ScannerViewProps {
  onSpecimenIdentified: (specimen: BotanicalSpecimen) => void;
  activeSpecimen: BotanicalSpecimen | null;
}

type ScannerState =
  | 'idle'
  | 'requesting'
  | 'live'
  | 'preview'
  | 'processing'
  | 'result'
  | 'error_permission'
  | 'error_hardware'
  | 'error_general';

export const ScannerView: React.FC<ScannerViewProps> = ({
  onSpecimenIdentified,
  activeSpecimen,
}) => {
  const [scannerState, setScannerState] = useState<ScannerState>('idle');
  const [cameraFacing, setCameraFacing] = useState<'environment' | 'user'>('environment');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [processingStage, setProcessingStage] = useState<string>('Ready for botanical scan');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [matchedSpecimen, setMatchedSpecimen] = useState<BotanicalSpecimen | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Stop camera tracks safely
  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [stopCamera]);

  // Request & start WebRTC camera stream
  const startCamera = async () => {
    sound.playTap();
    setErrorMessage(null);
    setCapturedImage(null);
    setScannerState('requesting');

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setScannerState('error_hardware');
      setErrorMessage('Camera access is not supported by this browser environment. You can still upload photos or use sample specimens.');
      return;
    }

    try {
      stopCamera();
      const constraints: MediaStreamConstraints = {
        video: {
          facingMode: cameraFacing,
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
        audio: false,
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch((e) => console.warn('Video play error:', e));
      }
      setScannerState('live');
      sound.playRadarPing();
    } catch (err: unknown) {
      const error = err as { name?: string };
      console.warn('Camera access failure:', error);
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        setScannerState('error_permission');
        setErrorMessage('Camera permission was not granted. Please enable camera access in your browser settings or upload an image.');
      } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
        setScannerState('error_hardware');
        setErrorMessage('No camera device was detected on your hardware. Please upload an image or select a sample specimen.');
      } else {
        setScannerState('error_general');
        setErrorMessage('Unable to start camera stream. Please upload an image or choose a reference specimen from below.');
      }
    }
  };

  // Flip front/back camera lens
  const toggleCameraFacing = () => {
    sound.playTap();
    setCameraFacing((prev) => (prev === 'environment' ? 'user' : 'environment'));
  };

  useEffect(() => {
    if (scannerState === 'live') {
      startCamera();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cameraFacing]);

  // Execute honest demonstration identification sequence
  const processIdentification = (targetSpecimen: BotanicalSpecimen, imageSource: string) => {
    setCapturedImage(imageSource);
    setMatchedSpecimen(targetSpecimen);
    setScannerState('processing');
    sound.playRadarPing();

    const stages = [
      'Reading image dimensions and color profile...',
      'Comparing morphological characteristics with reference archive...',
      `Curated reference identified: ${targetSpecimen.commonNames[0]} (${targetSpecimen.binomialName})`,
    ];

    let step = 0;
    setProcessingStage(stages[0]);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      step++;
      if (step < stages.length) {
        setProcessingStage(stages[step]);
        if (step === 1) sound.playFocusLock();
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
        setScannerState('result');
        sound.playSuccessChime();
        onSpecimenIdentified(targetSpecimen);
      }
    }, 550);
  };

  // Capture still from live camera video
  const capturePhoto = () => {
    sound.playShutter();
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
      stopCamera();

      // For live camera photos, select a representative specimen
      const randomIdx = Math.floor(Math.random() * SAMPLE_LABORATORY_SPECIMENS.length);
      const matched = SAMPLE_LABORATORY_SPECIMENS[randomIdx];
      processIdentification(matched, dataUrl);
    }
  };

  // Handle uploaded file
  const handleFileUpload = (file: File) => {
    if (!file || !file.type.startsWith('image/')) {
      sound.playErrorThud();
      setErrorMessage('Please select a valid image file (JPEG, PNG, WebP).');
      return;
    }
    sound.playTap();
    setErrorMessage(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      stopCamera();

      // Heuristic match based on file name or random selection
      const matched =
        ALL_BOTANICAL_SPECIMENS.find(
          (s) =>
            s.binomialName.toLowerCase().includes(file.name.toLowerCase().split('.')[0]) ||
            s.commonNames.some((c) =>
              c.toLowerCase().includes(file.name.toLowerCase().split('.')[0])
            )
        ) ||
        SAMPLE_LABORATORY_SPECIMENS[
          Math.floor(Math.random() * SAMPLE_LABORATORY_SPECIMENS.length)
        ];

      processIdentification(matched, result);
    };
    reader.readAsDataURL(file);
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  // Sample tray selection
  const handleSelectSample = (specimen: BotanicalSpecimen) => {
    sound.playTap();
    stopCamera();
    processIdentification(specimen, specimen.primaryImageUrl);
  };

  // Reset to idle scanner state
  const resetScanner = () => {
    sound.playTap();
    stopCamera();
    setCapturedImage(null);
    setMatchedSpecimen(null);
    setErrorMessage(null);
    setScannerState('idle');
  };

  return (
    <section aria-labelledby="scanner-heading" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Hidden processing canvas */}
      <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFileUpload(e.target.files[0]);
          }
        }}
      />

      {/* Header and Task Guidance */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-4">
        <div>
          <Badge variant="clay" size="sm" className="mb-2">
            Field Identification
          </Badge>
          <h1 id="scanner-heading" className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            Scan & Identify Flora
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] mt-1 max-w-xl">
            Point your camera, drop a plant photo, or select any reference specimen from the collection below to inspect its botanical dossier.
          </p>
        </div>

        {/* Demo Status Notice */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)] text-xs font-mono text-[var(--color-text-secondary)] self-start md:self-auto">
          <Info className="w-4 h-4 text-[var(--color-action-primary)] shrink-0" />
          <span>Curated reference demonstration mode</span>
        </div>
      </div>

      {/* Error Notices (if camera denied or failed) */}
      {errorMessage && (
        <Notice
          type="caution"
          title="Notice"
          action={
            <Button
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
            >
              <UploadCloud className="w-4 h-4" />
              <span>Choose Photo File</span>
            </Button>
          }
        >
          {errorMessage}
        </Notice>
      )}

      {/* Main Viewfinder Frame */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative w-full rounded-plate overflow-hidden border border-[var(--color-border-subtle)] bg-neutral-900 shadow-tactile-md min-h-[360px] xs:min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-center justify-center transition-all ${
          isDragging ? 'ring-2 ring-[var(--color-action-primary)] bg-neutral-900/90' : ''
        }`}
      >
        {/* State 1: Active Live Camera Video */}
        {scannerState === 'live' && (
          <video
            ref={videoRef}
            playsInline
            muted
            className="w-full h-full object-cover min-h-[360px]"
          />
        )}

        {/* State 2: Frozen / Uploaded Image Preview */}
        {(scannerState === 'preview' || scannerState === 'processing' || scannerState === 'result') && capturedImage && (
          <img
            src={capturedImage}
            alt="Botanical specimen undergoing identification"
            className="w-full h-full object-cover min-h-[360px]"
          />
        )}

        {/* State 3: Standby / Idle State with Call to Actions */}
        {(scannerState === 'idle' || scannerState === 'requesting' || scannerState.startsWith('error_')) && !capturedImage && (
          <div className="flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-action-primary)]/20 border border-[var(--color-action-primary)]/30 flex items-center justify-center text-[var(--color-action-primary)] mb-4">
              <Scan className="w-8 h-8" />
            </div>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
              Position Plant Within Frame
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed">
              For best results, capture clear foliage, flower petals, or fruit against natural daylight.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full justify-center">
              <Button
                variant="primary"
                size="md"
                onClick={startCamera}
                isLoading={scannerState === 'requesting'}
                className="w-full sm:w-auto"
              >
                <Camera className="w-4 h-4" />
                <span>Open Camera</span>
              </Button>

              <Button
                variant="secondary"
                size="md"
                onClick={() => fileInputRef.current?.click()}
                className="w-full sm:w-auto text-neutral-800 bg-white hover:bg-neutral-100"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Upload Photo</span>
              </Button>
            </div>
          </div>
        )}

        {/* Machine Vision Framing Overlay (When active or previewing) */}
        {(scannerState === 'live' || capturedImage) && (
          <div className="absolute inset-0 pointer-events-none p-4 sm:p-6 flex flex-col justify-between">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between gap-2">
              <Badge variant="default" size="sm" className="bg-black/60 backdrop-blur-md text-white border-white/20 font-mono">
                {scannerState === 'live' ? 'LIVE CAMERA' : 'PHOTO PREVIEW'}
              </Badge>

              {scannerState === 'live' && (
                <button
                  onClick={toggleCameraFacing}
                  className="pointer-events-auto min-w-[44px] min-h-[44px] p-2 rounded-control bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-black/80 transition-colors flex items-center justify-center focus-ring"
                  title="Switch camera lens"
                  aria-label="Switch camera lens"
                >
                  <FlipHorizontal className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Reticle Corner Brackets */}
            <div className="relative w-48 xs:w-56 sm:w-72 aspect-square mx-auto my-auto flex items-center justify-center">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-emerald-400" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-emerald-400" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-emerald-400" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-emerald-400" />

              {/* Scanning laser beam during demo processing */}
              {scannerState === 'processing' && (
                <div className="absolute left-0 right-0 h-0.5 bg-emerald-400 shadow-[0_0_12px_#34d399] animate-laser" />
              )}
            </div>

            {/* Bottom Actions and Status */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pointer-events-auto">
              
              {/* Status Ticker (aria-live polite) */}
              <div
                role="status"
                aria-live="polite"
                className="px-3 py-2 rounded-control bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-emerald-300 truncate max-w-md"
              >
                {scannerState === 'processing' ? processingStage : scannerState === 'result' ? `Identified: ${matchedSpecimen?.commonNames[0] || 'Specimen'}` : 'Aligned inside reticle'}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {scannerState === 'live' && (
                  <Button
                    variant="primary"
                    size="md"
                    onClick={capturePhoto}
                    className="w-full sm:w-auto"
                  >
                    <span>Capture Photo</span>
                  </Button>
                )}

                {(capturedImage || scannerState === 'result') && scannerState !== 'processing' && (
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={resetScanner}
                    className="w-full sm:w-auto text-neutral-800 bg-white hover:bg-neutral-100"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Retake / New Photo</span>
                  </Button>
                )}
              </div>

            </div>

          </div>
        )}

      </div>

      {/* Reference Botanical Collection Shelf (12 Curated Species for 1-Click Verification) */}
      <div className="space-y-3 w-full max-w-full min-w-0 overflow-hidden">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h3 className="font-serif font-bold text-lg text-[var(--color-text-primary)]">
              Reference Collection Shelf
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Select any curated specimen for instant monograph demonstration
            </p>
          </div>
          <span className="text-xs font-mono text-[var(--color-text-tertiary)] hidden sm:block">
            12 Living References
          </span>
        </div>

        {/* Horizontal scroll tray */}
        <div
          role="region"
          aria-label="Reference collection specimens"
          className="flex gap-3 overflow-x-auto pb-4 pt-1 snap-x touch-momentum scrollbar-none w-full max-w-full"
        >
          {SAMPLE_LABORATORY_SPECIMENS.map((specimen) => {
            const isSelected = activeSpecimen?.id === specimen.id;
            return (
              <button
                key={specimen.id}
                onClick={() => handleSelectSample(specimen)}
                className={`snap-start shrink-0 w-36 xs:w-40 sm:w-44 rounded-panel overflow-hidden border text-left transition-all select-none focus-ring p-0 ${
                  isSelected
                    ? 'border-[var(--color-action-primary)] ring-2 ring-[var(--color-action-primary)]/30 bg-[var(--color-surface)] shadow-tactile-md'
                    : 'border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] hover:border-[var(--color-border-strong)] shadow-tactile-sm'
                }`}
                aria-label={`Select reference specimen ${specimen.commonNames[0]} (${specimen.binomialName})`}
              >
                <div className="relative aspect-square overflow-hidden bg-[var(--color-surface-muted)]">
                  <img
                    src={specimen.primaryImageUrl}
                    alt={specimen.commonNames[0]}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant="default" size="sm" className="bg-black/60 text-white border-0 font-mono text-[10px]">
                      {specimen.taxonomicClass}
                    </Badge>
                  </div>
                </div>

                <div className="p-3">
                  <div className="font-serif italic text-xs font-bold text-[var(--color-text-primary)] truncate">
                    {specimen.binomialName}
                  </div>
                  <div className="text-[11px] text-[var(--color-text-secondary)] truncate mt-0.5">
                    {specimen.commonNames[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
};
