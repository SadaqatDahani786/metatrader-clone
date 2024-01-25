/**
 ** ======================================================
 ** Validator [isEmpty]
 ** ======================================================
 */
export const isEmpty = (val) => {
  //1) if empty, return true to indicate error
  if (!val || val.toString().trim() === "" || val.toString().trim() === " ")
    return true;

  //2) No error, val not empty
  return false;
};

/**
 ** ======================================================
 ** Validator [isEmail]
 ** ======================================================
 */
export const isEmail = (val) => {
  //1) Regex pattern to test valid email
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //2) Test value against regex pattern, if matched, return
  if (regex.test(val)) return false;

  //3) Matched failed, return true to indicate error
  return true;
};

/**
 ** ======================================================
 ** Validator [isAlpha]
 ** ======================================================
 */
export const isAlpha = (
  val,
  options = {
    ignoreSpaces: true,
    ignoreCase: true,
    ignoreHyphens: false,
    ignoreDashes: false,
    ignorePunctuations: false,
  }
) => {
  //1) Regex pattern to test for alpha values
  const pattern = `^[a-z${options.ignoreSpaces ? "\\s" : ""}${
    options.ignoreHyphens ? "\\-" : ""
  }${options.ignoreDashes ? "\\_" : ""}${
    options.ignorePunctuations ? "\\-\\_\\.\\,\\\"\\'\\:\\;\\(\\)\\&\\!" : ""
  }]+$`;

  //2) Test value against regex pattern, if matched, return
  const regex = RegExp(pattern, options.ignoreCase ? "i" : "");
  if (regex.test(val)) return false;

  //3) Matched failed, return true to indicate error
  return true;
};

/**
 ** ======================================================
 ** Validator [isAlphaNumeric]
 ** ======================================================
 */
export const isAlphaNumeric = (
  val,
  options = {
    ignoreSpaces: true,
    ignoreCase: true,
    ignoreHyphens: false,
    ignoreDashes: false,
    ignorePunctuations: false,
  }
) => {
  if (!val) return false;

  //1) Regex pattern to test for alpha numeric values
  const pattern = `^[a-z0-9${options.ignoreSpaces ? "\\s" : ""}${
    options.ignoreHyphens ? "\\-" : ""
  }${options.ignoreDashes ? "\\_" : ""}${
    options.ignorePunctuations ? "\\-\\_\\.\\,\\\"\\'\\:\\;\\(\\)\\&\\!" : ""
  }]+$`;

  //2) Test value against regex pattern, if matched, return
  const regex = RegExp(pattern, options.ignoreCase ? "i" : "");
  if (regex.test(val)) return false;

  //3) Matched failed, return true to indicate error
  return true;
};

/**
 ** ======================================================
 ** Validator [isPassMissmatched]
 ** ======================================================
 */
export const isPassMissmatched = (pass, passConfirm) => {
  return pass !== passConfirm;
};

/**
 ** ======================================================
 ** Validator [isOverEighteen]
 ** ======================================================
 */
export const isOverEighteen = (date) => {
  //1) Extract day, month and year from date object
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  //2) Today's date in pure numbers only
  const now = parseInt(new Date().toISOString().slice(0, 10).replace(/-/g, ""));

  //3) Coerces strings to integers
  const dob = year * 10000 + month * 100 + day * 1;

  //4) Return the assertion
  return now - dob >= 180000;
};

/**
 ** ======================================================
 ** Validator [isZipCode]
 ** ======================================================
 */
export const isZipCode = (val) => {
  //1) Regex pattern to test for valid zip code
  const pattern = `^([0-9]{5}|[0-9]{5}-[0-9]{4})$`;

  //2) Test value against regex pattern, if matched, return
  const regex = RegExp(pattern);
  if (regex.test(val)) return false;

  //3) Matched failed, return true to indicate error
  return true;
};
