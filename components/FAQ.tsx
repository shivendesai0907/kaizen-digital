"use client";

import { useState } from 'react';
import styles from './FAQ.module.css';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(1); // Second item open by default per design

  const faqs = [
    {
      question: "Do I need to link my bank account?",
      answer: "No, you can input your details manually or use our secure integration when you're ready."
    },
    {
      question: "How does automatic budgeting work?",
      answer: "Our AI analyzes your income and spending history to generate a personalized budget automatically."
    },
    {
      question: "Is my financial data secure and private?",
      answer: "Yes, we use bank-level encryption and never share your personal data with third parties."
    },
    {
      question: "Can I use Koraxis for multiple accounts?",
      answer: "Absolutely. You can link and manage as many accounts as you need from a single dashboard."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time without any hidden fees or penalties."
    }
  ];

  return (
    <section className={styles.section}>
      <ScrollReveal blur={10} yOffset={30}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            FAQs
          </div>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.description}>
            One senior team across product, design, engineering, and DevOps — accountable for<br />
            outcomes from kickoff through launch and beyond.
          </p>
        </div>
      </ScrollReveal>

      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <ScrollReveal key={index} delay={index * 0.05} scale={0.98} yOffset={20}>
            <div
              className={`${styles.faqItem} ${openIndex === index ? styles.faqItemOpen : ''}`}
            >
              <div
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <h3 className={styles.questionText}>{faq.question}</h3>
                <div className={`${styles.iconWrapper} ${openIndex === index ? styles.iconOpen : ''}`}>
                  <ChevronDown size={14} />
                </div>
              </div>
              {openIndex === index && (
                <div className={styles.answer}>
                  {faq.answer}
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
