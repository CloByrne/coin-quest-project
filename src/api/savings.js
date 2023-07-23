const retrieveSavingsData = async (userId) => {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch(`/api/savings?user_id=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const result = await response.json();
      return result; // Return the retrieved savings data
    } else {
      throw new Error('Error retrieving savings data');
    }
  } catch (error) {
    throw new Error('An error occurred', error);
  }
};

export default retrieveSavingsData;
