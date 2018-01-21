import fetch from 'isomorphic-fetch'
import * as axios from 'axios'

export const LOAD_CONTACT = 'LOAD_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const ADD_CONTACT = 'ADD_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const SEARCH_CONTACT = 'SEARCH_CONTACT';
export const REFRESH_CONTACT = 'REFRESH_CONTACT';
export const SEARCH_FIRST_NAME = 'SEARCH_FIRST_NAME';
export const SEARCH_LAST_NAME = 'SEARCH_LAST_NAME';
export const SEARCH_EMAIL = 'SEARCH_EMAIL';
export const SEARCH_PHONE = 'SEARCH_PHONE';

export function OnAddContact(contact) {
    return { type: ADD_CONTACT, payload: contact };
}

export function deleteContact(contactId) {
    return { type: DELETE_CONTACT, contactId };
}

export function OnUpdateContact(contact) {
    return { type: UPDATE_CONTACT, payload: contact };
}
export function OnSearchContact(Value) {
    return { type: SEARCH_CONTACT, payload: Value };
}

export function OnSearchContactFirstName(Value) {
    return { type: SEARCH_FIRST_NAME, payload: Value };
}

export function OnSearchContactLastName(Value) {
    return { type: SEARCH_LAST_NAME, payload: Value};
}

export function OnSearchContactPhone(Value) {
    return { type: SEARCH_PHONE, payload: Value };
}

export function OnSearchContactEmail(Value) {
    return { type: SEARCH_EMAIL, payload: Value };
}

export function OnRefreshContact() {
    return { type: REFRESH_CONTACT };
}
export const onLoad = () => (
    dispatch => {
        return axios.get('contacts.json')
            .then(res => {
                dispatch({
                    type: LOAD_CONTACT,
                    data: res.data.data
                })
            })
            .catch(err => {
                console.log("error");
            }
            )
    })
