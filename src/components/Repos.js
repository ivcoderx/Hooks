import React, { Fragment } from 'react'

const Repos = ({ repos }) => (
  <Fragment>
    <h4 className="mb-3">Список репозиториев</h4>
    <ul className="list-group">
      { repos.map(repo => (
        <li className="list-group-item" key={repo.id}>
          <a
            href={repo.html_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            { repo.name }
          </a>
        </li>
      )) }
    </ul>
  </Fragment>
)

export default Repos