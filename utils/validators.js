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
