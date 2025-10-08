'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  audioSrc: string;
};

export function MinimalistAudioPlayer({ audioSrc }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };
    
    const handleEnd = () => {
        setIsPlaying(false);
        setCurrentTime(0);
    }

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnd);

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnd);
    };
  }, []);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const onScrub = (value: string) => {
    if (audioRef.current) {
        audioRef.current.currentTime = Number(value);
        setCurrentTime(Number(value));
    }
  };

  return (
    <div className="flex items-center w-full max-w-sm p-3 bg-gray-100 rounded-lg shadow-sm border">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      
      <Button onClick={togglePlayPause} variant="ghost" size="icon" className="flex-shrink-0">
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
      </Button>
      
      <div className="flex-grow mx-3 space-y-1">
        <input
          type="range"
          value={currentTime}
          step="1"
          min="0"
          max={duration || 0}
          className="w-full h-1 bg-gray-300 rounded-full appearance-none cursor-pointer"
          onChange={(e) => onScrub(e.target.value)}
          style={{
            background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
              (currentTime / duration) * 100
            }%, #d1d5db ${(currentTime / duration) * 100}%, #d1d5db 100%)`,
          }}
        />
        <div className="text-xs text-gray-500 text-right">
          <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
