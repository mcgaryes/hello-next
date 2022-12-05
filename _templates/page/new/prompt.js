// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'select',
    name: 'page-type',
    message: "What type of page do you want to create?",
    choices: [
      'static',
      'dynamic',
      'hybrid',
    ]
  }
]
