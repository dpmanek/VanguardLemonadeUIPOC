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
  validationRules?: ValidationRule | ValidationRule[]; // Updated to handle both single rule and array
}

export interface BedrockResponse {
  text: string;
  component: FormComponent;
  dataCollected: Record<string, string>[];
  progress: number;
}

export const generateSessionId = () => {
  const timestamp = Date.now();
  // const randomStr = Math.random().toString(36).substring(2, 8);
  // return `session-${timestamp}-${randomStr}`;
  return `session-${timestamp}`;
};
//old code
// export const validateInput = (value: string, rules?: ValidationRule[]): string => {
//   if (!rules) return '';

//   for (const rule of rules) {
//     if (rule.type === 'Required' && !value.trim()) {
//       return rule.message;
//     }
//     if (rule.type === 'CustomRule' && rule.validate && !rule.validate(value)) {
//       return rule.message;
//     }
//   }

//   return '';
// };

//new code
export const validateInput = (value: string, rules?: ValidationRule | ValidationRule[]): string => {
  if (!rules) return '';

  // Handle single rule object
  if (!Array.isArray(rules)) {
    if (rules.type === 'Required' && !value.trim()) {
      return rules.message;
    }
    if (rules.type === 'CustomRule' && rules.validate && !rules.validate(value)) {
      return rules.message;
    }
    return '';
  }

  // Handle array of rules
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
export const getMockBedrockResponse1 = async (sessionId: string, inquiry: string): Promise<BedrockResponse> => {
  try {
    const url1 = 'https://4nm82v58i4.execute-api.us-east-1.amazonaws.com/dev/chat';
    // const url2 = 'http://localhost:7000/chat2'

    console.log('message to api');
    console.log(inquiry);
    const response = await axios.post(
      url1,
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
    const progressValue = parseInt(data.progress, 10);
    console.log('progressValue:::::');
    console.log(progressValue);
    return {
      text: currentQuestion.text,
      component: currentQuestion.component,
      dataCollected: currentQuestion.data,
      progress: progressValue,
    };
  } catch (error) {
    console.error('Error calling NODEJS API:', error);
    throw error;
  }
};

export const EditMockBedrockResponse1 = async (sessionId: string, previousAnswer: string): Promise<BedrockResponse> => {
  try {
    console.log('Sending Edit Request');
    // console.log('previousQuestion:::::');
    // console.log(previousQuestion);
    // console.log('previousAnswer:::::');
    // console.log(previousAnswer);

    const useredit = `Remove all captured information after "${previousAnswer}". Capture "${previousAnswer}" and reset everything after. No confirmation required.`;
    console.log(useredit);

    const response = await axios.post(
      'https://4nm82v58i4.execute-api.us-east-1.amazonaws.com/dev/chat',
      {
        session_id: sessionId,
        message: useredit,
        // message: `Previous question: ${previousQuestion}. Previous answer: ${previousAnswer}. Reset all information after this field in the flow. No confirmation required.`,
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
    // console.log('data:::::');
    // console.log(data);

    // const currentQuestion = data[answersLength - 1] || data[data.length - 1];
    const currentQuestion = response.data;
    // console.log('currentQuestion:::::');
    // console.log(currentQuestion);
    const progressValue = parseInt(data.progress, 10);
    console.log('progressValue:::::');
    console.log(progressValue);

    return {
      text: currentQuestion.text,
      component: currentQuestion.component,
      dataCollected: currentQuestion.dataCollected,
      progress: progressValue,
    };
  } catch (error) {
    console.error('Error calling NODEJS API:', error);
    throw error;
  }
};
//

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
