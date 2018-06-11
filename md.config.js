const marked = require('marked')
const renderer = new marked.Renderer()
renderer.table = (header, body) => {
  return `<table class="table table-striped table-bordered">${header + body}</table>`
}

module.exports = renderer
