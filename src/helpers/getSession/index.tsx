/**
 *
 * @param userData
 */
const GetSession = () => {
  const currentUserData = localStorage.getItem('user');
  if (currentUserData) {
    return JSON.parse(currentUserData);
  }

  return false;
};

export default GetSession;
