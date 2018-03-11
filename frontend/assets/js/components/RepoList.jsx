import { Component } from 'react';

const RepoListHeader = () =>
          <thead>
          <tr>
          <th width="4%"></th>
          <th width="42%">Name</th>
          <th width="14%">Size</th>
          <th width="20%">Last Update</th>
          <th width="20%"></th>
          </tr>
          </thead>;

const RepoListItem = ({ name, size_formatted, mtime_relative, onRemove=f=>f }) => {
    return <tr>
        <td></td>
        <td>{name}</td>
        <td>{size_formatted}</td>
        <td dangerouslySetInnerHTML={{__html: mtime_relative}}></td>
        <td><a href="javascript:void(0)" onClick={onRemove} >Delete</a></td>
        </tr>;
};

const RepoListBody = ({ repos, onRemove=f=>f }) =>
    <tbody>
    {repos.map((repo, i) =>
               <RepoListItem key={i} {...repo} onRemove={() => onRemove(repo.id)} />)}
    </tbody>;

const RepoListTable = ({ repos, onRemove=f=>f }) =>
          <table>
          <RepoListHeader/>
          <RepoListBody repos={repos} onRemove={onRemove} />
          </table>;

const RepoList = ({ repos=[], onRemove=f=>f }) =>
          <div>
          {(repos.length !== 0) ?
          <RepoListTable repos={repos} onRemove={onRemove} /> :
          <span>You don't have any libraries.</span>
          }
          </div>;

export default RepoList;
