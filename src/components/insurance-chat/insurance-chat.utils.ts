import Typed from 'typed.js';
import axios from 'axios';

export interface ValidationRule {
  type: 'Required' | 'CustomRule';
  message: string;
  validate?: (value: string) => boolean;
}

export interface FormComponent {
  type: 'TextBox' | 'Select' | 'Radio' | 'DatePicker' | 'Password' | 'SSN';
  label: string;
  format?: string;
  options?: string[];
  validationRules?: ValidationRule[];
}

export interface BedrockResponse {
  text: string;
  component: FormComponent;
  dataCollected: Record<string, string>[];
  progress: number;
}

export const validateInput = (value: string, rules?: ValidationRule[]): string => {
  if (!rules) return '';

  for (const rule of rules) {
    if (rule.type === 'Required' && !value.trim()) {
      return rule.message;
    }
    if (rule.type === 'CustomRule' && rule.validate && !rule.validate(value)) {
      return rule.message;
    }
  }

  return '';
};

export const startTyping = async (element: Element | null, text: string, typingSpeed: number, typingDelay: number): Promise<Typed | undefined> => {
  if (!text || !element) return;

  element.textContent = '';

  return new Promise<Typed>(resolve => {
    const typed = new Typed(element, {
      strings: [text],
      typeSpeed: typingSpeed,
      startDelay: typingDelay,
      showCursor: false,
      onComplete: () => {
        setTimeout(() => {
          resolve(typed);
        }, 500); // Add delay after typing completes
      },
    });
  });
};

export const getMockBedrockResponse = (userName: string, inquiry: string, answersLength: number = 1): BedrockResponse => {
  const questions: Array<{
    text: string;
    component: FormComponent;
    progress: number;
  }> = [
    {
      text: 'Please provide your date of birth',
      component: {
        type: 'DatePicker',
        label: 'Date of Birth',
        validationRules: [
          {
            type: 'Required',
            message: 'Date of birth is required',
          },
          {
            type: 'CustomRule',
            message: 'Please enter a valid date that is not in the future',
            validate: value => {
              const selectedDate = new Date(value);
              const today = new Date();
              today.setHours(0, 0, 0, 0); // Reset time to start of day for fair comparison
              return selectedDate <= today;
            },
          },
        ],
      },
      progress: 40,
    },
    {
      text: 'What is your annual income range?',
      component: {
        type: 'Select',
        label: 'Annual Income',
        options: ['Less than $30,000', '$30,000 - $50,000', '$50,000 - $75,000', '$75,000 - $100,000', 'More than $100,000'],
        validationRules: [
          {
            type: 'Required',
            message: 'Annual income range is required',
          },
        ],
      },
      progress: 55,
    },
    {
      text: 'What is your annual income range?',
      component: {
        type: 'Radio',
        label: 'Annual Income',
        options: ['< $30K', '$30K - $50K', '$50K - $75K', '$75K - $100K', '> $100K'],
        validationRules: [
          {
            type: 'Required',
            message: 'Annual income range is required',
          },
        ],
      },
      progress: 65,
    },
    {
      text: 'Do you smoke or use tobacco products?',
      component: {
        type: 'Radio',
        label: 'Smoking Status',
        options: ['Yes', 'No'],
        validationRules: [
          {
            type: 'Required',
            message: 'Please select an option',
          },
        ],
      },
      progress: 70,
    },
    {
      text: 'What is your occupation?',
      component: {
        type: 'TextBox',
        label: 'Occupation',
        validationRules: [
          {
            type: 'Required',
            message: 'Occupation is required',
          },
        ],
      },
      progress: 85,
    },
    {
      text: 'What type of insurance coverage are you interested in?',
      component: {
        type: 'Select',
        label: 'Coverage Type',
        options: ['Term Life Insurance', 'Whole Life Insurance', 'Universal Life Insurance', 'Variable Life Insurance', 'Not sure - need more information'],
        validationRules: [
          {
            type: 'Required',
            message: 'Please select a coverage type',
          },
        ],
      },
      progress: 100,
    },
  ];

  const currentQuestion = questions[answersLength - 1] || questions[questions.length - 1];

  return {
    text: currentQuestion.text,
    component: currentQuestion.component,
    dataCollected: [
      {
        name: userName,
        inquiry: inquiry,
      },
    ],
    progress: currentQuestion.progress,
  };
};
export const getMockBedrockResponse1 = async (sessionId: string, userName: string, inquiry: string, answersLength: number = 1): Promise<BedrockResponse> => {
  try {
    const response = await axios.post(
      'http://localhost:7000/chat',
      {
        session_id: sessionId,
        message: `USERNAME: ${userName} INQUIRY: ${inquiry}`,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    //AXIOS PUTS ENTIRE RESPONSE IN DATA
    const data = response.data;
    // console.log('data:::::');
    // console.log(data);

    const currentQuestion = data[answersLength - 1] || data[data.length - 1];
    // console.log('currentQuestion:::::');
    // console.log(currentQuestion);
    return {
      text: currentQuestion.text,
      component: currentQuestion.component,
      dataCollected: [
        {
          name: userName,
          inquiry: inquiry,
        },
      ],
      progress: currentQuestion.progress,
    };
  } catch (error) {
    console.error('Error calling NODEJS API:', error);
    throw error;
  }
};
export const EditMockBedrockResponse1 = async (sessionId: string, previousQuestion: string, previousAnswer: string, answersLength: number = 1): Promise<BedrockResponse> => {
  try {
    const response = await axios.post(
      'http://localhost:7000/chat',
      {
        session_id: sessionId,
        previousQuestion: previousQuestion,
        previousAnswer: previousAnswer,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    //AXIOS PUTS ENTIRE RESPONSE IN DATA
    const data = response.data;
    // console.log('data:::::');
    // console.log(data);

    const currentQuestion = data[answersLength - 1] || data[data.length - 1];
    // console.log('currentQuestion:::::');
    // console.log(currentQuestion);
    return {
      text: currentQuestion.text,
      component: currentQuestion.component,
      dataCollected: currentQuestion.dataCollected,
      progress: currentQuestion.progress,
    };
  } catch (error) {
    console.error('Error calling NODEJS API:', error);
    throw error;
  }
};
