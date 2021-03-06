const template = `
<div>
<b-header/>
    <slot></slot>
<b-footer/>
</div>
`
export default {
    name: 'base-layout',
    template: template
}