import axios from 'axios'
import {CONNECTION_STRING} from '../config/connection'

const state={
	detail: null,
	lastInsertId: null
}
const getters={
	detail: state => state.detail,
	lastInsertId: state => state.lastInsertId,
}
const mutations={
	setDetail(state, payload){
		state.detail = payload
	},
	setLastInsertId(state, payload){
		state.lastInsertId = payload
	},
	clearLastInsertId(state){
		state.lastInsertId = null
	}
}
const actions={
	songDetail(vuexContext, payload){
		axios.get(CONNECTION_STRING+'/'+payload)
		.then(response => {
			vuexContext.commit('setDetail', response.data.data)
		})
	},
	add(vuexContext, payload){
		axios.post(CONNECTION_STRING+'/song-add', {'songName': payload.songName, 'author': payload.author, 'iframe': payload.iframe})
		.then(response => {
			vuexContext.commit('setLastInsertId', response.data.id)
		})
	},
}

export default{
	state, getters, mutations, actions
}