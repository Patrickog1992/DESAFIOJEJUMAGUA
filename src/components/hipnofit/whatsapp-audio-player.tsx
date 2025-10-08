'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface WhatsAppAudioPlayerProps {
  audioSrc: string;
  avatarSrc: string;
}

export function WhatsAppAudioPlayer({ audioSrc, avatarSrc }: WhatsAppAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const setAudioData = () => {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
      };

      const setAudioTime = () => setCurrentTime(audio.currentTime);

      audio.addEventListener('loadeddata', setAudioData);
      audio.addEventListener('timeupdate', setAudioTime);

      return () => {
        audio.removeEventListener('loadeddata', setAudioData);
        audio.removeEventListener('timeupdate', setAudioTime);
      };
    }
  }, []);
  
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && audio.ended) {
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [currentTime])


  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Number(e.target.value);
      setCurrentTime(audio.currentTime);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-sm bg-green-50 p-3 rounded-lg flex items-center gap-3 shadow-sm border border-green-200">
      <audio ref={audioRef} src={audioSrc} preload="metadata"></audio>
      
      <Button onClick={togglePlayPause} variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-green-500 text-white hover:bg-green-600">
        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
      </Button>
      
      <div className="flex-grow flex flex-col justify-center">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleProgressChange}
          className="w-full h-1 bg-green-200 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #22c55e ${ (currentTime / duration) * 100 }%, #dcfce7 ${ (currentTime / duration) * 100 }%)`
          }}
        />
        <div className="flex justify-between text-xs text-green-800 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <Avatar className="h-12 w-12">
        <AvatarImage src={avatarSrc} alt="Avatar" />
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
    </div>
  );
}
