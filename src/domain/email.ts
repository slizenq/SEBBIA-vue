export function checkEmailFormat(email: string): Promise<boolean> {
    return new Promise((resolve) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setTimeout(() => {
        resolve(emailRegex.test(email));
      }, 1000); 
    });
  }