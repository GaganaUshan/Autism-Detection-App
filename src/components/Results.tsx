import { AlertCircle, Heart, Phone, FileText, RefreshCw } from 'lucide-react';
import { ChildInfo, ChecklistAnswers } from '../App';

interface ResultsProps {
  childInfo: ChildInfo;
  answers: ChecklistAnswers;
  onRestart: () => void;
}

export function Results({ childInfo, answers, onRestart }: ResultsProps) {
  // Count concerning patterns (reverse-scored items marked true, or typical items marked false)
  const concerningPatterns = [
    !answers.eye_contact,
    !answers.responds_name,
    !answers.points_show,
    !answers.social_smile,
    !answers.joint_attention,
    answers.repetitive_behaviors,
    answers.routine_distress,
    answers.sensory_sensitivity,
    !answers.interest_peers,
  ].filter(Boolean).length;

  const shouldSeekEvaluation = concerningPatterns >= 3;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white rounded-3xl shadow-lg p-8 border-2 border-blue-100">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 rounded-full p-4">
            <Heart className="w-12 h-12 text-blue-500 fill-blue-500" />
          </div>
        </div>
        
        <h2 className="text-center text-blue-700 mb-6">Results for {childInfo.name}</h2>
        
        {shouldSeekEvaluation ? (
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 mb-6">
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-amber-900 mb-2">Consider Professional Evaluation</h3>
                <p className="text-amber-800 mb-4">
                  Based on your responses, it may be helpful to discuss {childInfo.name}'s 
                  development with a healthcare professional. Early evaluation and support 
                  can make a significant difference.
                </p>
                <p className="text-amber-800 text-sm">
                  This does NOT mean your child has autism. Many factors affect development, 
                  and only qualified professionals can provide accurate assessments.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6 mb-6">
            <div className="flex gap-3">
              <Heart className="w-6 h-6 text-green-600 fill-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-green-900 mb-2">Positive Developmental Signs</h3>
                <p className="text-green-800 mb-4">
                  Based on your responses, {childInfo.name} appears to be meeting many 
                  developmental milestones. Continue to support their growth and development.
                </p>
                <p className="text-green-800 text-sm">
                  Remember to maintain regular check-ups with your pediatrician and discuss 
                  any concerns you may have.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6">
          <h3 className="text-blue-900 mb-3">Important Reminders</h3>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li className="flex gap-2">
              <span>•</span>
              <span>Every child develops at their own unique pace</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>This screening is NOT a medical diagnosis</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Early intervention can be beneficial regardless of diagnosis</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Trust your parental instincts - if you're concerned, seek professional advice</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white rounded-3xl shadow-lg p-8 border-2 border-blue-100">
        <h3 className="text-blue-700 mb-4">Next Steps</h3>
        
        <div className="space-y-4">
          <div className="flex gap-4 p-4 bg-blue-50 rounded-xl">
            <Phone className="w-6 h-6 text-blue-500 flex-shrink-0" />
            <div>
              <h4 className="text-gray-800 mb-1">Talk to Your Pediatrician</h4>
              <p className="text-sm text-gray-600">
                Schedule an appointment to discuss your child's development and any concerns
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 p-4 bg-blue-50 rounded-xl">
            <FileText className="w-6 h-6 text-blue-500 flex-shrink-0" />
            <div>
              <h4 className="text-gray-800 mb-1">Learn About Early Intervention</h4>
              <p className="text-sm text-gray-600">
                Research early intervention services available in your area
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 p-4 bg-blue-50 rounded-xl">
            <Heart className="w-6 h-6 text-blue-500 flex-shrink-0" />
            <div>
              <h4 className="text-gray-800 mb-1">Continue Monitoring</h4>
              <p className="text-sm text-gray-600">
                Keep track of developmental milestones and celebrate each achievement
              </p>
            </div>
          </div>
        </div>
        
        <button
          onClick={onRestart}
          className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
        >
          <RefreshCw className="w-5 h-5" />
          Start New Assessment
        </button>
      </div>
      
      <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6 text-center">
        <p className="text-purple-900 text-sm">
          <strong>Resources:</strong> Contact your local health department, pediatrician, 
          or developmental specialist for comprehensive evaluations and support services.
        </p>
      </div>
    </div>
  );
}
