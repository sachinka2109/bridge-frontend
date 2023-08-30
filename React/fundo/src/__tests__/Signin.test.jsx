import { render, screen,fireEvent } from '@testing-library/react';
import Signin from '../pages/Sign/Signin';
import { BrowserRouter } from 'react-router-dom';

describe('Signin',() => {
    test('Signin should render', async()=> {
        render(<BrowserRouter><Signin /></BrowserRouter>);
    })

    test('All buttons should render', async()=> {
        render(<BrowserRouter><Signin /></BrowserRouter>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(3);   
    })

    test('Signin Form contains 2 textField',()=> {
        render(<BrowserRouter><Signin /></BrowserRouter>);
        const TextField = screen.getAllByTestId("textfield");
        expect(TextField).toHaveLength(2);   
    })
    
    test('It should validate email input',()=> {
        render(<BrowserRouter><Signin /></BrowserRouter>);
        const emailTextField = screen.getByLabelText('Enter Email');
        const loginbtn = screen.getByTestId('loginbtn');
        expect(emailTextField).toBeInTheDocument();

        fireEvent.change(emailTextField, { target: { value: 'invalid-email' } });
        fireEvent.click(loginbtn);
        // Check if error message is displayed
        const emailError = screen.getByText("Please Enter valid Email");
        expect(emailError).toBeInTheDocument();
    })

    test('Should validate password input', async () => {
        render(<BrowserRouter><Signin /></BrowserRouter>);
        const emailTextField = screen.getByLabelText('Enter Email');
        const passwordTextField = screen.getByLabelText('Enter your Password');
        const loginbtn = screen.getByTestId('loginbtn');
        expect(passwordTextField).toBeInTheDocument();
    
        fireEvent.change(emailTextField, { target: { value: 'example@gmail.com' } });
        fireEvent.change(passwordTextField, { target: { value: 'pasdasd' } });
        fireEvent.click(loginbtn);
    
        const passwordError = screen.getByText("Incorrect Password");
        expect(passwordError).toBeInTheDocument();
    });


})