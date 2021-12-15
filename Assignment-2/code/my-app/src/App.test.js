import { render, screen } from '@testing-library/react';
import Enzyme from "enzyme";
import App from './App';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() })

test("renders correctly", () => {
 
const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}
  shallow(<App employee={employee} />);
});
