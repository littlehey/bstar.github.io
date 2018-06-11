export default {
  name: 'renderFn',
  functional: true,
  props: {
    render: Function,
    item: Object,
    index: Number
  },
  render: (h, ctx) => {
    const params = {
      item: ctx.props.item,
      index: ctx.props.index
    }
    return ctx.props.render(h, params)
  }
}