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
        if (audio.duration !== Infinity) {
          setDuration(audio.duration);
        }
        setCurrentTime(audio.currentTime);
      };

      const setAudioTime = () => setCurrentTime(audio.currentTime);

      audio.addEventListener('loadedmetadata', setAudioData);
      audio.addEventListener('timeupdate', setAudioTime);
      
      const handleEnded = () => {
        setIsPlaying(false);
        setCurrentTime(0);
      };
      audio.addEventListener('ended', handleEnded);
      
      if (audio.readyState > 0) {
        setAudioData();
      }

      return () => {
        audio.removeEventListener('loadedmetadata', setAudioData);
        audio.removeEventListener('timeupdate', setAudioTime);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [audioSrc]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(e => console.error("Error playing audio:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (audio && duration > 0) {
      const progressContainer = e.currentTarget;
      const clickPosition = e.clientX - progressContainer.getBoundingClientRect().left;
      const newTime = (clickPosition / progressContainer.offsetWidth) * duration;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time === Infinity || time === 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
  
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full max-w-sm bg-green-50 p-3 rounded-lg flex items-center gap-3 shadow-sm border border-green-200">
      <audio ref={audioRef} src={audioSrc} preload="metadata"></audio>
      
      <Button onClick={togglePlayPause} variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-green-500 text-white hover:bg-green-600 flex-shrink-0">
        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
      </Button>
      
      <div className="flex-grow flex flex-col justify-center">
        <div 
          className="w-full h-1.5 bg-green-200 rounded-full cursor-pointer relative"
          onClick={handleSeek}
        >
          <div 
            className="absolute top-0 left-0 h-full bg-green-600 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
           <div 
            className="absolute top-1/2 h-3.5 w-3.5 bg-green-600 rounded-full border-2 border-white -translate-y-1/2"
            style={{ left: `${progressPercentage}%`, transition: 'left 0.1s linear' }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-green-800 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <Avatar className="h-12 w-12 flex-shrink-0">
        <AvatarImage src={avatarSrc} alt="Avatar" />
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
    </div>
  );
}