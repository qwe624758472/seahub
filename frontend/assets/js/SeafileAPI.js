export const getRepoList = () => new Promise((resolves, rejects) => {
      const api = `http://localhost:8000/api2/repos/?type=mine`
      const request = new XMLHttpRequest()
      request.open('GET', api)
      request.onload = () => (request.status == 200) ?
        resolves(JSON.parse(request.response)) :
        rejects(Error(request.statusText))
      request.onerror = (err) => rejects(err)
      request.send()
});

export const removeRepo = (repo_id) => new Promise((resolves, rejects) => {
      const api = `http://localhost:8000/api2/repos/${repo_id}/`
      const request = new XMLHttpRequest()
      request.open('DELETE', api)
      request.onload = () => (request.status == 200) ?
        resolves(JSON.parse(request.response)) :
        rejects(Error(request.statusText))
      request.onerror = (err) => rejects(err)
      request.send()
});
