import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <title>
            Bloom – Smart AI Budgeting App for Effortless Finance Management
          </title>
          <meta
            name="description"
            content="Discover Bloom, the AI-powered budgeting app designed to simplify your finances. Effortlessly track expenses, set budgets, and gain personalized insights. Sign up today for smarter financial management!"
          />
          <meta
            name="keywords"
            content="budgeting app, AI finance management, expense tracking, personal budget, financial planning, savings goals, Bloom app, AI budgeting, money management, financial insights"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
