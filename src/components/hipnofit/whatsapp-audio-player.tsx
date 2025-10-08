'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Mic } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

type Props = {
  audioSrc: string;
};

export function WhatsAppAudioPlayer({ audioSrc }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current?.currentTime || 0);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current?.duration || 0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('ended', () => setIsPlaying(false));

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, []);

  return (
    <div className="flex items-center w-full max-w-sm p-2 bg-green-100 rounded-lg shadow-sm">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      <button onClick={handlePlayPause} className="flex-shrink-0">
        {isPlaying ? <Pause className="w-8 h-8 text-green-700" /> : <Play className="w-8 h-8 text-green-700" />}
      </button>
      <div className="flex-grow mx-3">
        <div className="w-full h-1 bg-gray-300 rounded-full relative">
          <div 
            className="h-1 bg-green-500 rounded-full"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="absolute w-full h-full opacity-0 cursor-pointer top-0 left-0"
          />
        </div>
        <div className="text-xs text-gray-500 mt-1 text-right">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <Mic className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}
