/**
 * Options for customizing password validation rules
 */
export interface ValidationOptions {
  /**
   * Minimum password length
   * @default 8
   */
  minLength?: number;

  /**
   * Maximum password length
   * @default 64
   */
  maxLength?: number;

  /**
   * Require at least one uppercase letter
   * @default true
   */
  requireUpperCase?: boolean;

  /**
   * Require at least one lowercase letter
   * @default true
   */
  requireLowerCase?: boolean;

  /**
   * Require at least one number
   * @default true
   */
  requireNumbers?: boolean;

  /**
   * Require at least one special character
   * @default true
   */
  requireSpecialChars?: boolean;

  /**
   * Reject commonly used passwords
   * @default true
   */
  rejectCommonPasswords?: boolean;

  /**
   * Custom regex for special characters
   */
  specialCharsRegex?: RegExp;
}

/**
 * Result of password validation
 */
export interface ValidationResult {
  /**
   * Indicates if the password is valid
   */
  isValid: boolean;

  /**
   * List of validation error messages
   */
  errors: string[];
}
