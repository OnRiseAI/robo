import type { FaqCategory } from '@/components/blocks/faq-section/faq-section'

export const faqData: FaqCategory[] = [
  {
    id: 'general-questions',
    title: 'General Questions',
    questions: [
      {
        question: 'What is Robo?',
        answer:
          'Robo is an intelligent home helper robot designed to assist with everyday household tasks and simplify daily routines. It aims to make your life easier by taking care of chores efficiently.'
      },
      {
        question: 'What kind of tasks can Robo help with?',
        answer:
          'Robo can help with a variety of household tasks including cleaning, organizing, monitoring home security, managing smart home devices, and providing helpful reminders for daily activities.'
      },
      {
        question: 'Is Robo safe to use at home?',
        answer:
          'Yes, Robo is designed with multiple safety features including obstacle detection, emergency stop functions, and secure data encryption to ensure safe operation in your home environment.'
      },
      {
        question: 'Does Robo work on its own or need supervision?',
        answer:
          'Robo is designed to work autonomously for most tasks. However, initial setup and periodic supervision are recommended to ensure optimal performance and safety.'
      },
      {
        question: 'Can multiple users interact with Robo?',
        answer:
          'Yes, Robo supports multiple user profiles and can recognize different family members, allowing personalized interactions and task preferences for each user.'
      }
    ]
  },
  {
    id: 'usage-setup',
    title: 'Usage & Setup',
    questions: [
      {
        question: 'How do I set up Robo at home?',
        answer:
          'Setting up Robo is simple. Unbox the robot, charge it fully, download the companion app, and follow the step-by-step setup wizard to connect it to your home Wi-Fi and configure initial preferences.'
      },
      {
        question: 'Can Robo work with my existing smart home devices?',
        answer:
          'Yes, Robo is compatible with most popular smart home ecosystems including Google Home, Amazon Alexa, and Apple HomeKit, allowing seamless integration with your existing devices.'
      },
      {
        question: 'Does Robo drain my daily routines?',
        answer:
          'No, Robo is designed to enhance your daily routines by automating repetitive tasks, giving you more time to focus on what matters most to you.'
      }
    ]
  },
  {
    id: 'payment-availability',
    title: 'Payment & Availability',
    questions: [
      {
        question: 'How can I purchase Matter Robo?',
        answer:
          'You can purchase Matter Robo directly from our website, authorized retailers, or through select e-commerce platforms. Visit our store locator to find the nearest authorized dealer.'
      },
      {
        question: 'Are there subscription or service fees?',
        answer:
          'Basic functionality is included with your purchase. Premium features and cloud storage are available through optional subscription plans starting at $9.99/month.'
      },
      {
        question: 'Is financing or installment payment available?',
        answer:
          'Yes, we offer flexible financing options through our partners. You can choose from 6, 12, or 24-month installment plans with competitive interest rates.'
      },
      {
        question: 'Does Matter offer warranty coverage?',
        answer:
          'Every Matter Robo comes with a 2-year limited warranty covering manufacturing defects and hardware malfunctions. Extended warranty plans are also available for purchase.'
      }
    ]
  },
  {
    id: 'support-maintenance',
    title: 'Support & Maintenance',
    questions: [
      {
        question: 'What kind of maintenance does Robo require?',
        answer:
          'Robo requires minimal maintenance. Regular tasks include emptying the dustbin, cleaning sensors, and ensuring charging dock is accessible. Software updates are automatic.'
      },
      {
        question: 'How do I get support if something goes wrong?',
        answer:
          'Our support team is available 24/7 through live chat, email, and phone. You can also access troubleshooting guides and video tutorials in the app or on our website.'
      },
      {
        question: 'Does Robo receive software updates?',
        answer:
          'Yes, Robo receives regular over-the-air software updates that add new features, improve performance, and enhance security. Updates are installed automatically when connected to Wi-Fi.'
      },
      {
        question: 'What if Robo needs repair?',
        answer:
          'If your Robo needs repair, contact our support team to arrange service. Depending on the issue and warranty status, we offer mail-in repairs, local service centers, or replacement options.'
      }
    ]
  }
]
