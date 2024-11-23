import Typed from 'typed.js';
import axios from 'axios';

export interface ValidationRule {
  type: 'Required' | 'CustomRule';
  message: string;
  validate?: (value: string) => boolean;
}

export interface FormComponent {
  type: 'TextBox' | 'Select' | 'Radio' | 'DatePicker' | 'Password' | 'SSN' | 'Email';
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

/** Actually - Bedrock */
export const getMockBedrockResponse1 = async (sessionId: string, userName: string, inquiry: string, answersLength: number = 1): Promise<BedrockResponse> => {
  try {
    const url1 = 'https://4nm82v58i4.execute-api.us-east-1.amazonaws.com/dev/chat';
    const url2 = 'http://localhost:7000/chat2';

    const response = await axios.post(
      url2,
      {
        session_id: sessionId,
        message: `${inquiry}`,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    //AXIOS PUTS ENTIRE RESPONSE IN DATA
    const data = response.data;
    console.log('data:::::');
    console.log(data);

    // const currentQuestion = data[answersLength - 1] || data[data.length - 1];
    const currentQuestion = response.data;
    // console.log('currentQuestion:::::');
    // console.log(currentQuestion);
    return {
      text: currentQuestion.text,
      component: currentQuestion.component,
      dataCollected: currentQuestion.data,
      progress: currentQuestion.progress,
    };
  } catch (error) {
    console.error('Error calling NODEJS API:', error);
    throw error;
  }
};

/** MOCK OLD API */
// export const getMockBedrockResponse1 = async (sessionId: string, userName: string, inquiry: string, answersLength: number = 1): Promise<BedrockResponse> => {
//   try {
//     const response = await axios.post(
//       'http://localhost:7000/chat',
//       {
//         session_id: sessionId,
//         message: `${inquiry}`,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       },
//     );
//     //AXIOS PUTS ENTIRE RESPONSE IN DATA
//     const data = response.data;
//     // console.log('data:::::');
//     // console.log(data);

//     const currentQuestion = data[answersLength - 1] || data[data.length - 1];
//     // console.log('currentQuestion:::::');
//     // console.log(currentQuestion);
//     return {
//       text: currentQuestion.text,
//       component: currentQuestion.component,
//       dataCollected: [
//         {
//           name: userName,
//           inquiry: inquiry,
//         },
//       ],
//       progress: currentQuestion.progress,
//     };
//   } catch (error) {
//     console.error('Error calling NODEJS API:', error);
//     throw error;
//   }
// };
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
//
