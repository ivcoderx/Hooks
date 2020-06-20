import React, { useReducer } from 'react'
import axios from 'axios'
import { GithubContext, GithubReducer } from '.'
import { GET_USER, SEARCH_USERS, GET_REPOS, CLEAR_USERS, SET_LOADING } from '../type'

const CLIENT_ID =  process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET =  process.env.REACT_APP_CLIENT_SECRET

const withCreds = url => `${ url }client_id=${ CLIENT_ID }&client_secret=${ CLIENT_SECRET }`

export const GithubState = ({ children }) => {
	const initialState = {
		user: {},
		users: [],
		repos: [],
		loading: false
	}

	const [state, dispatch] = useReducer(GithubReducer, initialState)

	const search = async value => {
		setLoading()
		
		const res = await axios.get(
			withCreds(`https://api.github.com/search/users?q=${ value }&`)
		)

		dispatch({
			type: SEARCH_USERS,
			payload: res.data.items
		})
	}

	const getUser = async name => {
		setLoading()

		const res = await axios.get(
			withCreds(`https://api.github.com/users/${ name }?`)
		)

		dispatch({
			type: GET_USER,
			payload: res.data
		})
	}

	const getRepos = async name => {
		setLoading()

		const res = await axios.get(
			withCreds(`https://api.github.com/users/${ name }/repos?per_page=5&`)
		)

		dispatch({
			type: GET_REPOS,
			payload: res.data
		})
	}
	
	const clearUsers = () => {
		dispatch({
			type: CLEAR_USERS
		})
	}

	const setLoading = () => {
		dispatch({
			type: SET_LOADING
		})
	}

	const { user, users, repos, loading } = state

	return (
		<GithubContext.Provider
			value={{
				setLoading, clearUsers, search, getRepos, getUser,
				user, users, repos, loading
			}}
		>
			{ children }
		</GithubContext.Provider>
	)
}