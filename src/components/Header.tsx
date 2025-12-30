import { Heart, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-3">
          <div className="relative">
            <Heart className="w-8 h-8 text-blue-400 fill-blue-400" />
            <Sparkles className="w-4 h-4 text-blue-300 absolute -top-1 -right-1" />
          </div>
          <div>
            <h1 className="text-blue-600">Little Steps</h1>
            <p className="text-sm text-gray-600">Developmental Milestone Tracker</p>
          </div>
        </div>
      </div>
    </header>
  );
}
