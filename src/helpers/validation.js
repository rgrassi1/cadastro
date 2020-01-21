function extractErrors(errors) {
  return errors.inner.reduce((prev, curr) => {
    if (prev[curr.path]) {
      prev[curr.path].push({ type: curr.type, message: curr.message });
    } else {
      prev[curr.path] = { type: curr.type, message: curr.message };
    }
    return prev;
  }, {});
}

module.exports = async (schema, data) => {
  try {
    await schema.validate(data, {
      abortEarly: false,
      stripUnknown: true,      
    });
    return { 
      error: false
    };
  } catch (err) {
    return {
      error: true,
      errors: extractErrors(err)
    };
  }
}