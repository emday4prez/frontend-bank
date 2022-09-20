import React from 'react'
import {render, screen, userEvent} from '@testing-library/react'
import CreateAccount from './pages/CreateAccount'


test('user events allows user to add name', () => {
 render(<CreateAccount/>)
 const inputName = screen.getByLabelText('Name')
 const inputEmail = screen.getByLabelText('Email address')
 const inputPassword = screen.getByLabelText('Password')

 userEvent.type(inputName, 'Peter')
 userEvent.type(inputEmail, 'Peter@spiderman.com')
 userEvent.type(inputPassword, 'greengoblin13')

 const button = screen.getByText('Create Account')
 userEvent.click(button)
 screen.getByText('Add Another Account')
})