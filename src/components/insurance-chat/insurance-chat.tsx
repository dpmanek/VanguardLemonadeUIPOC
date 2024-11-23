import { Component, State, Element, h } from '@stencil/core';
import Typed from 'typed.js';
// import { ValidationRule, FormComponent, BedrockResponse, validateInput, startTyping, getMockBedrockResponse } from './insurance-chat.utils';
import { ValidationRule, FormComponent, BedrockResponse, validateInput, startTyping, getMockBedrockResponse1 } from './insurance-chat.utils';

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
  @State() inputValues: { [key: string]: string } = {}; // Multiple

  private typed: Typed;
  private typingSpeed: number = 5;
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

  // private handleInput = (e: Event) => {
  //   const input = e.target as HTMLInputElement | HTMLSelectElement;
  //   this.primaryValue = input.value;
  //   this.validationError = '';
  // };

  //handling multiple form inputs
  private handleInput = (e: Event, index: number) => {
    const input = e.target as HTMLInputElement | HTMLSelectElement;
    this.inputValues = {
      ...this.inputValues,
      [`component-${index}`]: input.value,
    };
    // console.log('Input Values:', this.inputValues); // Debug log
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

  //typing edit for handle submit
  private async handleSubmit(e: Event) {
    e.preventDefault();

    if (!this.userName && (!this.firstName.trim() || !this.lastName.trim())) {
      this.validationError = 'Please enter both first and last name';
      return;
    }

    // For non-name inputs, check if we have a value
    if (this.userName) {
      // For single component
      if (!Array.isArray(this.currentQuestion.component)) {
        if (!this.inputValues['component-0']?.trim()) {
          this.validationError = 'This field is required';
          return;
        }
      }
      // For multiple components
      else {
        const hasEmptyInputs = this.currentQuestion.component.some((_, index) => !this.inputValues[`component-${index}`]?.trim());
        if (hasEmptyInputs) {
          this.validationError = 'All fields are required';
          return;
        }
      }

      // Validate all components if there are multiple
      if (Array.isArray(this.currentQuestion.component)) {
        for (let i = 0; i < this.currentQuestion.component.length; i++) {
          const validationError = validateInput(this.inputValues[`component-${i}`], this.currentQuestion.component[i].validationRules);
          if (validationError) {
            this.validationError = validationError;
            return;
          }
        }
      } else {
        const validationError = validateInput(this.inputValues['component-0'], this.currentQuestion.component?.validationRules);
        if (validationError) {
          this.validationError = validationError;
          return;
        }
      }
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
          type: Array.isArray(this.currentQuestion.component) ? this.currentQuestion.component[0].type : this.currentQuestion.component.type,
        };
        this.answers = [nameAnswer];

        setTimeout(() => {
          const newAnswer = this.el.shadowRoot.querySelector('.previous-answer:last-child');
          if (newAnswer && this.observer) {
            this.observer.observe(newAnswer);
          }
        }, 0);

        this.firstName = '';
        this.lastName = '';

        try {
          const response = await getMockBedrockResponse1(this.sessionId, ' ', `Hi I am ${this.userName}`, 1);
          this.progress = response.progress;
          this.currentQuestion = {
            text: response.text,
            component: response.component,
          };
          this.isLoading = false;
          await this.initializeTyping(response.text);
        } catch (error) {
          console.error('Error getting response:', error);
          this.isLoading = false;
        }
        return;
      }

      // Format multiple component answers as comma-separated string
      const formattedAnswer = Array.isArray(this.currentQuestion.component)
        ? this.currentQuestion.component.map((_, index) => this.inputValues[`component-${index}`]).join(', ')
        : this.inputValues['component-0'];

      const answer = {
        question: this.currentQuestion.text,
        answer: formattedAnswer,
        type: Array.isArray(this.currentQuestion.component)
          ? this.currentQuestion.component.find(comp => comp.type === 'Password')?.type || this.currentQuestion.component[0].type
          : this.currentQuestion.component.type,
      };

      this.answers = [...this.answers, answer];

      setTimeout(() => {
        const newAnswer = this.el.shadowRoot.querySelector('.previous-answer:last-child');
        if (newAnswer && this.observer) {
          this.observer.observe(newAnswer);
        }
      }, 0);

      const response = await getMockBedrockResponse1(this.sessionId, this.userName, formattedAnswer, this.answers.length);
      this.progress = response.progress;
      this.currentQuestion = {
        text: response.text,
        component: response.component,
      };
      this.isLoading = false;
      await this.initializeTyping(response.text);

      // Clear all input values after submission
      this.inputValues = {};
    } catch (error) {
      console.error('Error processing answer:', error);
    } finally {
      this.isLoading = false;
    }
  }

  //new code for handle submit
  // private async handleSubmit(e: Event) {
  //   e.preventDefault();

  //   if (!this.userName && (!this.firstName.trim() || !this.lastName.trim())) {
  //     this.validationError = 'Please enter both first and last name';
  //     return;
  //   }

  //   // For non-name inputs, check if we have a value
  //   if (this.userName) {
  //     // For single component
  //     if (!Array.isArray(this.currentQuestion.component)) {
  //       if (!this.inputValues['component-0']?.trim()) {
  //         this.validationError = 'This field is required';
  //         return;
  //       }
  //     }
  //     // For multiple components
  //     else {
  //       const hasEmptyInputs = this.currentQuestion.component.some((_, index) => !this.inputValues[`component-${index}`]?.trim());
  //       if (hasEmptyInputs) {
  //         this.validationError = 'All fields are required';
  //         return;
  //       }
  //     }
  //   }

  //   const validationError = this.userName
  //     ? validateInput(
  //         this.inputValues['component-0'],
  //         Array.isArray(this.currentQuestion.component) ? this.currentQuestion.component[0].validationRules : this.currentQuestion.component?.validationRules,
  //       )
  //     : '';

  //   if (validationError) {
  //     this.validationError = validationError;
  //     return;
  //   }

  //   this.validationError = '';
  //   this.isLoading = true;
  //   this.showForm = false;

  //   try {
  //     if (!this.userName) {
  //       this.userName = `${this.firstName} ${this.lastName}`;
  //       const nameAnswer = {
  //         question: this.currentQuestion.text,
  //         answer: this.userName,
  //         type: Array.isArray(this.currentQuestion.component) ? this.currentQuestion.component[0].type : this.currentQuestion.component.type,
  //       };
  //       this.answers = [nameAnswer];

  //       setTimeout(() => {
  //         const newAnswer = this.el.shadowRoot.querySelector('.previous-answer:last-child');
  //         if (newAnswer && this.observer) {
  //           this.observer.observe(newAnswer);
  //         }
  //       }, 0);

  //       this.firstName = '';
  //       this.lastName = '';
  //       this.isLoading = false;

  //       await new Promise(resolve => setTimeout(resolve, 100));

  //       try {
  //         const response = await getMockBedrockResponse1(this.sessionId, ' ', `Hi I am ${this.userName}`, 1);
  //         this.progress = response.progress;
  //         this.currentQuestion = {
  //           text: response.text,
  //           component: response.component,
  //         };
  //         await this.initializeTyping(response.text);
  //         this.isLoading = false;
  //       } catch (error) {
  //         console.error('Error getting response:', error);
  //         this.isLoading = false;
  //       }
  //       return;
  //     }

  //     // Format multiple component answers as comma-separated string
  //     const formattedAnswer = Array.isArray(this.currentQuestion.component)
  //       ? this.currentQuestion.component.map((_, index) => this.inputValues[`component-${index}`]).join(', ')
  //       : this.inputValues['component-0'];

  //     const answer = {
  //       question: this.currentQuestion.text,
  //       answer: formattedAnswer,
  //       type: Array.isArray(this.currentQuestion.component)
  //         ? this.currentQuestion.component.find(comp => comp.type === 'Password')?.type || this.currentQuestion.component[0].type
  //         : this.currentQuestion.component.type,
  //     };

  //     //old code
  //     // Format multiple component answers as comma-separated string
  //     // const formattedAnswer = Array.isArray(this.currentQuestion.component)
  //     //   ? this.currentQuestion.component.map((_, index) => this.inputValues[`component-${index}`]).join(', ')
  //     //   : this.inputValues['component-0'];

  //     // const answer = {
  //     //   question: this.currentQuestion.text,
  //     //   answer: formattedAnswer,
  //     //   type: Array.isArray(this.currentQuestion.component) ? this.currentQuestion.component[0].type : this.currentQuestion.component.type,
  //     // };

  //     this.answers = [...this.answers, answer];

  //     setTimeout(() => {
  //       const newAnswer = this.el.shadowRoot.querySelector('.previous-answer:last-child');
  //       if (newAnswer && this.observer) {
  //         this.observer.observe(newAnswer);
  //       }
  //     }, 0);

  //     await new Promise(resolve => setTimeout(resolve, 1000));
  //     const response = await getMockBedrockResponse1(this.sessionId, this.userName, formattedAnswer, this.answers.length);
  //     this.progress = response.progress;
  //     this.currentQuestion = {
  //       text: response.text,
  //       component: response.component,
  //     };
  //     await this.initializeTyping(response.text);

  //     // Clear all input values after submission
  //     this.inputValues = {};
  //   } catch (error) {
  //     console.error('Error processing answer:', error);
  //   } finally {
  //     this.isLoading = false;
  //   }
  // }

  // old code for handle submit
  // private async handleSubmit(e: Event) {
  //   e.preventDefault();

  //   if (!this.userName && (!this.firstName.trim() || !this.lastName.trim())) {
  //     this.validationError = 'Please enter both first and last name';
  //     return;
  //   }

  //   if (this.userName && !this.primaryValue.trim()) return;
  //   // if (this.userName && !this.primaryValue.trim()) {
  //   //   const component = Array.isArray(this.currentQuestion.component)
  //   //     ? this.currentQuestion.component[0]
  //   //     : this.currentQuestion.component;

  //   //   if (component?.validationRules?.type === 'Required') {
  //   //     this.validationError = component.validationRules.message;
  //   //     return;
  //   //   }
  //   // }

  //   const validationError = this.userName ? validateInput(this.primaryValue, this.currentQuestion.component?.validationRules) : '';

  //   if (validationError) {
  //     this.validationError = validationError;
  //     return;
  //   }

  //   this.validationError = '';
  //   this.isLoading = true;
  //   this.showForm = false;

  //   try {
  //     if (!this.userName) {
  //       this.userName = `${this.firstName} ${this.lastName}`;
  //       const nameAnswer = {
  //         question: this.currentQuestion.text,
  //         answer: this.userName,
  //         type: this.currentQuestion.component.type,
  //       };
  //       this.answers = [nameAnswer];

  //       // Observe the new answer after a short delay to ensure it's in the DOM
  //       setTimeout(() => {
  //         const newAnswer = this.el.shadowRoot.querySelector('.previous-answer:last-child');
  //         if (newAnswer && this.observer) {
  //           this.observer.observe(newAnswer);
  //         }
  //       }, 0);

  //       this.firstName = '';
  //       this.lastName = '';
  //       this.isLoading = false;

  //       await new Promise(resolve => setTimeout(resolve, 100));

  //       /* First Call to Bedrock API - for getting initial response */
  //       try {
  //         const response = await getMockBedrockResponse1(this.sessionId, ' ', `Hi I am ${this.userName}`, 1);
  //         this.progress = response.progress;
  //         this.currentQuestion = {
  //           text: response.text,
  //           component: response.component,
  //         };
  //         await this.initializeTyping(response.text);
  //         this.isLoading = false;
  //       } catch (error) {
  //         console.error('Error getting response:', error);
  //         this.isLoading = false;
  //       }
  //       return;
  //     }

  //     const answer = {
  //       question: this.currentQuestion.text,
  //       answer: this.primaryValue,
  //       type: this.currentQuestion.component.type,
  //     };
  //     this.answers = [...this.answers, answer];

  //     // Observe the new answer after a short delay to ensure it's in the DOM
  //     setTimeout(() => {
  //       const newAnswer = this.el.shadowRoot.querySelector('.previous-answer:last-child');
  //       if (newAnswer && this.observer) {
  //         this.observer.observe(newAnswer);
  //       }
  //     }, 0);

  //     if (this.answers.length <= 6) {
  //       //entry into the first call to bedrock response
  //       // console.log('hit agian' + this.answers.length);
  //       await new Promise(resolve => setTimeout(resolve, 1000));
  //       const mockResponse = await getMockBedrockResponse1(this.sessionId, this.userName, this.primaryValue, this.answers.length);
  //       this.progress = mockResponse.progress;
  //       this.currentQuestion = {
  //         text: mockResponse.text,
  //         component: mockResponse.component,
  //       };
  //       await this.initializeTyping(mockResponse.text);
  //     } else {
  //       await new Promise(resolve => setTimeout(resolve, 1000));
  //       const finalText = `Thank you ${this.userName}! We'll process your information and get back to you shortly.`;
  //       this.currentQuestion = {
  //         text: finalText,
  //       };
  //       this.progress = 100;
  //       await this.initializeTyping(finalText);
  //     }

  //     this.primaryValue = '';
  //   } catch (error) {
  //     console.error('Error processing answer:', error);
  //   } finally {
  //     this.isLoading = false;
  //     // this.chatInterface.scrollTop = this.chatInterface.scrollHeight;
  //   }
  // }

  private getComponentPattern(): 'address' | 'security-questions' | 'default' {
    const components = this.currentQuestion.component;
    if (!Array.isArray(components)) return 'default';

    // Check for address pattern (4 TextBoxes)
    if (components.length === 4 && components.every(c => c.type === 'TextBox') && components.some(c => c.label.toLowerCase().includes('street'))) {
      return 'address';
    }

    // Check for security questions pattern (pairs of Select/Dropdown and TextBox)
    if (components.length % 2 === 0 && components.every((c, i) => (i % 2 === 0 ? c.type === 'Select' || c.type === 'DropDown' : c.type === 'TextBox'))) {
      return 'security-questions';
    }

    return 'default';
  }

  //for adjusting css
  private renderFormComponent() {
    if (!Array.isArray(this.currentQuestion.component) || this.currentQuestion.component.length === 0) return null;

    const pattern = this.getComponentPattern();
    const containerClass = `form-container ${pattern}`;

    return (
      <div class={containerClass}>
        {this.currentQuestion.component.map((component, index) => {
          const wrapperClass = pattern === 'security-questions' ? `input-wrapper question-pair-${Math.floor(index / 2)}` : 'input-wrapper';

          switch (component.type) {
            case 'TextBox':
              return (
                <div class={wrapperClass} key={`textbox-${index}`}>
                  <input
                    type="text"
                    placeholder={component.format || component.label}
                    value={this.inputValues[`component-${index}`] || ''}
                    onInput={e => this.handleInput(e, index)}
                    ref={el => (this.primaryInput = el)}
                    required
                  />
                </div>
              );

            case 'DropDown':
            case 'Select':
              return (
                <div class={wrapperClass} key={`select-${index}`}>
                  <select onInput={e => this.handleInput(e, index)} ref={el => (this.primaryInput = el)} required>
                    <option value="">Select {component.label}</option>
                    {component.options?.map(option => (
                      <option value={option} selected={this.inputValues[`component-${index}`] === option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              );

            case 'RadioButton':
            case 'Radio':
              return (
                <div class={`${wrapperClass} radio-group`} key={`radio-${index}`}>
                  {component.options?.map(option => (
                    <label class="radio-label" key={`${option}-${index}`}>
                      <input
                        type="radio"
                        name={`radio-option-${index}`}
                        value={option}
                        checked={this.inputValues[`component-${index}`] === option}
                        onInput={e => this.handleInput(e, index)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              );

            case 'DatePicker':
              const twentyYearsAgo = new Date();
              twentyYearsAgo.setFullYear(twentyYearsAgo.getFullYear() - 20);
              const max = twentyYearsAgo.toISOString().split('T')[0];
              return (
                <div class={wrapperClass} key={`date-picker-${index}`}>
                  <input
                    type="date"
                    max={max}
                    value={this.inputValues[`component-${index}`] || ''}
                    onInput={e => this.handleInput(e, index)}
                    ref={el => (this.primaryInput = el)}
                    required
                  />
                </div>
              );

            case 'Email':
              return (
                <div class={wrapperClass} key={`email-${index}`}>
                  <input
                    type="email"
                    placeholder={component.label || 'Enter email address'}
                    value={this.inputValues[`component-${index}`] || ''}
                    onInput={e => this.handleInput(e, index)}
                    ref={el => (this.primaryInput = el)}
                    required
                    pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                    title="Please enter a valid email address"
                  />
                </div>
              );

            case 'Password':
              return (
                <div class={wrapperClass} key={`password-${index}`}>
                  <input
                    type="password"
                    placeholder={component.label || 'Enter Password'}
                    value={this.inputValues[`component-${index}`] || ''}
                    onInput={e => this.handleInput(e, index)}
                    ref={el => (this.primaryInput = el)}
                    required
                    minLength={8}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, and a number."
                  />
                </div>
              );

            case 'SSN':
              const formatSSN = event => {
                let value = event.target.value.replace(/\D/g, '');
                if (value.length > 3 && value.length <= 5) {
                  value = value.replace(/^(\d{3})(\d{0,2})/, '$1-$2');
                } else if (value.length > 5) {
                  value = value.replace(/^(\d{3})(\d{2})(\d{0,4})/, '$1-$2-$3');
                }
                event.target.value = value;
                this.inputValues[`component-${index}`] = value;
                this.handleInput(event, index);
              };

              return (
                <div class={wrapperClass} key={`ssn-${index}`}>
                  <input
                    type="text"
                    placeholder={component.label || 'Enter SSN'}
                    value={this.inputValues[`component-${index}`] || ''}
                    onInput={formatSSN}
                    ref={el => (this.primaryInput = el)}
                    required
                    maxLength={11}
                    pattern="\d{3}-\d{2}-\d{4}"
                    title="SSN must be in the format ###-##-####"
                  />
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    );
  }

  // working new multiple form inputs
  // private renderFormComponent() {
  //   if (!Array.isArray(this.currentQuestion.component) || this.currentQuestion.component.length === 0) return null;

  //   const pattern = this.getComponentPattern();
  //   const containerClass = `form-container ${pattern}`;

  //   return this.currentQuestion.component.map((component, index) => {
  //     switch (component.type) {
  //       case 'TextBox':
  //         return (
  //           <div class="input-wrapper" key={`textbox-${index}`}>
  //             <input
  //               type="text"
  //               placeholder={component.format || component.label}
  //               value={this.inputValues[`component-${index}`] || ''}
  //               onInput={e => {
  //                 // console.log('Input event:', e); // Debug log
  //                 this.handleInput(e, index);
  //               }}
  //               ref={el => (this.primaryInput = el)}
  //               required
  //             />
  //           </div>
  //         );

  //       case 'DropDown':
  //       case 'Select':
  //         return (
  //           <div class="input-wrapper" key={`select-${index}`}>
  //             <select onInput={e => this.handleInput(e, index)} ref={el => (this.primaryInput = el)} required>
  //               <option value="">Select {component.label}</option>
  //               {component.options?.map(option => (
  //                 <option value={option} selected={this.inputValues[`component-${index}`] === option}>
  //                   {option}
  //                 </option>
  //               ))}
  //             </select>
  //           </div>
  //         );

  //       case 'RadioButton':
  //       case 'Radio':
  //         return (
  //           <div class="radio-group" key={`radio-${index}`}>
  //             {component.options?.map(option => (
  //               <label class="radio-label" key={`${option}-${index}`}>
  //                 <input
  //                   type="radio"
  //                   name={`radio-option-${index}`}
  //                   value={option}
  //                   checked={this.inputValues[`component-${index}`] === option}
  //                   onInput={e => this.handleInput(e, index)}
  //                 />
  //                 <span>{option}</span>
  //               </label>
  //             ))}
  //           </div>
  //         );

  //       case 'DatePicker':
  //         const twentyYearsAgo = new Date();
  //         twentyYearsAgo.setFullYear(twentyYearsAgo.getFullYear() - 20);
  //         const max = twentyYearsAgo.toISOString().split('T')[0];
  //         return (
  //           <div class="input-wrapper" key={`date-picker-${index}`}>
  //             <input
  //               type="date"
  //               max={max}
  //               value={this.inputValues[`component-${index}`] || ''}
  //               onInput={e => this.handleInput(e, index)}
  //               ref={el => (this.primaryInput = el)}
  //               required
  //             />
  //           </div>
  //         );

  //       case 'Email':
  //         return (
  //           <div class="input-wrapper" key={`email-${index}`}>
  //             <input
  //               type="email"
  //               placeholder={component.label || 'Enter email address'}
  //               value={this.inputValues[`component-${index}`] || ''}
  //               onInput={e => this.handleInput(e, index)}
  //               ref={el => (this.primaryInput = el)}
  //               required
  //               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  //               title="Please enter a valid email address"
  //             />
  //           </div>
  //         );

  //       case 'Password':
  //         return (
  //           <div class="input-wrapper" key={`password-${index}`}>
  //             <input
  //               type="password"
  //               placeholder={component.label || 'Enter Password'}
  //               value={this.inputValues[`component-${index}`] || ''}
  //               onInput={e => this.handleInput(e, index)}
  //               ref={el => (this.primaryInput = el)}
  //               required
  //               minLength={8}
  //               pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  //               title="Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, and a number."
  //             />
  //           </div>
  //         );

  //       case 'SSN':
  //         const formatSSN = event => {
  //           let value = event.target.value.replace(/\D/g, '');
  //           if (value.length > 3 && value.length <= 5) {
  //             value = value.replace(/^(\d{3})(\d{0,2})/, '$1-$2');
  //           } else if (value.length > 5) {
  //             value = value.replace(/^(\d{3})(\d{2})(\d{0,4})/, '$1-$2-$3');
  //           }
  //           event.target.value = value;
  //           this.inputValues[`component-${index}`] = value;
  //           this.handleInput(event, index);
  //         };

  //         return (
  //           <div class="input-wrapper" key={`ssn-${index}`}>
  //             <input
  //               type="text"
  //               placeholder={component.label || 'Enter SSN'}
  //               value={this.inputValues[`component-${index}`] || ''}
  //               onInput={formatSSN}
  //               ref={el => (this.primaryInput = el)}
  //               required
  //               maxLength={11}
  //               pattern="\d{3}-\d{2}-\d{4}"
  //               title="SSN must be in the format ###-##-####"
  //             />
  //           </div>
  //         );

  //       default:
  //         return null;
  //     }
  //   });
  // }

  /** OLD CODE TO RENDER ONLY ONE ELEMENT */
  // private renderFormComponent() {
  //   if (!this.currentQuestion.component) return null;

  //   switch (this.currentQuestion.component.type) {
  //     case 'TextBox':
  //       return (
  //         <div class="input-wrapper">
  //           <input
  //             type="text"
  //             placeholder={this.currentQuestion.component.format || this.currentQuestion.component.label}
  //             value={this.primaryValue}
  //             onInput={this.handleInput}
  //             ref={el => (this.primaryInput = el)}
  //             required
  //           />
  //         </div>
  //       );

  //     case 'Select':
  //       return (
  //         <div class="input-wrapper">
  //           <select onInput={this.handleInput} ref={el => (this.primaryInput = el)} required>
  //             <option value="">Select {this.currentQuestion.component.label}</option>
  //             {this.currentQuestion.component.options?.map(option => (
  //               <option value={option} selected={this.primaryValue === option}>
  //                 {option}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       );

  //     case 'Radio':
  //       return (
  //         <div class="radio-group">
  //           {this.currentQuestion.component.options?.map(option => (
  //             <label class="radio-label">
  //               <input type="radio" name="radio-option" value={option} checked={this.primaryValue === option} onInput={this.handleInput} />
  //               <span>{option}</span>
  //             </label>
  //           ))}
  //         </div>
  //       );

  //     case 'DatePicker':
  //       // const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  //       const twentyYearsAgo = new Date();
  //       twentyYearsAgo.setFullYear(twentyYearsAgo.getFullYear() - 20);
  //       const max = twentyYearsAgo.toISOString().split('T')[0];
  //       return (
  //         <div class="input-wrapper">
  //           <input type="date" max={max} value={this.primaryValue} onInput={this.handleInput} ref={el => (this.primaryInput = el)} required />
  //         </div>
  //       );

  //     case 'Email':
  //       return (
  //         <div class="input-wrapper">
  //           <input
  //             type="email"
  //             placeholder={this.currentQuestion.component.label || 'Enter email address'}
  //             value={this.primaryValue}
  //             onInput={this.handleInput}
  //             ref={el => (this.primaryInput = el)}
  //             required
  //             pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  //             title="Please enter a valid email address"
  //           />
  //         </div>
  //       );

  //     case 'Password':
  //       return (
  //         <div class="input-wrapper">
  //           <input
  //             type="password"
  //             placeholder={this.currentQuestion.component.label || 'Enter Password'}
  //             value={this.primaryValue}
  //             onInput={this.handleInput}
  //             ref={el => (this.primaryInput = el)}
  //             required
  //             minLength={8} // Example: Minimum length for password validation
  //             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" // Example: Regex for password strength
  //             title="Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, and a number."
  //           />
  //         </div>
  //       );
  //     case 'SSN':
  //       const formatSSN = event => {
  //         let value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
  //         if (value.length > 3 && value.length <= 5) {
  //           value = value.replace(/^(\d{3})(\d{0,2})/, '$1-$2'); // Format as ###-##
  //         } else if (value.length > 5) {
  //           value = value.replace(/^(\d{3})(\d{2})(\d{0,4})/, '$1-$2-$3'); // Format as ###-##-####
  //         }
  //         event.target.value = value; // Update the input value
  //         this.primaryValue = value; // Update the internal state
  //         this.handleInput(event); // Call the existing input handler
  //       };

  //       return (
  //         <div class="input-wrapper">
  //           <input
  //             type="text"
  //             placeholder={this.currentQuestion.component.label || 'Enter SSN'}
  //             value={this.primaryValue}
  //             onInput={formatSSN}
  //             ref={el => (this.primaryInput = el)}
  //             required
  //             maxLength={11} // SSN Format: ###-##-####
  //             pattern="\d{3}-\d{2}-\d{4}" // Regex to enforce SSN format
  //             title="SSN must be in the format ###-##-####"
  //           />
  //         </div>
  //       );
  //     default:
  //       return null;
  //   }
  // }

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

  private renderPreviousAnswers() {
    const reversedAnswers = [...this.answers].reverse();

    return reversedAnswers.map((answer, index) => {
      const originalIndex = this.answers.length - 1 - index;

      // Handle comma-separated answers
      const displayAnswer = answer.answer
        .toString()
        .split(', ')
        .map((part, partIndex) => {
          // Check if this part should be masked based on component type
          if (Array.isArray(this.currentQuestion.component)) {
            const componentType = this.currentQuestion.component[partIndex]?.type;
            if (componentType === 'Password') {
              return this.maskPassword(part);
            }
            if (componentType === 'SSN') {
              return this.maskSSN(part);
            }
          }
          return part;
        })
        .join(', ');

      return (
        <div class="previous-answer" key={originalIndex}>
          <div class="answer-header">{answer.question}</div>
          <div class="answer-content">
            <span>{displayAnswer}</span>
            <button class="edit-button" onClick={() => this.showEditConfirmation(originalIndex)} aria-label="Edit answer"></button>
          </div>
        </div>
      );
    });
  }

  // private renderPreviousAnswers() {
  //   const reversedAnswers = [...this.answers].reverse();

  //   return reversedAnswers.map((answer, index) => {
  //     const originalIndex = this.answers.length - 1 - index;

  //     const isPassword = answer.type === 'Password'; // Direct type check

  //     return (
  //       <div class="previous-answer" key={originalIndex}>
  //         <div class="answer-header">{answer.question}</div>
  //         <div class="answer-content">
  //           <span>
  //             {isPassword
  //               ? this.maskPassword(answer.answer.toString())
  //               : /\bssn\b/i.test(answer.type.toLowerCase())
  //               ? this.maskSSN(answer.answer.toString())
  //               : typeof answer.answer === 'string'
  //               ? answer.answer
  //               : JSON.stringify(answer.answer)}
  //           </span>
  //           <button class="edit-button" onClick={() => this.showEditConfirmation(originalIndex)} aria-label="Edit answer"></button>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  /*This will reverse the previous ans*/
  // private renderPreviousAnswers() {
  //   // Create a copy of answers array and reverse it
  //   const reversedAnswers = [...this.answers].reverse();

  //   return reversedAnswers.map((answer, index) => {
  //     // Calculate the original index for edit functionality
  //     const originalIndex = this.answers.length - 1 - index;

  //     return (
  //       <div class="previous-answer" key={originalIndex}>
  //         <div class="answer-header">{answer.question}</div>
  //         <div class="answer-content">
  //           <span>
  //             {/\bpassword\b/i.test(answer.type.toLowerCase())
  //               ? this.maskPassword(answer.answer.toString())
  //               : /\bssn\b/i.test(answer.type.toLowerCase())
  //               ? this.maskSSN(answer.answer.toString())
  //               : typeof answer.answer === 'string'
  //               ? answer.answer
  //               : JSON.stringify(answer.answer)}
  //           </span>
  //           <button class="edit-button" onClick={() => this.showEditConfirmation(originalIndex)} aria-label="Edit answer"></button>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

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
          <img src="/assets/image/Bot Avatar.png" alt="Agent avatar" />
          {/* <img src="https://raw.githubusercontent.com/dpmanek/images/refs/heads/main/Deep%20Manek%20image.png" alt="Agent avatar" /> */}
        </div>
        <div class="question-content">
          <div class="question-text" style={{ display: this.isLoading ? 'none' : 'block' }}></div>
          {this.isLoading && (
            <div class="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          {!this.isLoading && this.currentQuestion.component && this.showForm && (
            <form onSubmit={e => this.handleSubmit(e)} class="question-form visible">
              <div class="input-groupName">
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
                disabled={
                  this.isLoading ||
                  (!this.userName
                    ? !this.firstName.trim() || !this.lastName.trim()
                    : Array.isArray(this.currentQuestion.component)
                    ? this.currentQuestion.component.some((_, index) => !this.inputValues[`component-${index}`]?.trim())
                    : !this.inputValues['component-0']?.trim())
                }
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
  // private renderCurrentQuestion() {
  //   if (!this.currentQuestion) return null;

  //   return (
  //     <div class="current-question">
  //       <div class="avatar">
  //         {/* <img src="https://www.egain.com/chatbot/robin/Chatbot-1-big.jpg" alt="Agent avatar" /> */}
  //         <img src="https://raw.githubusercontent.com/dpmanek/images/refs/heads/main/Deep%20Manek%20image.png" alt="Agent avatar" />
  //       </div>
  //       <div class="question-content">
  //         <div class="question-text"></div>
  //         {this.currentQuestion.component && this.showForm && (
  //           <form onSubmit={e => this.handleSubmit(e)} class="question-form visible">
  //             <div class="input-groupName">
  //               {!this.userName
  //                 ? [
  //                     <div class="input-wrapper">
  //                       <input type="text" placeholder="First name" value={this.firstName} onInput={this.handleFirstNameInput} ref={el => (this.firstNameInput = el)} required />
  //                     </div>,
  //                     <div class="input-wrapper">
  //                       <input type="text" placeholder="Last name" value={this.lastName} onInput={this.handleLastNameInput} required />
  //                     </div>,
  //                   ]
  //                 : this.renderFormComponent()}
  //             </div>
  //             {this.validationError && <div class="validation-error">{this.validationError}</div>}
  //             <button
  //               type="submit"
  //               disabled={
  //                 this.isLoading ||
  //                 (!this.userName
  //                   ? !this.firstName.trim() || !this.lastName.trim()
  //                   : Array.isArray(this.currentQuestion.component)
  //                   ? this.currentQuestion.component.some((_, index) => !this.inputValues[`component-${index}`]?.trim())
  //                   : !this.inputValues['component-0']?.trim())
  //               }
  //             >
  //               {this.isLoading ? 'Loading...' : this.answers.length === 0 ? 'Get started' : 'Next'}
  //             </button>
  //           </form>
  //         )}
  //         {this.progress > 0 && (
  //           <div class="progress-bar">
  //             <div class="progress" style={{ width: `${this.progress}%` }}></div>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   );
  // }
  // private renderCurrentQuestion() {
  //   if (!this.currentQuestion) return null;

  //   return (
  //     <div class="current-question">
  //       <div class="avatar">
  //         {/* <img src="https://www.egain.com/chatbot/robin/Chatbot-1-big.jpg" alt="Agent avatar" /> */}
  //         <img src="https://raw.githubusercontent.com/dpmanek/images/refs/heads/main/Deep%20Manek%20image.png" alt="Agent avatar" />
  //       </div>
  //       <div class="question-content">
  //         <div class="question-text"></div>
  //         {this.currentQuestion.component && this.showForm && (
  //           <form onSubmit={e => this.handleSubmit(e)} class="question-form visible">
  //             <div class="input-group">
  //               {!this.userName
  //                 ? [
  //                     <div class="input-wrapper">
  //                       <input type="text" placeholder="First name" value={this.firstName} onInput={this.handleFirstNameInput} ref={el => (this.firstNameInput = el)} required />
  //                     </div>,
  //                     <div class="input-wrapper">
  //                       <input type="text" placeholder="Last name" value={this.lastName} onInput={this.handleLastNameInput} required />
  //                     </div>,
  //                   ]
  //                 : this.renderFormComponent()}
  //             </div>
  //             {this.validationError && <div class="validation-error">{this.validationError}</div>}
  //             <button
  //               type="submit"
  //               disabled={this.isLoading || (!this.userName && (!this.firstName.trim() || !this.lastName.trim())) || (this.userName && !this.primaryValue.trim())}
  //             >
  //               {this.isLoading ? 'Loading...' : this.answers.length === 0 ? 'Get started' : 'Next'}
  //             </button>
  //           </form>
  //         )}
  //         {this.progress > 0 && (
  //           <div class="progress-bar">
  //             <div class="progress" style={{ width: `${this.progress}%` }}></div>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   );
  // }

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
