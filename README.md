# 🔒 Secure Password Checker

A robust, configurable password validation library to ensure user credential security.

## 📦 Installation

```bash
npm install secure-password-checker
```

## 🚀 Quick Start

```typescript
import {
  validatePassword,
  CommonPasswordsValidator,
} from "secure-password-checker";

const password = "MyStrongPassword123!";
const validationResult = validatePassword(password);

if (validationResult.isValid) {
  console.log("Password is secure.");
} else {
  console.log("Password is not secure:", validationResult.errors);
}
```

## 🛡️ Features

- Configurable password validation
- Length checks
- Complexity requirements
- Common password rejection
- Extensible blocked password list

## 🔧 Customization

### Validation Options

```typescript
const options = {
  minLength: 10,
  maxLength: 20,
  requireUpperCase: true,
  requireLowerCase: true,
  requireNumbers: true,
  requireSpecialChars: true,
  rejectCommonPasswords: true,
};

const result = validatePassword(password, options);
```

### Custom Common Passwords

```typescript
// Add specific passwords to blocked list
CommonPasswordsValidator.addCommonPasswords("company2024", "admin123");

// Add multiple passwords from an array
const blockedPasswords = ["company2024", "test1234"];
CommonPasswordsValidator.addCommonPasswordsFromArray(blockedPasswords);

// Get current blocked passwords
console.log(CommonPasswordsValidator.getCommonPasswords());

// Remove passwords from blocked list
CommonPasswordsValidator.removeCommonPasswords("admin123");
```

## 📋 Validation Criteria

- Minimum/maximum length
- Uppercase letter requirement
- Lowercase letter requirement
- Number requirement
- Special character requirement
- Common password detection

## 📄 License

MIT License
