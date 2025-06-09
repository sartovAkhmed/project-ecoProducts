import React from 'react';
import { Leaf } from 'lucide-react';

interface EcoRatingProps {
  rating: number;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function EcoRating({ rating, showText = false, size = 'md' }: EcoRatingProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4', 
    lg: 'w-5 h-5'
  };

  return (
    <div className="flex items-center space-x-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Leaf
            key={star}
            className={`${sizeClasses[size]} ${
              star <= rating 
                ? 'text-green-500 fill-current' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      {showText && (
        <span className="text-sm text-gray-600 ml-2">
          {rating}/5 Эко-рейтинг
        </span>
      )}
    </div>
  );
}