import { render } from '@testing-library/react-native';
import { DetailsScreen } from './DetailsScreen';

const parm = {"navigation":{},"route":{"key":"Details-vPmBHWyakJS5a78itiyRz","name":"Details","params":{"item":{"gender":"female","name":{"title":"Miss","first":"Munira","last":"Ødegård"},"location":{"street":{"number":2351,"name":"Caspar Storms vei"},"city":"Kopervik","state":"Trøndelag","country":"Norway","postcode":"3540","coordinates":{"latitude":"52.0447","longitude":"10.5472"},"timezone":{"offset":"-2:00","description":"Mid-Atlantic"}},"email":"munira.odegard@example.com","login":{"uuid":"bf06316e-af3d-4fa3-8e74-f5e745cdc6bb","username":"crazyzebra389","password":"indon","salt":"7nZ0OnH7","md5":"183ae6acdbc829b237a900d601603915","sha1":"9a7a403486c4d961bf6ec1efb2e8a79b7bff6ff5","sha256":"65cc5a31dd804cecc8e1dabf231d33b85adfa5471599bf95e0fa414cb56c5893"},"dob":{"date":"1992-02-06T21:17:09.933Z","age":28},"registered":{"date":"2010-07-05T10:04:35.374Z","age":10},"phone":"37883763","cell":"92145553","id":{"name":"FN","value":"06029206013"},"picture":{"large":"https://randomuser.me/api/portraits/women/25.jpg","medium":"https://randomuser.me/api/portraits/med/women/25.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/25.jpg"},"nat":"NO"}}}}

test('DetailsScreen displays name correctly ', () => {
    const { getByTestId } = render(DetailsScreen(parm));
    const component = getByTestId('name');
    expect(component.props.children).toBe('Ødegård Munira');

});

test('DetailsScreen displays street name correctly ', () => {
    const { getByTestId } = render(DetailsScreen(parm));
    const component = getByTestId('streetName');
    expect(component.props.children).toBe("Caspar Storms vei 2351");

});