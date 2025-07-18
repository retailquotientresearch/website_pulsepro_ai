import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';

// Define the message structure type
type Messages = Record<string, Record<string, unknown>>;

export default getRequestConfig(async ({requestLocale}) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
 
  // Load messages for the current locale
  const messages: Messages = (await import(`../messages/${locale}.json`)).default;
  
  // Load default English messages for fallback
  const defaultMessages: Messages = locale !== 'en' 
    ? (await import(`../messages/en.json`)).default
    : {} as Messages;
 
  return {
    locale,
    messages: {
      ...defaultMessages,
      ...messages
    },
    getMessageFallback: ({namespace, key}) => {
      // If the key is not found in the current locale, try English
      if (locale !== 'en' && namespace && key && defaultMessages[namespace]?.[key]) {
        return String(defaultMessages[namespace][key]);
      }
      // Return the key as fallback if not found in English either
      return key;
    }
  };
});