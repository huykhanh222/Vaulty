// Crypto utilities
// This file will contain all the cryptographic functions

// Will be implemented later
export const encrypt = (data: string, key: string) => {
  return `encrypted:${data}`;
};

export const decrypt = (data: string, key: string) => {
  return data.replace('encrypted:', '');
};
