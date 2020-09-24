const about = {
  data () {
    return {
      name: 'Out'
    }
  },
  // custom directive
  directives: {
    hai: {
      bind: (element, binding) => {
        element.style.color = binding.value
      }
    }
  }
}
export default about
