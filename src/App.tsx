import { useState } from 'react';
import { ChildInfoForm } from './components/ChildInfoForm';
import { MilestoneChecklist } from './components/MilestoneChecklist';
import { Results } from './components/Results';
import { Header } from './components/Header';

export interface ChildInfo {
  name: string;
  age: number;
}

export interface ChecklistAnswers {
  [key: string]: boolean;
}

function App() {
  const [step, setStep] = useState<'info' | 'checklist' | 'results'>('info');
  const [childInfo, setChildInfo] = useState<ChildInfo | null>(null);
  const [answers, setAnswers] = useState<ChecklistAnswers>({});

  const handleChildInfoSubmit = (info: ChildInfo) => {
    setChildInfo(info);
    setStep('checklist');
  };

  const handleChecklistComplete = (checklistAnswers: ChecklistAnswers) => {
    setAnswers(checklistAnswers);
    setStep('results');
  };

  const handleRestart = () => {
    setStep('info');
    setChildInfo(null);
    setAnswers({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {step === 'info' && (
          <ChildInfoForm onSubmit={handleChildInfoSubmit} />
        )}
        
        {step === 'checklist' && childInfo && (
          <MilestoneChecklist 
            childInfo={childInfo}
            onComplete={handleChecklistComplete}
          />
        )}
        
        {step === 'results' && childInfo && (
          <Results 
            childInfo={childInfo}
            answers={answers}
            onRestart={handleRestart}
          />
        )}
      </main>
      
      <footer className="text-center py-8 px-4 text-gray-600 text-sm">
        <p>This tool is for educational purposes only and is NOT a diagnostic instrument.</p>
        <p>Always consult with qualified healthcare professionals for proper evaluation.</p>
      </footer>
    </div>
  );
}

export default App;
