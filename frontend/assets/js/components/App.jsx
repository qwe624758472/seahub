import { Component } from 'react';
import RepoList from './RepoList';
import AddRepoForm from './AddRepoForm';
import { getRepoList, removeRepo } from '../SeafileAPI';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            loading: false,
            error: null
        };
        this.addRepo = this.addRepo.bind(this);
        this.removeRepo = this.removeRepo.bind(this);
    }

    componentWillMount() {
        console.log('will mount');
        this.setState({loading: true});
        getRepoList().then(
            repos => {
                console.log('success get repos');
                this.setState({repos, loading: false});
            },
            error => {
                console.log('error get repos');
                this.setState({error, loading: false});
            }
        );
    }

    componentDidMount() {
        console.log('did mount');
    }

    componentWillUpdate() {
        console.log('will update');
    }
    
    addRepo(name) {
        let size_formatted = '0 bytes';
        let mtime_relative = 'just now';
        const repos = [
            {
                name,
                size_formatted,
                mtime_relative
            },
            ...this.state.repos
        ];
        this.setState({repos});
    }

    removeRepo(repo_id) {
        console.log(`remove repo: ${repo_id}`);
        const repos = this.state.repos.filter(
            repo => repo.id !== repo_id
        );
        this.setState({repos});
        removeRepo(repo_id).then(
            success => {
                console.log('success remove repo');
            },
            error => {
                console.log('error remove repos');
            }
        );
    }

    render() {
        const { loading, error, repos } = this.state;
        const { addRepo, removeRepo } = this;
        return (
          <div className="app">
          <AddRepoForm onNewRepo={addRepo} />
          {
              (loading)?
                  <span>Fetching library list...</span> :
                      <RepoList repos={repos} onRemove={removeRepo} />
          }
          {(error) ? <p>Error loading library list: {error.message}</p> : ""}
          </div>
        );
    }
}

export default App;

