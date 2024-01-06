const readline = require('readline');

const isValidLinkedInUrl = (url) => {
  const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  return regex.test(url);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const validateLinkedInUrl = () => {
  rl.question('Enter your LinkedIn profile URL: ', (url) => {
    if (isValidLinkedInUrl(url)) {
      console.log('Valid LinkedIn profile URL!');
      rl.close();
    } else {
      console.log('Invalid LinkedIn profile URL. Please try again.');
      validateLinkedInUrl();
    }
  });
};

validateLinkedInUrl();
