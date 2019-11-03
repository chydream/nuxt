export const lazy = (commit,task,optimistic,enabled) => {
  if (enabled === undefined) {
    enabled = process.client
  }
  if (!enabled) {
    return task().then(commit)
  }
  Promise.resolve(task(optimistic))
    .then(commit)
    .catch(console.error)
  
  return Promise.resolve(commit(optimistic))
}