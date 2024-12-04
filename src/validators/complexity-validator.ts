import type {
  ValidationOptions,
  ValidationResult,
} from "../types/validation-options";

/**
 * Validates password complexity based on provided options
 * @param password - The password to validate
 * @param options - Validation configuration options
 * @returns Validation result with potential complexity-related errors
 */
export function validateComplexity(
  password: string,
  options: ValidationOptions
): ValidationResult {
  const errors: string[] = [];

  // Validate uppercase letters
  if (options.requireUpperCase && !/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter");
  }

  // Validate lowercase letters
  if (options.requireLowerCase && !/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter");
  }

  // Validate numbers
  if (options.requireNumbers && !/\d/.test(password)) {
    errors.push("Password must contain at least one number");
  }

  // Validate special characters
  const specialCharsRegex =
    options.specialCharsRegex || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  if (options.requireSpecialChars && !specialCharsRegex.test(password)) {
    errors.push("Password must contain at least one special character");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
