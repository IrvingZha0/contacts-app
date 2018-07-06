import React from 'react';
import { connect } from 'react-redux';
import Contact from './ContactRow';
import { onSort } from '../action_creators';

const ContactList = ({ contacts, dispatch }) => {
  if(contacts.length === 0) return '';
  console.log('contacts', contacts)
    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => dispatch(onSort('UserID'))}>ID</th>
                    <th onClick={() => dispatch(onSort('Title'))}>Title</th>
                    <th onClick={() => dispatch(onSort('Name'))}>Name</th>
                    <th onClick={() => dispatch(onSort('BirthDate'))}>Age</th>
                    <th onClick={() => dispatch(onSort('IsFavorite'))}>Favorite Flag</th>
                    <th onClick={() => dispatch(onSort('ContactCount'))}>ContactDetail count</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {contacts.contacts.map((contact, i) => <Contact {...contact} id={i} key={i} />)}
            </tbody>
        </table>
    );
};

const mapStateToProps = (state) => {
    return {
        contacts: state.get('contacts').toJS(),
    };
};

export default connect(
    mapStateToProps
)(ContactList);