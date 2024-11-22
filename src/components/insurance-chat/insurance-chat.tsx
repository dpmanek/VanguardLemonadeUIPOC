import { Component, State, Element, h } from '@stencil/core';
import Typed from 'typed.js';
// import { ValidationRule, FormComponent, BedrockResponse, validateInput, startTyping, getMockBedrockResponse } from './insurance-chat.utils';
import { ValidationRule, FormComponent, BedrockResponse, validateInput, startTyping, getMockBedrockResponse, getMockBedrockResponse1 } from './insurance-chat.utils';

@Component({
  tag: 'insurance-chat',
  styleUrl: 'insurance-chat.css',
  shadow: true,
})
export class InsuranceChat {
  @State() currentQuestion: {
    text: string;
    component?: FormComponent;
  };
  // @State() answers: { question: string; answer: string | Record<string, string> }[] = [];
  @State() answers: {
    question: string;
    answer: string | Record<string, string>;
    type: string;
  }[] = [];

  @State() firstName: string = '';
  @State() lastName: string = '';
  @State() primaryValue: string = '';
  @State() userName: string = '';
  @State() isLoading: boolean = false;
  @State() showForm: boolean = false;
  @State() progress: number = 0;
  @State() validationError: string = '';
  @State() showEditModal: boolean = false;
  @State() pendingEditIndex: number = -1;
  @Element() el: HTMLElement;

  private typed: Typed;
  private typingSpeed: number = 15;
  private typingDelay: number = 500;
  private firstNameInput: HTMLInputElement;
  private primaryInput: HTMLInputElement | HTMLSelectElement;
  private initialQuestion = "Let's begin! What's your name?";
  private observer: IntersectionObserver;
  private sessionId: string;
  private chatInterface!: HTMLElement; //scroll

  updateScroll() {
    const chatInterface = this.chatInterface;

    // Smoothly scroll to the bottom
    chatInterface.scrollTo({
      top: chatInterface.scrollHeight,
      behavior: 'smooth',
    });
  }

  componentWillLoad() {
    this.sessionId = `test-1234`;
    this.currentQuestion = {
      text: this.initialQuestion,
      component: {
        type: 'TextBox',
        label: 'Name',
        validationRules: [
          {
            type: 'Required',
            message: 'Please enter your name',
          },
        ],
      },
    };
  }

  componentDidLoad() {
    this.initializeTyping(this.currentQuestion.text);
    this.setupIntersectionObserver();

    this.updateScroll();
  }

  // Lifecycle method: Runs after each update
  componentDidUpdate() {
    this.updateScroll();
  }

  disconnectedCallback() {
    if (this.typed) {
      this.typed.destroy();
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    const options = {
      root: this.el.shadowRoot.querySelector('.chat-interface'),
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target.classList.contains('previous-answer')) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        }
      });
    }, options);

    // Observe all previous answers
    setTimeout(() => {
      const previousAnswers = this.el.shadowRoot.querySelectorAll('.previous-answer');
      previousAnswers.forEach(answer => this.observer.observe(answer));
    }, 0);
  }

  private async initializeTyping(text: string) {
    // Hide form and clear any existing text
    this.showForm = false;
    const element = this.el.shadowRoot.querySelector('.question-text');

    if (!element) {
      console.error('Question text element not found');
      return;
    }

    // Clear existing content and destroy previous typed instance
    element.textContent = '';
    if (this.typed) {
      this.typed.destroy();
    }

    // Create new typed instance
    return new Promise<void>(resolve => {
      this.typed = new Typed(element, {
        strings: [text],
        typeSpeed: this.typingSpeed,
        startDelay: this.typingDelay,
        showCursor: false,
        onComplete: () => {
          setTimeout(() => {
            this.showForm = true;
            setTimeout(() => {
              if (!this.userName && this.firstNameInput) {
                this.firstNameInput.focus();
              } else if (this.userName && this.primaryInput) {
                this.primaryInput.focus();
              }
              // const currentQuestion = this.el.shadowRoot.querySelector('.current-question');
              // if (currentQuestion) {
              //   currentQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
              // }

              const chatInterface = this.el.shadowRoot.querySelector('.chat-interface');
              // const chatInterface = this.chatInterface;

              // Smoothly scroll to the bottom
              chatInterface.scrollTo({
                top: chatInterface.scrollHeight,
                behavior: 'smooth',
              });
              // this.chatInterface.scrollTop = this.chatInterface.scrollHeight;
            }, 100);
            resolve();
          }, 500);
        },
      });
    });
  }

  private handleFirstNameInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    this.firstName = input.value;
    this.validationError = '';
  };

  private handleLastNameInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    this.lastName = input.value;
    this.validationError = '';
  };

  private handleInput = (e: Event) => {
    const input = e.target as HTMLInputElement | HTMLSelectElement;
    this.primaryValue = input.value;
    this.validationError = '';
  };

  private showEditConfirmation(index: number) {
    this.pendingEditIndex = index;
    this.showEditModal = true;
  }

  private cancelEditConfirmation() {
    this.showEditModal = false;
    this.pendingEditIndex = -1;
  }

  private async confirmEdit() {
    this.showEditModal = false;
    const index = this.pendingEditIndex;

    try {
      // Keep only the answers up to the edit point
      this.answers = this.answers.slice(0, index);
      this.primaryValue = '';
      this.validationError = '';
      this.showForm = false; // Hide form while typing animation plays
      this.isLoading = false; // Reset loading state

      if (index === 0) {
        // Reset everything for name edit
        this.userName = '';
        this.firstName = '';
        this.lastName = '';
        this.progress = 0;
        this.sessionId = `test-1234`;

        // Set current question
        this.currentQuestion = {
          text: this.initialQuestion,
          component: {
            type: 'TextBox',
            label: 'Name',
            validationRules: [
              {
                type: 'Required',
                message: 'Please enter your name',
              },
            ],
          },
        };

        // Ensure DOM is updated before initializing typing
        await new Promise(resolve => setTimeout(resolve, 0));
        await this.initializeTyping(this.initialQuestion);
      } else if (index === 1) {
        // Editing "how may I help you" question
        this.progress = 20;
        this.currentQuestion = {
          text: `Hi ${this.userName}, how may I help you today?`,
          component: {
            type: 'TextBox',
            label: 'How can we help?',
            validationRules: [
              {
                type: 'Required',
                message: 'Please let us know how we can help',
              },
            ],
          },
        };
        await this.initializeTyping(this.currentQuestion.text);
      } else {
        // Get the previous answer to maintain context //editting the previous answer
        console.log('index::::' + index);
        const previousAnswer = this.answers[index - 1].answer as string;
        const previousQuestion = this.answers[index - 1].question as string;
        const previousQuestionType = this.answers[index - 1].type as string;
        console.log('previousQuestion::::' + previousQuestion);
        console.log('previousAnswer::::' + previousAnswer);
        console.log('Type::::' + previousQuestionType);
        const mockResponse = await getMockBedrockResponse1(this.sessionId, this.userName, previousAnswer, index);
        // console.log('mockResponse::::');
        // console.log(mockResponse);
        // Set progress based on the current position in the conversation
        this.progress = mockResponse.progress;

        this.currentQuestion = {
          text: mockResponse.text,
          component: mockResponse.component,
        };
        await this.initializeTyping(mockResponse.text);
      }
    } catch (error) {
      console.error('Error during edit:', error);
      this.isLoading = false; // Ensure loading is reset on error
    } finally {
      this.pendingEditIndex = -1;
      this.isLoading = false; // Ensure loading is reset in finally block
    }
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();

    if (!this.userName && (!this.firstName.trim() || !this.lastName.trim())) {
      this.validationError = 'Please enter both first and last name';
      return;
    }

    if (this.userName && !this.primaryValue.trim()) return;

    const validationError = this.userName ? validateInput(this.primaryValue, this.currentQuestion.component?.validationRules) : '';

    if (validationError) {
      this.validationError = validationError;
      return;
    }

    this.validationError = '';
    this.isLoading = true;
    this.showForm = false;

    try {
      if (!this.userName) {
        this.userName = `${this.firstName} ${this.lastName}`;
        const nameAnswer = {
          question: this.currentQuestion.text,
          answer: this.userName,
          type: this.currentQuestion.component.type,
        };
        this.answers = [nameAnswer];

        // Observe the new answer after a short delay to ensure it's in the DOM
        setTimeout(() => {
          const newAnswer = this.el.shadowRoot.querySelector('.previous-answer:last-child');
          if (newAnswer && this.observer) {
            this.observer.observe(newAnswer);
          }
        }, 0);

        this.firstName = '';
        this.lastName = '';
        this.isLoading = false;

        await new Promise(resolve => setTimeout(resolve, 100));

        // const greetingText = `Hi ${this.userName}, how may I help you today?`;
        // this.currentQuestion = {
        //   text: greetingText,
        //   component: {
        //     type: 'TextBox',
        //     label: 'How can we help?',
        //     validationRules: [
        //       {
        //         type: 'Required',
        //         message: 'Please let us know how we can help',
        //       },
        //     ],
        //   },
        // };

        // await this.initializeTyping(greetingText);
        // return;

        try {
          const response = await getMockBedrockResponse1(this.sessionId, ' ', `Hi I am ${this.userName}`, 1);
          this.progress = response.progress;
          this.currentQuestion = {
            text: response.text,
            component: response.component,
          };
          await this.initializeTyping(response.text);
          this.isLoading = false;
        } catch (error) {
          console.error('Error getting response:', error);
          this.isLoading = false;
        }
        return;
      }

      const answer = {
        question: this.currentQuestion.text,
        answer: this.primaryValue,
        type: this.currentQuestion.component.type,
      };
      this.answers = [...this.answers, answer];

      // Observe the new answer after a short delay to ensure it's in the DOM
      setTimeout(() => {
        const newAnswer = this.el.shadowRoot.querySelector('.previous-answer:last-child');
        if (newAnswer && this.observer) {
          this.observer.observe(newAnswer);
        }
      }, 0);

      if (this.answers.length <= 6) {
        //entry into the first call to bedrock response
        // console.log('hit agian' + this.answers.length);
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockResponse = await getMockBedrockResponse1(this.sessionId, this.userName, this.primaryValue, this.answers.length);
        this.progress = mockResponse.progress;
        this.currentQuestion = {
          text: mockResponse.text,
          component: mockResponse.component,
        };
        await this.initializeTyping(mockResponse.text);
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const finalText = `Thank you ${this.userName}! We'll process your information and get back to you shortly.`;
        this.currentQuestion = {
          text: finalText,
        };
        this.progress = 100;
        await this.initializeTyping(finalText);
      }

      this.primaryValue = '';
    } catch (error) {
      console.error('Error processing answer:', error);
    } finally {
      this.isLoading = false;
      // this.chatInterface.scrollTop = this.chatInterface.scrollHeight;
    }
  }

  private renderFormComponent() {
    if (!this.currentQuestion.component) return null;

    switch (this.currentQuestion.component.type) {
      case 'TextBox':
        return (
          <div class="input-wrapper">
            <input
              type="text"
              placeholder={this.currentQuestion.component.format || this.currentQuestion.component.label}
              value={this.primaryValue}
              onInput={this.handleInput}
              ref={el => (this.primaryInput = el)}
              required
            />
          </div>
        );

      case 'Select':
        return (
          <div class="input-wrapper">
            <select onInput={this.handleInput} ref={el => (this.primaryInput = el)} required>
              <option value="">Select {this.currentQuestion.component.label}</option>
              {this.currentQuestion.component.options?.map(option => (
                <option value={option} selected={this.primaryValue === option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );

      case 'Radio':
        return (
          <div class="radio-group">
            {this.currentQuestion.component.options?.map(option => (
              <label class="radio-label">
                <input type="radio" name="radio-option" value={option} checked={this.primaryValue === option} onInput={this.handleInput} />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );

      case 'DatePicker':
        // const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
        const twentyYearsAgo = new Date();
        twentyYearsAgo.setFullYear(twentyYearsAgo.getFullYear() - 20);
        const max = twentyYearsAgo.toISOString().split('T')[0];
        return (
          <div class="input-wrapper">
            <input type="date" max={max} value={this.primaryValue} onInput={this.handleInput} ref={el => (this.primaryInput = el)} required />
          </div>
        );

      case 'Password':
        return (
          <div class="input-wrapper">
            <input
              type="password"
              placeholder={this.currentQuestion.component.label || 'Enter Password'}
              value={this.primaryValue}
              onInput={this.handleInput}
              ref={el => (this.primaryInput = el)}
              required
              minLength={8} // Example: Minimum length for password validation
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" // Example: Regex for password strength
              title="Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, and a number."
            />
          </div>
        );
      case 'SSN':
        const formatSSN = event => {
          let value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
          if (value.length > 3 && value.length <= 5) {
            value = value.replace(/^(\d{3})(\d{0,2})/, '$1-$2'); // Format as ###-##
          } else if (value.length > 5) {
            value = value.replace(/^(\d{3})(\d{2})(\d{0,4})/, '$1-$2-$3'); // Format as ###-##-####
          }
          event.target.value = value; // Update the input value
          this.primaryValue = value; // Update the internal state
          this.handleInput(event); // Call the existing input handler
        };

        return (
          <div class="input-wrapper">
            <input
              type="text"
              placeholder={this.currentQuestion.component.label || 'Enter SSN'}
              value={this.primaryValue}
              onInput={formatSSN}
              ref={el => (this.primaryInput = el)}
              required
              maxLength={11} // SSN Format: ###-##-####
              pattern="\d{3}-\d{2}-\d{4}" // Regex to enforce SSN format
              title="SSN must be in the format ###-##-####"
            />
          </div>
        );
      default:
        return null;
    }
  }

  //masks ssn
  private maskSSN(ssn: string): string {
    if (!ssn || typeof ssn !== 'string') return '';
    // Mask all but the last 4 digits: XXX-XX-####
    return ssn.replace(/^\d{3}-\d{2}-(\d{4})$/, 'XXX-XX-$1');
  }

  //masks password
  private maskPassword(password: string): string {
    if (!password || typeof password !== 'string') return '';
    return '*'.repeat(password.length); // Replace each character with '*'
  }

  /*This will reverse the previous ans*/
  private renderPreviousAnswers() {
    // Create a copy of answers array and reverse it
    const reversedAnswers = [...this.answers].reverse();

    return reversedAnswers.map((answer, index) => {
      // Calculate the original index for edit functionality
      const originalIndex = this.answers.length - 1 - index;

      return (
        <div class="previous-answer" key={originalIndex}>
          <div class="answer-header">{answer.question}</div>
          <div class="answer-content">
            <span>
              {/\bpassword\b/i.test(answer.type)
                ? this.maskPassword(answer.answer.toString())
                : /\bssn\b/i.test(answer.type)
                ? this.maskSSN(answer.answer.toString())
                : typeof answer.answer === 'string'
                ? answer.answer
                : JSON.stringify(answer.answer)}
            </span>
            <button class="edit-button" onClick={() => this.showEditConfirmation(originalIndex)} aria-label="Edit answer"></button>
          </div>
        </div>
      );
    });
  }

  // private renderPreviousAnswers() {
  //   return this.answers.map((answer, index) => (
  //     <div class="previous-answer" key={index}>
  //       <div class="answer-header">{answer.question}</div>
  //       <div class="answer-content">
  //         <span>
  //           {/\bpassword\b/i.test(answer.type)
  //             ? this.maskPassword(answer.answer.toString()) // Mask passwords completely
  //             : /\bssn\b/i.test(answer.type)
  //             ? this.maskSSN(answer.answer.toString()) // Mask SSNs
  //             : typeof answer.answer === 'string'
  //             ? answer.answer
  //             : JSON.stringify(answer.answer)}
  //         </span>
  //         {/* <span>{/\bpassword\b/i.test(answer.question) ? '******' : typeof answer.answer === 'string' ? answer.answer : JSON.stringify(answer.answer)}</span> */}
  //         {/* <span>{typeof answer.answer === 'string' ? answer.answer : JSON.stringify(answer.answer)}</span> */}
  //         <button class="edit-button" onClick={() => this.showEditConfirmation(index)} aria-label="Edit answer"></button>
  //       </div>
  //     </div>
  //   ));
  // }

  private renderCurrentQuestion() {
    if (!this.currentQuestion) return null;

    return (
      <div class="current-question">
        <div class="avatar">
          {/* <img src="https://www.egain.com/chatbot/robin/Chatbot-1-big.jpg" alt="Agent avatar" /> */}
          <img src="https://raw.githubusercontent.com/dpmanek/images/refs/heads/main/Deep%20Manek%20image.png" alt="Agent avatar" />
        </div>
        <div class="question-content">
          <div class="question-text"></div>
          {this.currentQuestion.component && this.showForm && (
            <form onSubmit={e => this.handleSubmit(e)} class="question-form visible">
              <div class="input-group">
                {!this.userName
                  ? [
                      <div class="input-wrapper">
                        <input type="text" placeholder="First name" value={this.firstName} onInput={this.handleFirstNameInput} ref={el => (this.firstNameInput = el)} required />
                      </div>,
                      <div class="input-wrapper">
                        <input type="text" placeholder="Last name" value={this.lastName} onInput={this.handleLastNameInput} required />
                      </div>,
                    ]
                  : this.renderFormComponent()}
              </div>
              {this.validationError && <div class="validation-error">{this.validationError}</div>}
              <button
                type="submit"
                disabled={this.isLoading || (!this.userName && (!this.firstName.trim() || !this.lastName.trim())) || (this.userName && !this.primaryValue.trim())}
              >
                {this.isLoading ? 'Loading...' : this.answers.length === 0 ? 'Get started' : 'Next'}
              </button>
            </form>
          )}
          {this.progress > 0 && (
            <div class="progress-bar">
              <div class="progress" style={{ width: `${this.progress}%` }}></div>
            </div>
          )}
        </div>
      </div>
    );
  }

  private renderEditModal() {
    if (!this.showEditModal) return null;

    return (
      <div class="modal-overlay">
        <div class="modal-dialog">
          <div class="modal-header">Edit question?</div>
          <div class="modal-content">If you do, you'll need to re-answer all questions that follow it</div>
          <div class="modal-buttons">
            <button class="modal-button secondary" onClick={() => this.cancelEditConfirmation()}>
              Cancel
            </button>
            <button class="modal-button primary" onClick={() => this.confirmEdit()}>
              Yes, Edit
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div class="app-wrapper">
        <div class="container">
          <app-navbar></app-navbar>
          {/* <div class="chat-interface"> */}
          <div class="chat-interface" ref={el => (this.chatInterface = el as HTMLElement)}>
            {this.renderCurrentQuestion()}
            {this.renderPreviousAnswers()}
          </div>
          {this.renderEditModal()}
        </div>
      </div>
    );
  }
}
