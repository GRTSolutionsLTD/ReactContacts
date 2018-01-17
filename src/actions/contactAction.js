
import fetch from 'isomorphic-fetch'
import * as axios from 'axios'

export const LOAD_CONTACT = 'LOAD_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const ADD_CONTACT = 'ADD_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const SEARCH_CONTACT = 'SEARCH_CONTACT';

export function OnAddContact(contact) {
    debugger;
    return { type: ADD_CONTACT, payload: contact };

export function OnSearch(searchKey) {
        debugger;
        return { type: SEARCH_CONTACT, payload: searchKey };
    }
}
export function deleteContact(contactId) {
    debugger;
    return { type:DELETE_CONTACT, contactId };
}
export function OnUpdateContact(contact) {
    debugger;
    return { type: UPDATE_CONTACT, payload: contact };
}
export const onLoad = () => (
    dispatch => {
        return axios.get('https://api.myjson.com/bins/fu727')
		.then(res => {

			dispatch({
				type:LOAD_CONTACT,
				data:res.data.data
			})})
		.catch(err => {
			debugger;
			console.log("error");
		}
	   )
})