import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ user }) => {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src={ user.avatar_url }
				alt={ user.login }
			/>
			<div className="card-body">
				<h5 className="card-title">
					{ user.login }
				</h5>
				<Link
					className="btn btn-primary"
					to={ `/profile/${ user.login }` }
				>
					Открыть
				</Link>
			</div>
		</div>
	)
}

export default Card