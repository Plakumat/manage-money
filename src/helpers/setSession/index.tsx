/**
 *
 * @param userData
 */
const SetSession = (userData: IUserData) => {
  localStorage.setItem('user', JSON.stringify(userData));
};

export default SetSession;

interface IUserData {
  userType: string;
  userName: string;
  password: string;
  loggedIn: boolean;
}
