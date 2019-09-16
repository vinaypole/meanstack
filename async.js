console.log('before..');
//getUser(1, getRepos);
// getUser(1).then(user => getRepositories(user))
//         .then(repos => getCommits(repos[0]))
//         .then(commits => console.log('commits', commits))
//         .catch(err => console.log('error', err.message));

PrintCommits();

console.log ('after');

async function PrintCommits()
{
    const user = await getUser(1);
    const repos = await getRepositories(user.username);
    console.log(user);
}

function getRepos(user)
{
    console.log('User ', user);
    getRepositories(user, getCommitmetns);
}
function getCommitmetns(repos)
{
    console.log('repositories', repos);
    getCommits(repos, displayCommits);
}
function displayCommits(commits)
{
    console.log('commits ', commits);
}

function getUser(id)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log ('reading from the database ');
            resolve({id: id, name: 'vinay' });
        }, 2000);
    });
}

function getRepositories(username)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log ('reading repos the database ', username);
            resolve(['repo1', 'repo2']);
        }, 2000);
    });
}

function getCommits(repos)
{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log ('reading commits from database ', repos);
        resolve(['commit1', 'commit2']);
    }, 2000);
    });
}

