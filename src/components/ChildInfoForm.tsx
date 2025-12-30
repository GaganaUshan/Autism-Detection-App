import { useState } from 'react';
import { Baby, ArrowRight } from 'lucide-react';
import { ChildInfo } from '../App';

interface ChildInfoFormProps {
  onSubmit: (info: ChildInfo) => void;
}

export function ChildInfoForm({ onSubmit }: ChildInfoFormProps) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && age) {
      onSubmit({ name, age: parseInt(age) });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-lg p-8 border-2 border-blue-100">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 rounded-full p-4">
            <Baby className="w-12 h-12 text-blue-500" />
          </div>
        </div>
        
        <h2 className="text-center text-blue-700 mb-3">Welcome to Little Steps!</h2>
        <p className="text-center text-gray-600 mb-8">
          This questionnaire helps track your child's developmental milestones. 
          Remember, every child develops at their own pace.
        </p>
        
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 mb-8">
          <p className="text-amber-800 text-sm">
            <strong>Important:</strong> This is NOT a diagnostic tool. If you have concerns about 
            your child's development, please consult a pediatrician or developmental specialist.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="childName" className="block text-gray-700 mb-2">
              Child's Name or Nickname
            </label>
            <input
              id="childName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:outline-none transition-colors"
              placeholder="Enter name..."
              required
            />
          </div>
          
          <div>
            <label htmlFor="childAge" className="block text-gray-700 mb-2">
              Child's Age (in months)
            </label>
            <input
              id="childAge"
              type="number"
              min="12"
              max="60"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:outline-none transition-colors"
              placeholder="e.g., 24"
              required
            />
            <p className="text-sm text-gray-500 mt-2">Ages 12-60 months (1-5 years)</p>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            Continue to Checklist
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
