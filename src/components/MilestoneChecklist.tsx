import { useState } from 'react';
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import { ChildInfo, ChecklistAnswers } from '../App';

interface MilestoneChecklistProps {
  childInfo: ChildInfo;
  onComplete: (answers: ChecklistAnswers) => void;
}

const milestones = [
  {
    id: 'eye_contact',
    text: 'Makes eye contact with you during interactions',
    category: 'Social Communication'
  },
  {
    id: 'responds_name',
    text: 'Responds when you call their name',
    category: 'Social Communication'
  },
  {
    id: 'points_show',
    text: 'Points to show you interesting things',
    category: 'Social Communication'
  },
  {
    id: 'pretend_play',
    text: 'Engages in pretend play (e.g., feeding a doll)',
    category: 'Play & Imagination'
  },
  {
    id: 'social_smile',
    text: 'Smiles back when you smile at them',
    category: 'Social Communication'
  },
  {
    id: 'joint_attention',
    text: 'Looks where you point or follows your gaze',
    category: 'Social Communication'
  },
  {
    id: 'words_phrases',
    text: 'Uses words or phrases to communicate',
    category: 'Language'
  },
  {
    id: 'repetitive_behaviors',
    text: 'Shows repetitive movements (hand flapping, spinning)',
    category: 'Behaviors',
    reverse: true
  },
  {
    id: 'routine_distress',
    text: 'Gets very upset with small changes in routine',
    category: 'Behaviors',
    reverse: true
  },
  {
    id: 'sensory_sensitivity',
    text: 'Shows extreme sensitivity to sounds, textures, or lights',
    category: 'Behaviors',
    reverse: true
  },
  {
    id: 'interest_peers',
    text: 'Shows interest in other children',
    category: 'Social Communication'
  },
  {
    id: 'imitation',
    text: 'Imitates actions like waving bye-bye or clapping',
    category: 'Social Communication'
  }
];

export function MilestoneChecklist({ childInfo, onComplete }: MilestoneChecklistProps) {
  const [answers, setAnswers] = useState<ChecklistAnswers>({});

  const toggleAnswer = (id: string) => {
    setAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSubmit = () => {
    onComplete(answers);
  };

  const answeredCount = Object.keys(answers).length;
  const totalCount = milestones.length;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl shadow-lg p-8 border-2 border-blue-100">
        <h2 className="text-blue-700 mb-2">Developmental Checklist for {childInfo.name}</h2>
        <p className="text-gray-600 mb-6">
          Select the behaviors you observe in your child. Remember, every child is unique!
        </p>
        
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{answeredCount} of {totalCount}</span>
          </div>
          <div className="w-full bg-blue-100 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(answeredCount / totalCount) * 100}%` }}
            />
          </div>
        </div>
        
        <div className="space-y-3 mb-8">
          {milestones.map((milestone) => (
            <button
              key={milestone.id}
              onClick={() => toggleAnswer(milestone.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all text-left flex items-start gap-3 ${
                answers[milestone.id]
                  ? 'border-blue-400 bg-blue-50'
                  : 'border-blue-100 bg-white hover:border-blue-300'
              }`}
            >
              <div className="flex-shrink-0 mt-1">
                {answers[milestone.id] ? (
                  <CheckCircle2 className="w-6 h-6 text-blue-500" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-300" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-gray-800">{milestone.text}</p>
                <p className="text-xs text-gray-500 mt-1">{milestone.category}</p>
              </div>
            </button>
          ))}
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={answeredCount < totalCount}
          className={`w-full py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md ${
            answeredCount === totalCount
              ? 'bg-blue-500 hover:bg-blue-600 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          View Results
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
