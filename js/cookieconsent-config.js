  window.CookieConsent.init({
    // More link URL on bar.
    modalMainTextMoreLink: null,
    // How long to wait until bar comes up.
    barTimeout: 1000,
    // Look and feel.
    theme: {
      barColor: '#fffff8',
      barTextColor: '#111',
      barMainButtonColor: '#111',
      barMainButtonTextColor: '#eee',
      modalMainButtonColor: '#111',
      modalMainButtonTextColor: '#ddd',
    },
    language: {
      // Current language.
      current: 'en',
      locale: {
        en: {
          barMainText: 'This website uses cookies to ensure you get the best experience on our website.',
          closeAriaLabel: 'close',
          barLinkSetting: 'Cookie Settings',
          barBtnAcceptAll: 'Accept all cookies',
          modalMainTitle: 'Cookie settings',
          modalMainText: 'Cookies are small pieces of data sent from a website and stored on the user\'s computer by the user\'s web browser while the user is browsing. Your browser stores each message in a small file, called cookie. When you request another page from the server, your browser sends the cookie back to the server. Cookies were designed to be a reliable mechanism for websites to remember information or to record the user\'s browsing activity.',
          modalBtnSave: 'Save current settings',
          modalBtnAcceptAll: 'Accept all cookies and close',
          modalAffectedSolutions: 'Affected solutions:',
          learnMore: 'Learn More',
          on: 'On',
          off: 'Off',
          enabled: 'is enabled.',
          disabled: 'is disabled.',
          checked: 'checked',
          unchecked: 'unchecked',
        }
      }
    },
    // List all the categories you want to display.
    categories: {
      // Unique name.
      // This probably will be the default category.
      necessary: {
        // The cookies here are necessary and category can't be turned off.
        // Wanted config value will be ignored.
        needed: true,
        // The cookies in this category will be let trough.
        // This probably should be false if category not necessary.
        wanted: true,
        // If checkbox is on or off at first run.
        checked: true,
        // Language settings for categories.
        language: {
          locale: {
            en: {
              name: 'Strictly Necessary Cookies',
              description: 'We use only Google Analytics for anonymized traffic analysis.',
            }
          }
        }
      }
    },
    // List actual services here.
    services: {
      // Unique name.
      analytics: {
        // Existing category Unique name.
        // This example shows how to block Google Analytics.
        category: 'necessary',
        // Type of blocking to apply here.
        // This depends on the type of script we are trying to block.
        // Can be: dynamic-script, script-tag, wrapped, localcookie.
        type: 'dynamic-script',
        // Only needed if "type: dynamic-script".
        // The filter will look for this keyword in inserted scipt tags
        //  and block if match found.
        search: 'analytics',
        // List of known cookie names or regular expressions matching
        //  cookie names placed by this service.
        // These will be removed from current domain and .domain.
        cookies: [
          {
            // Known cookie name.
            name: '_gid',
            // Expected cookie domain.
            domain: `.${window.location.hostname}`
          },
          {
            // Regex matching cookie name.
            name: /^_ga/,
            domain: `.${window.location.hostname}`
          }
        ],
        language: {
          locale: {
            en: {
              name: 'Google Analytics'
            }
          }
        }
      }
    }
  });