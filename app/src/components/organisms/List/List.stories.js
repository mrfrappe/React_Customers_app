import React from 'react';
import List from './List';
import { customers } from '../../../data/customers';
import { invoices } from '../../../data/invoices';
import { reminders } from '../../../data/reminders';

export default { title: 'Organisms/List' };

const headersCustomers = [' ', 'First Name', 'Last name', 'Company', 'Country', 'Action'];
export const Customers = () => <List items={customers} headers={headersCustomers}></List>;

const headersInvoices = ['Number', 'Title', 'Start at', 'Finish at', 'Payed', 'Customer', 'Action'];

export const Invoices = () => <List items={invoices} headers={headersInvoices}></List>;

const headersReminders = ['Title', 'Start at', 'Finish at', 'Description', 'Action'];

export const Reminders = () => <List items={reminders} headers={headersReminders}></List>;
